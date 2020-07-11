---
layout: documentation
title: Game Client
category: mmorpg
tag: Component Design Documents
---

[Github](https://github.com/nnt1054/mmorpg-helm-api)

#### Description:
A small express application running in the server that updates the helmsman deployment went triggered.
When the `/apply` endpoint of the server is pinged, the API searches for a `helmsman-cronjob` object on the server and creates a new kubernetes job using the cronjob's stored job template.  The kubernetes job will make a `helmsman --apply -f < dss >.yaml` call and apply helm chart updates to the cluster.




<br/>