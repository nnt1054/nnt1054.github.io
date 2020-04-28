---
layout: documentation
title: Docker Build Server
category: mmorpg
tag: CI/CD and Infrastructure
---


#### Hey Lmao
Lorem ipsum dolor sit amet, reque definitionem sed eu. At nam quod laoreet impedit, et nam diam utroque ocurreret. Ex eius erat persius eum. Dicam inermis ponderum eos id, prima ubique cu sea. Erant possim pertinax usu ei.

In ius adhuc ancillae, usu ad populo voluptua. Mel cu veritus iudicabit, eum te viderer suscipit, ex nam quas singulis suscipiantur. Eam at vidisse consectetuer. Usu at integre incorrupte interesset, atqui impedit ut est, cu per elitr dolorem neglegentur. Labores veritus in eum, at discere equidem incorrupte per.

#### In Process Notes
so the bottom line here is that I'm just creating a running function that keeps pinging the github events api until we find a new PushEvent

oh maybe i can break down the steps into functions and expose those functions via API endpoints, so i can test the middle steps without creating a new pushevent every time

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