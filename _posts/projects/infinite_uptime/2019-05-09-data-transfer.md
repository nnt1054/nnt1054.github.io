---
layout: post
title:  Data Transfer API
date:   2019-01-28 19:46:40 -0800
categories: projects
tags: infinite_uptime
---


#### Overview

Created an API with Flask that temporarily invokes Google Compute VM instances to run larger Bigtable
data transfer jobs in a Docker container.  This was made as a solution to offload transfer jobs from local machines while the company migrates to their new architecture.