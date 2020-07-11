---
layout: documentation
title: Primary Gateway Server
category: mmorpg
tag: Component Design Documents
---

#### Description:
The Primary Gateway Server is the main point that the client connects to first and is responsible for managing authenticated and logged in clients.  The primary server is also resposnsible for redirecting the client to the proper game server instances.

#### Features:
* Web Server that serves the landing page and client side code
* Authenticates the Client using Google Identity Platform
* Maintains list of logged in Accounts (via Redis instance)
	* also includes information for logged in Character and Character's current location
	* also handles Session Management for authenticated users
* Connects Client to the proper Game Server Instance on Log In

#### Tools
* Express.js
* Socket.io
	* primarily used to relay game server instance entry points to the Client
* Redis
	* for Session Management
	* for keeping track of logged in Accounts and Characters

#### Process Flowcharts

[![low_spec_diagram](/assets/images/mmorpg_pictures/low-spec-diagram.jpg){: style="width: 100%"}](/assets/images/mmorpg_pictures/low-spec-diagram.jpg)
{: class="column"}

##### Logging in a User:
* Primary Gateway Server serves website to the User/Client
* User logs in via a Google Auth Link
	* User stores the session token in Cache
	* Sends a login request to the Primary Gateway Server
* Primary Gateway Server authenticates the User and creates a sticky session
	* Server makes request to the Account API for a list of the User's Characters
* User sends a request oh which Character they'd like to login as
	* User is redirected to the `/game` subpath and establishes a websocket connection with the Primary Game Server
* Primary Server sends an API request to the Character Data API for selected Character's last known in game location.
	* Primary Server sends a request to the Server Manager for entry point to the specified in-game location's Game Server Instance
	* Primary Server adds an entry/row to the `Logged In Users/Characters` Redis database.
	* Primary Server pings the Game Server and instructs it to 'prepare a connection' with the current Client logging in
	* Primary Server responds to the Client with the entry point
* Client establishes a websocket connection with the Game Server Instance with a "Logging In" tag
	* Client creates a websocket connection with the Social Services Server
	* Client requests required game assets from the CDN Assets Server
* Game Server adds the Client's Character Object to the game

##### Logging out a User:
* Client sends logout request to the Game Server Instance, Primary Server and Social Services Server
	* OR be signaled on websocket connection disconnect/close
* Primary Server removes the User's `Logged In` entry from its Redis database.

<br/>