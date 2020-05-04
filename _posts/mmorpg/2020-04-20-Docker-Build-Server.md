---
layout: documentation
title: Docker Build Server
category: mmorpg
tag: CI/CD and Infrastructure
---

[Github](https://github.com/nnt1054/dockerBuildServer)

#### Description:
A small express application that polls the Github Events API for new events and builds Docker images accordingly.
PushRequest events will tag the docker image as staging, and CreateEvents for new SemVer Tags will tag the docker with the SemVer Tag.  Afterwards the server pushes the image to the corresponding Docker Registry.

#### Purpose:
The purpose of this server is to help with Continous Deployment.  After changes are pushed/merged on Github, this server polls and builds the new source.  After pushing the image to the docker registry, I'll be using [Keel.sh](https://keel.sh/) to automatically detect new Docker images in the registry and deploy them onto the cluster.

#### To Do:
* write (intended) API Usage and Documentation
* write Dockerfile
* write Helm Chart and deploy onto minikube
* need to test with Keel.sh
* still need to secure the actual private Docker Registry and update the build server accordingly
* change to only monitor master branch

<br/>