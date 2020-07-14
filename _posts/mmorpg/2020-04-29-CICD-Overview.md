---
layout: documentation
title: Overview
category: mmorpg
tag: CI/CD and Infrastructure
---

[Github](https://github.com/nnt1054/mmorpg-cicd)

### Introduction:

This is a custom CI/CD system (sub-)project put together as a learning experience as well as tool for developing this mmorpg.  The system is primarily focused on continous delivery and automatically upgrades both docker images and helm chart deployments upon new available semver or staging versions.
A general theme/goal of the project was to create a "portable" CI/CD system that can be quickly torn down and rebuilt.  The system is entirely self hosted and all the necessary configuration exists within the project.  This is primarily faciliated through the use of [helmsman](https://github.com/Praqma/helmsman), an "Application as Code" tool, that allows for deploying and maintaining several helm charts.

### Overview:
[![cicd-overview](/assets/images/mmorpg_pictures/cicd-overview-01.png){: style="width: 100%"}](/assets/images/mmorpg_pictures/cicd-overview-01.png)
{: class="column"}

<br>

### How it Works:

#### Docker Image Updates
1. Once the developers have ensured their updates are working in their local environment, they can make a PR and merge their changes to their master/prod github branch.
2. The Polling Server will detect the new PR merge, call `docker build` on the github repo with a 'staging' tag and `docker push` the built image to the docker registry.
3. Keel.sh will detect the new available 'staging' image, and automatically upgrade the corresponding (staging) helm chart deployment on the cluster
4. Once the developers have verified there are no issues with the staging deployemnt, they can add a new semver tag to the github repository.
	* (eventually we'll have tests to automatically check staging/prod deployments)
	* the same cycle will repeat with the polling server and keel.sh, except using the new semver tag and will upgrade the production deployment.

#### Helm Chart Updates
1. Once the developers have ensured their updates are working in their local environment, they can make a PR and merge their helm chart updates to the master/prod github branch.
	* (more on github repo structure later)
2. After merging, the developers can run `helm push <github-repo> --version staging`, which will package and push the new helm chart to the chartmuseum repository.
3. The Polling Server will detect the helm chart version, and will ping the `/apply` endpoint of the running Helm API.
4. The Helm API searches for the `helmsman-cronjob` resource on the cluster, and manually create a kuberenetes job from its job template.
5. The kubernetes job will run a `helmsman --apply -f <dss>.yaml` command, which will apply new helm chart upgrades to the cluster.
6. Once the developers have verified there are no issues with the staging deployment, they can make another `helm push` call with `--version <semver tag>`, and the process will repeat with the updated version.
	* Note: major semver updates will have to be approved by the SRE/DevOps team, and must be updated in the helmsman dss files.

#### Rollbacks:

##### Production
* tag a previous commit that you want to rollback to with an updated semver
	* the polling server and keel.sh will detect the new tag and rollback the update

##### Staging
* TBD

<br>

### Component Descriptions

#### Polling Server
* polls the github events api for provided repositories until either new changes or new tags are detected
	* after detecting new events, will call docker build and docker push on the provided repository
	* will tag the docker image as staging for repo changes or use a semver tag for new tag events
* polls the helm chart repository for new chart updates
	* after detecting new helm chart verseions, will send a request to the `/apply` endpoint of the helm-api

#### Helm API
* when the `/apply` endpoint is pingged, will create a kubernetes job using an existing cronjob as a template
	* the job created will make a `helmsman --apply -f < dss >.yaml` call and apply helm chart updates to the cluster
* (name subject to change)

#### Keel.sh
* [Keel.sh](https://keel.sh/) is an open source "Kubernetes Operator" that detects new available docker image versions and automatically updates the deployment based on provided configuration.
* I contributed to the open source project by adding Helm v3 support :)

#### Docker Registry
* a basic docker registry for holding docker images deployed from the `stable/docker-registry` chart.
* uses minio s3 buckets for storage

#### ChartMuseum
* a basic helm chart repository for holding packaged helm chart files deployed from the `stable/chartmuseum` chart.
* uses minio s3 buckets for storage

#### Helm Push
* [Helm Push](https://github.com/nnt1054/helm-push) is a helm plugin that packages and pushes helm charts to provided helm chart repository
* forked the original plugin and made changes to allow for pushing helm charts via github repo url

<!--

### Configuration and Setup

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

* configuration
	* organization of files
	* snapshot of the kuberentes cluster


-->


<br>