---
layout: documentation
title: Server Manager
category: mmorpg
tag: Component Design Documents
---

#### Description:
The Server Manager keeps track of the fleet of Game Server Instances and actively maintains a map of in-game locations to its corresponding Game Server Instance.  The Server Manager is also in charge of manually scaling the number of Game Server Instances up and down as needed.
The Server Manager is important since Game Server Instances are ephemeral are responsible for only their specified in-game location, so a controller/manager service is necessary in order to respond to requests for entry points to the Game Server Instances for specified in-game locations.

#### Features:
* responds to requests for the entrypoint/websocket subpath for a Game Server Instance given an in-game location
* creates/adds new Game Server Instances when necessary and instructs them of which in-game area they're responsible for
* receives messages from Game Server Instances when the instances want to shutdown due to inactive activity
* periodically pings each Game Server Instance for health checks

#### Tools
* Express.js
	* respond to game server instance entry point requests
	* listen for game server instance shutdowns
* Redis
	* for mapping in-game locations to Game Server Instance entry points
* Kubernetes API
	* used to scale the number of replicas in the Game Servers' StatefulSet
* [MetaController](https://metacontroller.app/)
	* used for creating Service and Ingress objects to expose each Game Server Instances created from the StatefulSet

#### Process Flowcharts

##### Responding to Request for a Game Server Instance
* Receives request for an instance given an in-game map location
* Checks Redis database to see if an instance for the in-game location already exists
* If the instances does not already exist:
	* Check if any Game Server Instances are on `standby` status
		* If none exists, increase the number of replicas for the Game Servers' StatefulSet
	* Ping the `standby` Game Server Instance and allocate it to the requested in-game location
	* The Game Server Instance responds with an OK once they've properly configured themselves
	* The Server Manger then udpates the mapping in the Redis database
* Respond to request with the Game Server Instance's entry point

##### Creating new Game Server Instance
* Using the Kubernetes API, we increase the number of replicas in the Game Servers' Stateful Set
* Increasing the replica count will create additional pods with the Game Server Instance Docker Image
* Once the Pod has been created, the Metacontroller DecoratorController will create a corresponding Service and Ingress object for each new Pod

##### Responding to Game Server Instance Shutdown
* The Server Manager is informed of a instance shutdown when:
	* a Game Server Instances sends a message to the Server Manager of its pending shutdown
	* when a Game Server Instances fails to respond to a ping/health check
* [TBD] Use Kuberentes API to shutdown the Pod and have the StatefulSet remake the Pod
	* When the Pod is restarted, it will restart into a `standby` status

##### Downscaling the Number of Game Server Instances
* [TBD] Need to figure out a way to transfer active connections from a high indexed Pod to a lower indexed pod when I want to prune inactive Game Server Instances

<br/>