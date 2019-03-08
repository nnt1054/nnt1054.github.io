---
layout: post
title:  "Creating a Game Board"
date:   2019-03-04
categories: notes
tags: unity
---

#### This page is still incomplete

#### Intro:
While I'm still self-studying game design theory, and how to design a good game.  I figured I should start practicing how to implement portions of a game.  The game I'm aiming to develop is a turn based strategy game, played on a 2D grid.  For today, I'm going to investigate how exactly to create an interactable grid gameboard in Unity2D.  I will also explore best ways to save and store different game maps.  I'm initially thinking about storing map data in 2D arrays.

* system.serializable displays values into the unity editor
* make classes for data types (ex: questionData class that holds question text and answer options)

#### Level Generator
* make levelGenerator gameObject
* represent a map using pixel colors in image, or an array
* make prefab for each tile type
* make class that represents mapping from value to prefab (ie. ColorToPrefab)
* [serial.serializable] makes class iteratable
* Instantiate prefab using the [Object.Instantiate](https://docs.unity3d.com/ScriptReference/Object.Instantiate.html)
 function

#### Tilemap vs Prefab Tiles
* What does monobehavior mean btw?

#### Plan for Development
1. Create prefab for a single tile
2. Create a script that instantiates one instance of the prefab
3. Use local integer array to instantiate multiple prefabs into a grid
4. Create a script that highlights the last clicked tile
5. Create script that imports integer arrays from a json file

##### GameBoardObject
* spawns board tiles in a grid
* parent to all the board tile objects

##### BoardTileObject  
* Texture (based on type of tile)
* Unit on Tile
	* Is it better to have the Unit save its position, or the position save the unit? (for now we do the latter)  
* 2D Collider to register mouse over and mouse click events

* Is it better to have one boardTileObject prefab and create separate sub-components to represent different types of tiles? (for now we will)



##### PlaceholderText