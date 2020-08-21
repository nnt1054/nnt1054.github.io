---
layout: documentation
title: Configuration/Setup
category: mmorpg
tag: CI/CD and Infrastructure
---

[Github](https://github.com/nnt1054/mmorpg-cicd)

### Introduction

This section of the documentation outlines the directory structure of the cicd resources and explains which values need to be configured for a deployment.  Afterwards, we outline step by step on how to deploy the cicd system and describe which/what resources are deployed on which clusters.

### CI/CD Directory Structure

{% highlight python %}
"""
.
├── chartmuseum/
|   ├── values.yaml
├── docker-registry/
|   ├── values.yaml
├── minio/
|   ├── values.yaml
├── ingress-master/
|   ├── values.yaml
├── helm-api/
|   ├── charts/
|   ├── templates/
|	|   ├── configmap.yaml
|   |	└── helmsman-cronjob.yaml
|   ├── helmsman/
|   |	└── kubeconfig
|   ├── Chart.yaml
|   └── values.yaml
├── polling-server/
|   ├── charts/
|   ├── templates/
|	|   └── configmap.yaml
|   ├── Chart.yaml
|   └── values.yaml
├── cicd_storage_dss.yaml
├── cicd_tools_dss.yaml
├── applications/
|   ├── application-prod.yaml
|   ├── application-staging.yaml
|   └── application-staging.yaml
"""
{% endhighlight %}

#### Configuration:
* update the ingress.host.name and ingress.host.path values for each values.yaml file except for the helm-api.
* specify the cluster.context value in helm-api values.yaml file
* list the application pipelines and helm pipelines in the polling-server values.yaml file
* specify the cluster context for the cicd dss files
* include any new value files into the application sections of the helmsman dss files

### Example Application Directory Structure

{% highlight python %}
"""
.
├── helm/
|   ├── chart/
|   └── values/
|	|   ├── dev_values.yaml
|	|   ├── prod_values.yaml
|   |	└── staging_values.yaml
├── Dockerfile
├── node_modules/
├── index.js
└── package.json.yaml
"""
{% endhighlight %}

#### Notes:
* [Example Test Service](https://github.com/nnt1054/mmorpg-test-service)
* in an effort to give ownership of the application helm charts back to the developers, as opposed to being managed by a SRE/DevOps team, we're storing each applications helm charts and value files within their respective github repositories. These helm charts will be uploaded to the chartmuseum repository (via helm-push) and be accessed from there by the helmsman dss files.  The value files for the helm chart will be referenced by helmsman using their raw github url link.
* the Dockerfile must be in the top level directory of the repo, since the polling-server calls `docker build` using the github repo URL.

### Setup

#### Setting up CICD Cluster
1. `git clone https://github.com/nnt1054/mmorpg_cicd.git && cd mmorpg_cicd`
2. `minikube start --profile cicd && minikube profile cicd`
3. create helmsman service account
	* `kubectl create sa helmsman`
	* `kubectl create clusterrolebinding helmsman-cluster-admin --clusterrole=cluster-admin --serviceaccount=default:helmsman`
4. `helmsman --apply -f cicd_storage_dss.yaml`

#### Setting up the Application Cluster
1. `minikube --profile app && minikube profile app`
2. create helmsman service account
	* `kubectl create sa helmsman`
	* `kubectl create clusterrolebinding helmsman-cluster-admin --clusterrole=cluster-admin --serviceaccount=default:helmsman`
3. `helmsman --apply -f cicd_tools_dss.yaml`
4. `helmsman --apply -f application/application-prod.yaml`

### DSS File Descriptions
This sections describes what applications are deployed by each [helmsman](https://github.com/Praqma/helmsman) dss file.

#### cicd_storage_dss.yaml
This basically deploys the same services we would need from [JFrog Artifactory](https://jfrog.com/)
* stable/minio
* stable/docker-registry
* stable/chartmuseum

#### cicd_tools_dss.yaml
* polling-server
* helm-api
* keel-hq/keel

#### application-[env].yaml
* (the actual application)


<br/>