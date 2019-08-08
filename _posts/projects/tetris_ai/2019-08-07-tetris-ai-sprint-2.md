---
layout: post
title:  "Sprint #2 - Creating the Tetris Game"
date:   2019-06-09
categories: projects
tags: tetris_ai
sprintID: 2

---

<b>Product:</b> [Tetris2P AI](/blog/projects/tetris-overview)  
<b>Sprint #1:</b> July 15 - June 19  
<b>Scrum Board:</b> [Link](/portfolio#project)  
<b>Goals:</b>

1. Develop a Tetris2P Game Client
2. Add Multiplayer and Deploy the Game Online

<b>Method/Metrics:</b>  
The goal has been met once the game client is deployed for the public to play.


<b>Summary:</b>  
This sprint has been <b style='color:red'>canceled and postponed</b>, due to a branch of the project roadmap.  Here's the [new sprint](/blog/projects/tetris-ai-sprint-2-5). The original plan was to set up a basic draw update loop for the tetris game, as I've done for a different project before.  However, I wanted to make the game robust and consistency across all computers.  An issue I ran into for an old project was the 'ingame timer' slowing down when the update loop takes too long to compute.  For a networked game, this would introduce several vulnerabilities and synchronization issues.  To mend this, I found and decided to use [mainloop.js](https://github.com/IceCreamYou/MainLoop.js).  While figuring out how to detect clicks and and keyboard inputs, I decided to turn my progress into a mini game engine, that sort of follows Unity's scripting and gameObject development flow.  With the scope and goals changed, I decided to start a new separate sprint.


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
I did a decent job of documentating notes and thought processes.

#### What didn't go well?
Once again, I didn't set reasonable goals.

#### What to do next time?