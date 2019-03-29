---
layout: post
title:  "AniBook Initial Design/Research"
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

#### Exploring Types/Attributes of a PWA

##### Service Workers
Services Workers function as a middleman between the browser and the network, and are in generally used for providing offline functionality, cacheing, and handling communication with the network.  They operate on a seperate thread from the main Javscript code and is non-blocking.  The benefit to the Service Workers is being able to listen for 'fetch' API calls, and checking the cache before making the request.  Probably more on this later, since I don't feel I explained this well. Here's the best [article](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Offline_Service_workers) I've found explaining it.

##### Application Structure
Will come back to this later...

