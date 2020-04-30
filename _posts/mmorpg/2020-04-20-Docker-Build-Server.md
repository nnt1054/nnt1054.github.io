---
layout: documentation
title: Docker Build Server
category: mmorpg
tag: CI/CD and Infrastructure
---


#### Development Roadmap/To Do:
* determine json configuration spec/outline
* write (intended) API Usage and Documentation
* write tmp/staging directory setup function and script
* write tag/push docker image function and script with SemVer naming
* figure out Unit Testing approach

#### Steps
1. Poll Github Events and find new PushEvent
	* assuming there will be intermediate events to confirm new push event
2. git clone repo into a tmp/staging directory
3. npm install in the directory
4. docker build on the tmp directory
5. run unit test on built docker image
6. tag docker image
7. push docker image to repository
8. save console output to file

Instead of writing a javascript function for each command, is it better to just write a full automation script for the process?

#### Misc. Notes
so the bottom line here is that I'm just creating a running function that keeps pinging the github events api until we find a new PushEvent

oh maybe i can break down the steps into functions and expose those functions via API endpoints, so i can test the middle steps without creating a new pushevent every time

it might be cool to just have the json config under some sort of static site and I can just send an http request there, because IDEALLY I don't want to bother running a full database for these configs.  I also want to make sure any changes are persistent, and that I don't have to completely redeploy this server.  What if I used a kubernetes ConfigMap for this?  That's also an interesting idea... Nevermind, you can't really store lists/json in a ConfigMap and have it easily digestible by the actual application.  I'd have to export a separate json file into a string and paste it into the ConfigMap, have the Deployment set the data as an environment variable and have the application unpack it from there.  I'm going to just stick with a static json file in the container since I'm getting too hung up on this :)