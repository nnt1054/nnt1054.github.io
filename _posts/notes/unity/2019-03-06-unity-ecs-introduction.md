---
layout: post
title:  "Entity Component System"
date:   2019-03-04
categories: notes
tags: unity
---

#### Entity Component System vs Standard Scripting
As opposed to standard scripting, which operates around game objects and attaching components with monobehaviors, ECS seperates data and behaviors into separate classes.  ECS involves using a 'ComponentSystem' which applies a behavior to a series of applicable MonoBehavior components which *only* stores the data related to its behavior.  Think of entities as just containers for data.  The behaviors are split into different 'Systems' (i.e. Render System, Health System, Spawning System), which filters the entities based off what entity attributes and applies its system specific behavior logic on corresponding entities.  The basic benefits of this is being able to parallelize behaviors and optimize performance.

#### Implementing Job System
1. Define just the data you care about, and how you want to proces the data
2. Create a struct for specific Job that extends IJobParallelFor[...]
3. In gameManager, create an accessArray to reference the entities to apply behaviors
4. In update(), create a moveJob, and schedule the batch with the jobHandle
* complete jobs when necessary to ensure things are in sync
* add new objects to the job list by adding them to the accessArray
* make sure to dispose of accessArrays to clear up memory

#### Implementing ECS
* use prefabs as a template to show what an object would look like; the prefab won't include a renderer and won't be used as a gameObject
* prefab for an object will consist of scripts that define its component data (i.e. positionComponent, moveSpeedComponent)
* systems consist of a filter + a job
* ECS references prefab to create entities, but doesn't instantiate the actual prefabs


#### Haven't had a chance to play around with ECS yet, so this page will be updated in the future once I'm comfortable with the other parts of Unity.