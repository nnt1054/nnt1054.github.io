---
layout: documentation
title: General Architecture
category: mmorpg
---

This document describes the mmorpg's high-level architecture.

[![architecture_diagram](/assets/images/mmorpg_pictures/architecture-diagram.jpg){: style="width: 100%"}](/assets/images/mmorpg_pictures/architecture-diagram.jpg)
{: class="column"}

#### Architectural Overview

* the server manager handles creating and deleting game server instances and assigning them to handle respective in-game map areas as needed in order to distribute the mmorpg over several pods
* all the supplementary features such as chat api, social services, etc. will be handled as microservices
* a primary gateway server will handle the user authentication using the Google Idenity Platform and keep record of active user sessions

#### Components and Interfaces

* Game Client
* Primary Gateway Server
* Server Manager
* Game Server Instances
* Social API Service
* Account Data API
* Character Data API
* Questing API
	* stores all Quest information
* CDN Asset-Server


#### Design Considerations:
* I wanted the architecture to follow a microservices pattern for serveral reasons
	* easy for horizonatlly scaling individual features/aspects of the overall project
	* easier to understand and read higher level/complicated architecture if its actually broken down into smaller microservices
	* we might want separate services to be accessible outside of the context of the actual game
		* ex: displaying character data and leaderboards on the landing page website outside of a running game server
	* will be easier to add newer features to the project in the long term
* allows for instancing individual areas of the in-game world by separating them into different pods so the entire world is handled by one running process/CPU
	* resource optimization vs performance optimization vs network/bandwidth optimiztion
	* will also make it easier to create instanced areas and dungeons as a feature to the mmo

#### Revisions

##### Revision 1
[![l2_diagram](/assets/images/mmorpg_pictures/l2-diagram.png){: style="width: 100%"}](/assets/images/mmorpg_pictures/l2-diagram.png)
{: class="column"}

##### Revision 2
[![low_spec_diagram](/assets/images/mmorpg_pictures/low-spec-diagram.jpg){: style="width: 100%"}](/assets/images/mmorpg_pictures/low-spec-diagram.jpg)
{: class="column"}

##### Revision 3
[![architecture_diagram](/assets/images/mmorpg_pictures/architecture-diagram.jpg){: style="width: 100%"}](/assets/images/mmorpg_pictures/architecture-diagram.jpg)
{: class="column"}

#### Notes/Thoughts:
* I'm thinking of adding a Map Data API, so Game Server Instances don't need to have a copy of ALL other Map details despite only being charge of one Map area.  The Server Manager would just send a Map ID to an idle Game Server, and then the Game Server would send a request to the Map Data API and set itself up based on the response.

<br/>