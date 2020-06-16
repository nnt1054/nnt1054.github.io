---
layout: documentation
title: Process Flowcharts (Draft)
category: mmorpg
tag: Software Architecture
---

For each feature of the game I’m gonna be sort of brainstorming and jotting down logistics of how features will be implemented.

[![l2_diagram](/assets/images/mmorpg_pictures/l2-diagram.png){: style="width: 100%"}](/assets/images/mmorpg_pictures/l2-diagram.png)
{: class="column"}

#### Login Process:
1. the front end client opens a google auth login link
2. front end client saves a session/login token into local cache
3. client sends session token with websocket connection request to the master server
4. master server verifies session token using google identity platform
5. master server adds user to ‘logged in users’ redis table
6. master server requests player data and last known location from player data service
7. master server sends api call to server manager requesting ip address for corresponding game server
8. server manager checks if there exists active game server for location, if not creates a new pod and sends configuration details and then responds to master server with ip address
9. master server responds to client with game server address as well as social service api
10. client establishes websocket connection with both IP addresses
	* can possibly include a verification token to ensure misc. clients can’t establish connections with random game servers

#### Character Moves to a Different Area Process:
1. client sends user input to exit area
2. game server receives user input and verifies attempt to exit area
3. game server sends message to master game server that player is moving areas
4. master game server sends request to server manager for new game server
5. server manager checks for requested game server
	* if game server exists send ip to master game server
	* else if previous game server now has zero players, reconfig existing connection and update redis
		* can maybe skip some of the next steps since no new websocket needs to be created
	* else create/find inactive game server and respond with its IP address
6. master game server receives IP address, saves the players new location, and sends back to game server
game server sends IP address back to client and closes the websocket connection


<br/>