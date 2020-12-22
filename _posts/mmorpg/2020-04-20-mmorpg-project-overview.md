---
layout: documentation
title: Project Overview
category: mmorpg
---

#### Introduction:
Hello!  This is a passion project of developing a 2D Web Browser MMORPG with a scaling, microservice-based, distributed-system backend which will be deployed on Kubernetes and make use of its features.  The MMO game will take inspiration from traditional MMO's such as Maplestory and Final Fantasy 14 with the gameplay of Metroidvania games and platformers such as Hollow Knight.

#### Roadmap(?):
* [CI/CD System](/blog/mmorpg/CICD-Overview) - DONE
* [Software Architecture Design Documents](/blog/mmorpg/General-Architecture) - DONE
* Implementing the Design Documents
	* will break the order of components later

#### Personal Objectives (for me, Neil Toledo):
* gain a better understanding of networking architecture and implementation with emphasis on newer modern technologies (Kubernetes)
* become more proficient in writing technical documentation
* become more proficient in full stack engineering by improving my skills in
	* networking technologies and client/server communication
	* infrastructure orchestration
	* game design and development

#### Latest Updates:
* <b>[2020-12-22] Project Reorganization and Websockets
	* Clients can now connect to and be routed by the Server Manager to a corresponding Game Server
	* Since Kubernetes/Helm proof of concept has been finished, Reorganized project to primarily be developed using localhost in order to streamline the development process.
	* To Do:
		* enable passing of websocket connections from one Game Server to another
		* reorganizing project structure and files 
* <b>[2020-08-10] Starting Work on Server Manager</b>
	* To Do: [INFRA STUFF DELAYED]
		* deploy fleet of websocket servers using a stateful set and k8's metacontroller
		* deploy game server stateful set on minikube w/docker and helm
		* add endpoints to the gameServer for the serverManager ping
		* build server manager express server and play with kubeapi
	* For now I'm sticking with saving the area-to-server mapping in an in-memory dictionary, and later I'll transfer that to a redis-db so I can scale the server manager up (assuming necessary).

* <b>[2020-08-09] Basic Socket.io Networking</b>
	* [Networking Demo](https://twitter.com/LambSeel/status/1292460430263119873)
	* the client can now send basic inputStates to the server when an action occurs or inputState changes
	* the client can now receive gameState updates from the server and propogate object gameState information to their relevant gameobjects
	* the server can now send/broadcast their current gameState on a specified interval
		* gameObjects are able to read and update their portion of the server gameState object
	* the server can now recieve inputState from clients and propogate the input state to the appropriate gameObjects on the server and update accordingly
	* still need to implement Lag Compensation and Client/Server syncing. [Video Example](https://twitter.com/LambSeel/status/1293044370602565632)

<br/><br/><br/><br/>