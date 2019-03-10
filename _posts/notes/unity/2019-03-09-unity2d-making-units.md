---
layout: post
title:  "Adding Units to the GameBoard"
date:   2019-03-10
categories: notes
tags: unity
---

#### This page is still incomplete

#### Intro
Last post I was able to make a GameBoardGrid using BoardTile prefabs.  Now I want to add units and be able to select and move them around.

#### Game Objects
First, we want to understand the game objects we'll be creating, and understanding their role and where to put certain functions.

##### Game Manager
* handles the overarching game flow
* 

##### Unit
* the actual unit we'll be moving
* contains its own a* algorithm

##### BoardTile
* we'll be 

#### Moving a Unit
1. gameManager enters idle state
2. click on tile --> if idleState and containsUnit --> pass reference of self and unit to gameManager
3. gameManager enters selectState
4. click on tile --> if selectState and !containsUnit --> move unit to tile