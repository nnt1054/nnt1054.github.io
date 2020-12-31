---
layout: documentation
title: Scrum Board [WIP]
category: mmorpg
---

#### Introduction:
Not actually much of a Scrum Board but I needed a place to document and breakdown tasks in a way similar to Jira tickets and stories.

#### In Progress/To Do:
* Create <s>BaseClientScene.js and</s> BaseServerScene.js to use as parent for other scenes
* Create Multiple Scene's and Portals between them
* Resize Canvas to window in mini5-engine source
* Create Camera Controller object
	* create map game object and anchor all objects to it
	* update map canvas position to center/follow window on player
	* create horizontally long scene and vertically long scene

#### Backlog:
* ...

#### Completed:
* Add ENGINE_MODE variable to mini5-engine to run as 'server', 'client', or 'local'
* Create BaseClientScene.js and BaseServerScene.js to use as parent for other scenes
* Reorganize Relevant WebSocket functions and callbacks to appropriate files
	* strip from mini5-engine module
	* can implement into client/index.js, server/index.js for now
	* should move to dedicated client.js, server.js files later

<br/><br/><br/><br/>