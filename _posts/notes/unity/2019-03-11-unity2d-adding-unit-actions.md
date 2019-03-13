---
layout: post
title:  "Unit Actions and Abilities"
date:   2019-03-09
categories: notes
tags: unity
---

#### Intro
In my last post, I was able to spawn a Unit onto the GameBoard and move it around.  What's significant is that I was able to make a rough outline of the interactions between the GameManager, GameBoard, BoardTiles and the actual units.  Now my goal is to spawn a drop down menu of unit actions when a unit's tile is clicked on.  The dropdown buttons in the menu will map to different functions in the UnitScript.

My first initial concern is that currently the boardTile's handle the movement logic of a unit.  Instead of passing the Unit reference to the boardTile, we want to pass a reference of the boardTile to the Unit instead and have them handle it instead.  This allows the units to have different pathfinding algorithms, for cases where some units can navigate over specific terrain or not.

For implmentation, I need to check the available preset UI objects in Unity, for anything that holds multiple buttons.  Also, I'd like to change part of the implementation so far to allow unit's to handle more of their own interactions, rather than the GameManager handling everything.  To accommodate this, I'm going to create a promptTileSelect function in the gameManager.  The function will be invoked by the actual Unit, and will return a boardTile object selected/clicked on.  In addition, we can have the Unit trigger the boardTile masks itself.

Regarding the boardTile masks, for AoE type selections (where hovering over a tile should also trigger a tileMask on adjacent tiles), we can create a function in the boardTile script, where the center tile will highlight its adjacent tiles as an onMouseEnter effect (and disable it onMouseOut).


#### Refactored Unit Movement Process
1. gameManager in idleState
2. boardTile is clicked on --> triggers and displays containedUnit's displayActions function
    * clicking outside of the menu will trigger hideActions (create invisible UI button that will occupy the entire screen)
3. clicking the Move button will trigger the startSelectMove function in the Unit script
4. moveUnit function will pass control to the gameManager to wait for a boardTile click
5. boardTile will pass a button press to the gameManager, which will pass the boardTile back to the Unit
6. the unit finally invokes its moveTiles function and changes its boardTile parent and position.


Thoughts as I'm writing this: is the gameManager the only place to include globalReferences?  It would be helpful if all the gameObjects could reference a selected/active Unit.  The code would be more straightfoward if every gameObject didn't have to pull the gameManager's gameObject, get it's script, use a script function to find the active unit, get the Unit's gameObject, then script, and then finally it's relevant script variables.  Global functions in general would certainly be useful.

Instead of having public variable references to the gameManager gameObject: you can actually change the variable type

from:

> `public GameObject gameManager;`

to:

> `public gameManagerScript gameManager;`

Apparently, Unity will understand to grab the script object instead when type casting an object to its script. (nvm not sure, will double check this later).  Since prefabs can't set refernces to other GameObjects, I need the Unit prefab to search for the single GameManager object in it's start function.

{% highlight csharp %}
public GameManagerScript gameManager;
void Start () {
	gameManager = GameObject.Find("GameManager").GetComponent<GameManagerScript>();
}
{% endhighlight %}

Currently debating if I want to continue with naming script variables as "<GameObjectName>Script" rather than just "<GameObjectName".  The former will be useful for accessing other components of an object, but I'm not sure if there will be any cases where that's necessary.

Prefabs should all use the code above to reference the gameManager.  Regular GameObjects should all have the reference set directly through the inspector.

After making the code structure changes, now I want to make it so that clicking on a unit will bring up a drop down menu.  The dropdown menu will have buttons that map Unit actions such as: Move, Attack, Cancel for now.  To create the drop down menu, we can use the `GUILayout.BeginVertical` and add buttons for each action/function.

{% highlight csharp %}
void onGui() {
    GUILayout.BeginVertical("box");
    
    GUILayout.Button("Button01");
    GUILayout.Button("Button02");
    GUILayout.Button("Button03");
    
    GUILayout.EndVertical();
}
{% endhighlight %}

##### Still to do for Movement:
1. Movement Animation
2. Tile Masks based on range of movement
3. Showing Movement Path Arrow on hover
4. Create different tile types
5. implement A* for pathfinding

##### Still to do for Combat:
1. figure out how to calculate combat damage
2. write combat functions
3. add type advantages and disadvantages

##### Still to do for Special Abilities:
1. figure out what this is xd
2. adding general implementation for how to highlight tile AOE preview