---
layout: post
title:  "TicTacToe Tutorial"
date:   2019-03-04
categories: notes
tags: unity
---

UI Panel:
* creates a Canvas > Panel
* creates an EventSystem

Anchors:
* It is worth noting that holding the shift key sets the pivot location and holding the alt sets the position of the UI element, so by holding both keys, we not only change the anchoring, but reset the pivot and position as well, so the Panel is guaranteed to be in the middle and center of the parent Canvas.

* RectTransform defines where the UI element is in the scene
* Image component holds the details about what the graphical elements are that need to be drawn
* Canvas Renderer draws the Image component at the location in the scene defined by the RectTransform.
* UI Buttons can detect a click and perform an action or set of actions in response to the input


* You can drag a GameObject into the Prefab folder to create a Prefab from it
* Blue colored text in the Hierarchy tab means the object is a prefab

#### Main Takeaways
* learned how to create script functions, reference gameObjects in the function, and attach the functions to a UI button
* learned how to create a prefab, and create multiple gameObjects with different parameters/values.