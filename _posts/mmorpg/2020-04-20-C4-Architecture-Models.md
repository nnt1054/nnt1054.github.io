---
layout: documentation
title: C4 Architecture Models
category: mmorpg
tag: Software Architecture
---

For now, these will mostly be descriptions of what the diagrams will look like/include, before I draw and render the actual diagrams.  
Reference: [C4 Model for Visualising Software Architecture](https://c4model.com/)

#### Level 1: System Context

* first we have the public end users that we can call the g a m e r s
* I’ll be using the Google Identity Platform for login and authentication
* For now we can separate the client side and server side as separate Software Systems
* Client Side Role:
	* sends user input and signals to the server
	* runs game logic and client-side predictions
	* draws and renders the game onto the g a m e r ' s screen
	* re-synchronizes the client side game state based off messages from the server
* Server Side Role:
	* for system context I’ll leave out the infrastructure related content
	* or maybe I should split the infrastructure and client side server code?
	* or include the kube-api as its separate software system?

#### Level 2: Container Context

[![l2_diagram](/assets/images/mmorpg_pictures/l2-diagram.png){: style="width: 100%"}](/assets/images/mmorpg_pictures/l2-diagram.png)
{: class="column"}

* Client Side
	* this isn’t technically packaged in its own container, but is a bundle of code served by the master server
	* runs phaser.io game loop to render the game onto the web browser
	* handles user input and sends events to game instance server
	* does client side prediction and server synchronization during update loop
* Master Game Server
	* serves client side application to the user
	* redirects user to game instance server IP, and sets up connection between the two
* Player Data Service
	* only receives events from the game instance servers
	* stores and updates all relevant player data
	* might be accessible through a leader boards website or something
	* CAN be scaled independently depending on necessity
* Server Manager
	* takes requests from the main master server and is in charge of using the kube-api and spawning game instance servers
* Game Instance Server(s)
	* is spawned by the server manager
	* runs an express.js and phaser.io game loop (except for the draw function)
	* takes connected user input, calculates updates and responds with updated game state
	* sends and receives updates from the player data service
	* is only responsible for events happening within respective map/geography

some of this information probably belongs in the L3 component diagram, but it’s important to first know what the containers are and how they interact :)

Other Things to Consider:

* chat messages
* party, guild and quest data

#### Level 3: Component Context
some of this will probably just be a rehash of L2, but can probably specify more of the libraries/database technologies that facilitate each components functionality :)

* Master Game Server
	* redis queue maybe to keep track of all logged in/active users
	* yeah, in case master game server needs to be scaled as well, we can sync logged in users to a redis db
* Server Manager
	* if need to uh scale the server manager, then can probably use redis to keep track of all the game instance servers
* Game Instance Server
	* actually not sure if it needs a redis instance if it can handle everything in memory?  I mean, redis is already in memory, but thats beside the point.  Since game servers are temporary, it could probably handle everything going on in its own memory stack
	* Unrelated, but this brings up the point of managing global events if necessary? (something like a chat box; maybe make a chat microservice lmao should be PLENTY of tutorials for that one)
		* also unrelated but I like how you had to pay for global chat messages

#### Level 4: Code Context
* haha might skip this for now  
* seems unnecessary until further notice