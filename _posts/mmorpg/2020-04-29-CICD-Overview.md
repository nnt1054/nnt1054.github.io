---
layout: documentation
title: CI/CD Overview
category: mmorpg
tag: CI/CD and Infrastructure
---


### Update/Rollout Overview:

1. code is working in the local dev environment and I’m ready to push updates
2. make a git pull request to merge into the master branch
3. on a new PushEvent, the docker build server creates a new docker image for the production environment.  we’ll just call it ImageName:staging and keep overwriting the staging environment
* keel.sh with force policy and match-tag true will update the staging environment in the cluster
4. after running whatever e2e and user tests on the staging application, we can decide to make a new release and roll out to the production environment.
* tag the latest commit with proper SemVer
5. upon making a new tag, the build server will poll the update, verify the updated semver number, and push the new docker image to the docker registry
keel.sh with MAJOR policy will detect the new docker image and deploy onto the production servers

### Rollbacks:

#### Production
* tag a previous commit that you want to rollback to with an updated SemVer
	* the build server and keel.sh will detect the new tag and rollback the update

#### Staging
* reset to a previous commit
	* need to figure out how github events api handles commit resets and configure the docker build server accordingly
or push an old commit as the most updated commit again