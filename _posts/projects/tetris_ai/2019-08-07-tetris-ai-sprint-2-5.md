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
<b>Deliverable:</b> [Github Repo](https://github.com/nnt1054/mini5-engine)  
<b>Goals:</b>

1. Develop a custom game engine for javascript and HTML5 Canvas - COMPLETED
2. Deploy the game engine as a node_module - COMPLETED
3. Write an API/Usage Documentation - IN PROGRESS

<b>Method/Metrics:</b>  
The goal has been met once the project has been deployed to the npm public repository.

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

#### What didn't go well?

#### What to do next time?