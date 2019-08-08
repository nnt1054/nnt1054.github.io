---
layout: post
title:  "Sprint #2.5 - Creating an HTML5 Game Engine"
date:   2019-06-09
categories: projects
tags: tetris_ai
sprintID: 2.5

---

<b>Product:</b> [Tetris2P AI](/blog/projects/tetris-overview)  
<b>Sprint #1:</b> July 20 - August 05  
<b>Scrum Board:</b> [Link](/portfolio#project)  
<b>Deliverable:</b> [mini5-engine Github Repo](https://github.com/nnt1054/mini5-engine)  
<b>Goals:</b>

1. Develop a custom game engine for javascript and HTML5 Canvas - COMPLETED
2. Deploy the game engine as a node_module - COMPLETED
3. Write an API/Usage Documentation - IN PROGRESS

<b>Method/Metrics:</b>  
The goal has been met once the project has been deployed to the npm public repository.

<b>Summary:</b>  
So the goals of this project was to make a game engine for javascript and HTML5 canvas.  The idea is to make the game completely contained within one html5 canvas, and to closely follow the programming architecture of Unity (with gameObjects and components) but with more flexibility.  The main features I made sure to implement were: self contained scenes, click (single, double, drag, hold) detection, key presses, position anchors, and elementary collision detection.

Apart from the game engine, I learned how to create and publish node modules as well as how to use Grunt to minify my project files.  There’s much more work I can do to improve the engine before I invite the public to use it, but I’ve made the decision to continue with the Tetris AI project (the main goal of this entire thing) and figure out networking implementations.

#### Daily Scrums

<div class='daily-scrum-container row'>

{% assign posts = site.categories['scrum'] %}
{% for post in posts reversed %}
	{% if post.tags == page.tags and post.sprintID == page.sprintID %}
<div class='daily-scrum-entry'>
	<div class='entry-content'>
		<h5> {{ post.day }} [{{ post.date | date: "%m/%d/%Y" }}] </h5>
		<h5> Objectives Completed: </h5>
		<ul style='padding-right:6px;'>
		  {% for obj in post.objectives %}
		  <li style='line-height: 24px'>{{ obj }}</li>
		  {% endfor %}
		</ul>
	</div>
  <h4 class='card-title'> <a href="{{ post.url }}" style='color:black'>{{ post.title }}</a> </h4>
</div>
	{% endif %}
  {% endfor %}
</div>

### Sprint Review

#### What went well?

For the first half of the sprint I did a good job of setting goals and staying focused enough throughout the day to complete them, or at least make significant progress towards them.  I think this was partly since there was a lot more visual and interactive testing, which made progress more gratifying and enjoyable.  In addition, there was more overhead software design to figure out which I guess I also enjoy.
Also, heading to cafe's to get more work done was very helpful, giving me the feeling of having an 'office' or a space specifically for productivity.  The only thing is that it limits me to doing work on my chromebook.  Which isn't that bad since I can do 90% of what I need to on my chromebook :)

#### What didn't go well?

Halfway through I started experiencing a bit of burnout I think?  This was mostly in regards to the publishing to the npm part.  This might have been since I was struggling processing too many new technologies at the same time (npm, bower, grunt), and figuring out how to make it suit my needs/vision.  Not trying to get technical here, but the game engine is mostly aimed towards 'client side' javascript, so deploying it as a node package was a little confusing.  Also, during the sprint I started playing **minecraft**, and I indulged in it a little too much and ruined my sleep and productivity schedule. :)  
This sprint also took much longer than I expected, since I was tackling it on a day by day basis, rather than working with a schedule.


#### What to do next time?

Once again, I need to set a more reasonable sprint schedule with reasonable goals.  I included figuring out the functions of a game engine within the sprint, when I should've done that first so I could split the project into subgoals and add deadlines in.  
I think my note taking process was fine and I should continue with it.  The only issues was that it takes too long to transfer all the daily scrums into jekyll posts (the notes are originally taken in google docs), so maybe I should make the jekyll posts on a daily basis before I sleep instead.  
I'm gonna make my RPI work clock project before I start the next sprint so I can 'clock into my productivity mode' at home also.  
I also want to start rating my days based on my performance and productivity.
