---
layout: post
title:  "Adding Units to the GameBoard"
date:   2019-03-09
categories: notes
tags: unity
---

#### This page is still incomplete

#### Intro
Last post I was able to make a GameBoardGrid using BoardTile prefabs.  Now I want to add units and be able to select and move them around.

#### Game Objects
First, we want to understand the game objects we'll be creating, and understanding their role and where to put certain functions.

##### GameManager
* handles the overarching game flow

##### Unit
* the actual unit we'll be moving
* contains its own pathfinding algorithms, and movement stats

##### BoardTile
* will be the parent to its containing unit
* used for unit/position selections
* will throw authority to the GameManager to handle tileClicks on itself

#### Moving a Unit
These are my initial ideas on implementation before actually implementing it.
1. gameManager enters idle state
2. click on tile --> if idleState and containsUnit --> pass reference of self and unit to gameManager
3. gameManager enters selectState
4. click on tile --> if selectState and !containsUnit --> move unit to tile

#### How does the TicTacToe Tutorial handle Game Logic
* uses a GameController object
* on Awake() imports the gridSpace references to be accessed locally
* GameManager has getter functions for other objects to use to get relevant information
  * should I give units access to the GridGame board to move themselves?
  * this way each unit can apply their own movement stats and algorithms
  * unit's can physically move themselves in the world space, and make themselves a child of their new tile
  * being a child of the tile is useful, so you can add getters and setters for unitContained and vary responses useful for fog of war functionality later on
* GridSpaces contain their own data of the "X" or "O"
* GridSpaces use GameManager.getPlayerTurn to help decide game logic
* GridSpaces also call the GameManager.EndTurn() function themselves


BoardTile clicks() should always just report to the gameManager that a click event has occured. This indicates that a GameManager.handleTileClick() function would be useful.  It should check take in the clicked tile position as an argument and check the GameManager's state, whether or not it's waiting for a tile to be selected or to initiate a Unit's action functions.