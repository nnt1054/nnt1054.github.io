---
layout: post
title:  "Unity Tactics RPG Tutorial Notes"
date:   2019-03-13
categories: notes
tags: unity
---

#### Intro
I'm going and reading through theliquidfire's tutorial on creating a tactics rpg, and compiling my main takeaways from it.  Here's the [tutorial](http://theliquidfire.com/2015/05/04/tactics-rpg-series-intro/).

#### Pre-production Tools
I should consider creating pre-production tools for creating and editing levels.  Could also be a useful tool for including a level builder for users.  For the tutorial, we're still creating a Tile Prefab, except it's using a 3D cube for its appearance.

#### Architecture
TheLiquidFire (I'll refer to the tutorial as tlf for the remainder of this page) uses a "MVVM" Model-View-ViewModel instead of a regular "MVC".

#### Input Controller
Rather than simply creating a game out of buttons, tlf creates an Input Controller.  The Input Controller script is what actually detects and announces input events.  The different state objects can create and remove event listeners, so that they're only listening for relevant events as well as prevent other unintended actions.

#### State Machine
The normal way of creating a state machine goes along these lines:
{% highlight csharp %}
enum State
{
  Loading,
  Playing,
  GameOver
}
State _state;
void CheckState ()
{
  switch (_state)
  {
  case State.Loading:
    // Loading Logic here
    break;
  case State.Playing:
    // Playing Logic here
    break;
  case State.GameOver:
    // GameOver Logic here
    break;
  }
}
{% endhighlight %}
However, a better approach for accommadating different state logic would be to create state **flags** as an actual **object**.  With this method, different states can own their own variables and methods.  In the case of my first gameBoard iteration, this would make it so that only applicable states could save their "selected_object" and targets.  So rather than representing states simply as a dictionary of event handler functions, I can maybe abstract an "event" class, and have the "event" objects passed to whatever corresponding state object.  The state object can then determine whether or not its an applicable event and handle it accordingly.  This will allow me to process more keyboard strokes/events as opposed to just clicking on tiles and buttons in the future.

#### Event System
I didn't read too in-depth in this portion, but just be wary about the memory usage of creating too many event listeners.

#### Object Pooling
The idea behind saving previous CPU cycles and reusing them to make things more efficient.  Usually used for updating large numbers of objects (such as bullet positions), but I'm not sure yet where that would fit in a TBS style game.

#### To Be Continued!