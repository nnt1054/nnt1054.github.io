---
layout: documentation
title: Polling Server
category: mmorpg
tag: CI/CD and Infrastructure
---

[Github](https://github.com/nnt1054/mmorpg-polling-server)

#### Description:
A small express application that polls the Github Events API for new events and builds Docker images accordingly.
PushRequest events will tag the docker image as staging, and CreateEvents for new SemVer Tags will tag the docker with the SemVer Tag.  Afterwards the server pushes the image to the corresponding Docker Registry.
A the application also polls specified helm chart repositories for listed helm charts.  The server only checks for the most updated semver version and the latest staging version in the repository. If a new semver version or staging version is found, the polling server will ping the Helm API to upgrade the helm charts running on the cluster.

#### Purpose:
The purpose of this server is to help with Continous Delivery.  After changes are pushed/merged on Github, this server polls and builds the new source.  After pushing the image to the docker registry, I'll be using [Keel.sh](https://keel.sh/) to automatically detect new Docker images in the registry and deploy them onto the cluster.

<br/>