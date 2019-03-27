---
layout: post
title:  "Anibook Initial Design/Research"
date:   2019-03-26
categories: projects
tags: anibook
---

#### Intro
Want to make a React PWA that displays currently airing Anime data, and sends push notifications to alert the user of new episodes for shows they've highlighted.  The user will also be able to view and sort shows by seasons, rating, and other statistis provided by the API.

#### API's
1. [Jikan](https://jikan.docs.apiary.io/#reference/0/anime)  
  * most straightforward and easy to use
  * cache seems simple, but initial requests seem slow
2. [AniList API](https://anilist.gitbook.io/anilist-apiv2-docs/)
  * uses GraphQL in place of a normal REST API.

Currently learning towards Jikan, since 
