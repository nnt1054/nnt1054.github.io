---
layout: documentation
title: General Architecture
category: mmorpg
---

This document describes the mmorpg's high-level architecture.

#### Problem

* I wanted the architecture to follow a microservices pattern for serveral reasons
	* easy for horizonatlly scaling individual features/aspects of the overall project
	* easier to understand and read higher level/complicated architecture if its actually broken down into smaller microservices
	* we might want separate services to be accessible outside of the context of the actual game
		* ex: displaying character data and leaderboards on the landing page website outside of a running game server
	* will be easier to add newer features to the project in the long term
		* monetization schemes maybe and what not
	* transforms the game from being just a game to a "company infrstructure"
	* "it decouples the game's components from each other, increasing versatility and maintanability" - moscowwbish
		* "and allows various components to be re-used for different purposes"

* allows for instancing individual areas of the in-game world by separating them into different pods so the entire world is handled by one running process/CPU
	* resource optimization vs performance optimization vs network/bandwidth optimiztion

* list of alternatives:
	* layering

#### Architectural Overview

* the server manager handles and manages the actual game server instances, assigning instances to map areas, spinning up more instances and deleting some, and routes the players to their respective game server instances

* all the supplementary features such as chat api, social services, etc. will be handled as microservices

* a primary server will handle the initial user authentication and keep record of active user sessions, since game servers are going to be somewhat "ephemeral"

#### Components and Interfaces

* frontend/client

* primary server

* server manager

* game servers

* social services
	* party, guild, private messages

* player data service(s)
	* tbd
	* this is used for storage individual player/character relevant data such as levels/stats
	* might make a separate inventory service


[![l2_diagram](/assets/images/mmorpg_pictures/l2-diagram.png){: style="width: 100%"}](/assets/images/mmorpg_pictures/l2-diagram.png)
{: class="column"}


<br/>