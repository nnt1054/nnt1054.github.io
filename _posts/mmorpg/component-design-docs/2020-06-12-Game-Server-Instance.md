---
layout: documentation
title: Game Server Instance
category: mmorpg
tag: Component Design Documents
---

#### Description:

The Game Server is the actual application that clients connect to and it runs the actual game engine and logic.  The Game Server receives input from its connected clients and runs and update/draw loop without the “draw” portion and sends game updates back to each user.  The server is also responsible for applying physics, collisions and running Mobs/NPC AI’s.  Each Game Server Instance is in charge of one geological area in the in-game world.

#### Features:

* handles websocket connections with the User
	* Either the server manager or another game server instance must inform the game server beforehand of any upcoming client connections
	* prepares for a pending client connection by querying the user’s relevant data
		* makes a request to the Character Data API and Quest Data API
* receives and processes client inputs and sends game state updates back to the user
* maintains an IDLE state on startup until the server manager allocates the server to run a specific in-game area
* informs adjacent game server instances of clients moving out of the current area to theirs
* can transfer game state and all connected clients to another copy of the game server

#### Tools:
* mini5-engine
	* javascript “game engine” update/draw loop
* Socket.io
	* handles connections with the User
	* CAN be replaced with the WebRTC data pipeline later down the road
* Express.js
	* for providing endpoints for the server manager and other game server instances

#### Process Flowcharts:

##### Receiving Input from Users:

So this description is still going to be a WIP since the game engine itself is still unfinished.  The socket.onmessage() function will append any messages to an event stack attached to the game server.  The event stack will be ingested and cleared afterwards by the game server for every update loop.  The formatting of messages will be decided during implementation.

##### Character Moves to a Different Area Process:
* character tells game server it wants to move to a different area
	* character sends an ‘input command’ to the game server while standing next to the door
		* game server receives the input, checks collision between character and door
		* game server knows which area that door leads to and accepts request to move to adjacent area
	* client sends TP command to game server using a UI
		* the websocket message specifies tc event request and location request
* game server sends request to server manager for the requested game server
	* server manager checks for game server, if it doesn’t exist, starts it up*
	* server manager responds to the current server with the new server entrypoint
* game server sends a update request to the Player API service to updates the player’s stored data
* game server 1:
	* pings game server 2 to make sure its up and running
	* tells game server to prepare a client connection with the specified client
	* sends player document data to game server 2
		* game server 2 sets last known client location to point to itself
* game server responds back to the client with game server 2’s entrypoint
* client establishes connection with game server 2
	* game server checks connection request with ‘pending requests’ list
	* establishes connection and adds character to the game area
	* sends update to the Social Services Server of the Client’s current location
* client disconnects from gamer server 1

<br/>