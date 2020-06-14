---
layout: documentation
title: CD Overview
category: mmorpg
tag: CI/CD and Infrastructure
---

### page still under construction :)

### Introduction:

hi aha this is a custom cicd system that I put together to allow for continous delivery while I develop my mmorpg project.  A general goal/theme of the project was to have it be incredibly "portable", where the entire system is self hosted and all the necessary configuration happens within the system.  Also, the system will be really easy to tear down and redeploy through the use of helmsman.

* this entire project was mostly a big learning experience for me
* theme was portability and ease of deployment and configuration (without a ui tho)
* since I'm using minikube and developing everything locally, I wanted to be able to quickly tear down and rebuild everything from scratch.
* with the theme of using helmsman to deploy all the resources, I wanted to stick with mostly services on the helm/stable repository.
	* on this note, I wanted to use spinnaker, but their stable chart was not yet compatible with the most recent version of kubernetes.
	* I didn't really want to use jenkins, since I haven't had the best experience with it. It also felt overkill for what I was trying to go for.  All I needed was to detect github changes and call docker build and push when new changes have been committed.

### Overview:
[![cicd-overview](/assets/images/mmorpg_pictures/cicd-overview-01.png){: style="width: 100%"}](/assets/images/mmorpg_pictures/cicd-overview-01.png)
{: class="column"}

#### Docker Image Updates

1. code is working in the local dev environment and I’m ready to push updates
2. make a git pull request to merge into the master branch
3. on a new PushEvent, the [polling server](/blog/mmorpg/polling-server) creates a new docker image for the production environment.  we’ll just call it ImageName:staging and keep overwriting the staging environment
* keel.sh with force policy and match-tag true will update the staging environment in the cluster
4. after running whatever e2e and user tests on the staging application, we can decide to make a new release and roll out to the production environment.
* tag the latest commit with proper SemVer
5. upon making a new tag, the build server will poll the update, verify the updated semver number, and push the new docker image to the docker registry
* keel.sh with MAJOR policy will detect the new docker image and deploy onto the production servers

### Rollbacks:

#### Production
* tag a previous commit that you want to rollback to with an updated SemVer
	* the build server and keel.sh will detect the new tag and rollback the update

#### Staging
* reset to a previous commit
	* need to figure out how github events api handles commit resets and configure the docker build server accordingly
or push an old commit as the most updated commit again

### Configuration

Here's a quick list of everything that needs configuring:
* github repo pipelines
* helm chart pipelines
* dss files
* host names(?)

#### TOC

This page is the *entire* general overview, so include everything needed to understand what the system does

* Introduction/Overview
* diagram/flowchart of what exactly is going on
* outlining general role of each component (polling-server, helm-api, keel)
* explanation of helmsman and the corresponding dss files
	* explanation of all the other necessary "cluster resources"
* configuration

<br>