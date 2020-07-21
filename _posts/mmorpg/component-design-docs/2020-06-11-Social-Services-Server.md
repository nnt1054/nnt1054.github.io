---
layout: documentation
title: Social API Server
category: mmorpg
tag: Component Design Documents
---

#### Description:
The Social API Server is in charge of faciliating all inter-character communication and interaction.

[![architecture_diagram](/assets/images/mmorpg_pictures/architecture-diagram.jpg){: style="width: 100%"}](/assets/images/mmorpg_pictures/architecture-diagram.jpg)
{: class="column"}

#### Features:
* Maintains Character Search Records for currently Logged In Characters
	* Name, Log In Status, Current Location, Current Class/Job, Guild/Company
	* Note: There is a difference between Character Search Records and Charcter Data.  Search Records only include a sparse amount of information about the Character but does include their current location.
* Handles Non-Proximity based Chatting
	* Includes Direct Messages, Party Chat, Guild Chat, Linkshells
	* Does NOT include Local Chat
* Handles Party System and Guild System

#### Tools:
* Express.js
* Socket.io
	* Redis-Adapter
* Redis

[![redis-adapter](https://miro.medium.com/max/5352/1*eorR6ciIzJ_juxugxAfksQ.png){: style="width: 100%"}](https://miro.medium.com/max/5352/1*eorR6ciIzJ_juxugxAfksQ.png)
{: class="column"}
The diagram above is an example of how the Socket.io [redis-adapter](https://github.com/socketio/socket.io-redis) will function and broadcast messages between different running instances.

#### Process Flowcharts:

##### Sending a Direct Message
* When a Character logs in and connects to the Game Server, the Client also creates a websocket connection with the Social API Server
* On Client connect, the client joins a Socket.io room name "DM:@charactername"
	* The Client also joins additional Socket.io room: "guild:@guildname", "linkshell:@linkshellID"
	* On forming a party, the Client will also subscribe to a room; "party:@partyID"
* Client sends a Socket.io message to the Social API Service with the string: "/dm @lambseel here is my message"
* The Social API Service will parse the message to: "/dm", "@lambseel", "here is my message"
* Social API Server will check if the room "dm:lambseel" exists
	* If the room does not exist, respond back to the Client that the user is offline
* Social API Server will make a call: `socket.to(dm:lambseel, "here is my message")`
	* redis-adapter publishes message events to all Social API Server pods
	* If a Social API Server Pod has a socket connection thats subscribed to a "dm:lambseel" room, then that Pod sends a message through that socket to User lambseel's chat Client.

##### Proximity Chat (Game Server Instance):
* Client sends a chat message to the Game Server Instance
* Game Server Instance emits that message to all of its active websocket connections

##### Getting Character Search Record
* on Client connect, the Social API Server will make an API request to the Character Data API
* the Social API Server will then create a Search Record Entry of the Character's Data

##### Udpating Location in Character Search Record
* on Client connect to a Game Server Instance, the Game Server Instance will send an API request to the Social API Server with the Character's new location
* the Social API Server updates the Search Record's Location field for that Character in the Redis database

##### Getting Status of Characters on Friends List
* the Client should have their Friends List cache/stored locally
* the Client sends a GET API request to the Social API Server with a list of Characters on their Friends List
* the Social API Server just grabs the Search Records for each Character in the list
	* If the Character is not in the Search Recrods, then they are assumed to be offline
* the Social API Server responds back to the client with the results


<br/>