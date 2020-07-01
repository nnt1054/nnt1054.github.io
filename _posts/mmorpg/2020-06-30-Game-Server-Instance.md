---
layout: documentation
title: Game Server Instance
category: mmorpg
tag: Component Documents
---

[Github](https://github.com/nnt1054/mmorpg-helm-api)

#### Description:
A small express application running in the server that updates the helmsman deployment went triggered.
When the `/apply` endpoint of the server is pinged, the API searches for a `helmsman-cronjob` object on the server and creates a new kubernetes job using the cronjob's stored job template.  The kubernetes job will make a `helmsman --apply -f < dss >.yaml` call and apply helm chart updates to the cluster.

#### Purpose:
The purpose of this server is to help with Continous Delivery, specifically with reflecting updates to helm charts in the cluster deployment.

<br/>