---
layout: post
title:  "Sprint #2.5 - Creating an HTML5 Game Engine"
date:   2019-06-09
categories: projects
tags: tetris_ai
sprintID: 2.5

---

<b>Product:</b> [CMS API](/blog/projects/cms-overview)  
<b>Sprint #1:</b> June 10 - <s>June 14</s> June 28  
<b>Scrum Board:</b> [Link](/portfolio#project)  
<b>Deliverable:</b> [Software Design Document](https://docs.google.com/document/d/15So3mJYzwRt1NcaGKYQ02hbT8H5q1-BIRR6tCzCnggM/edit?usp=sharing)  
<b>Goals:</b>

1. Have a comprehensive Software Design Document prepared for the project - COMPLETED
2. Have a high spec wireframes and user flow diagrams/journeys made for the Admin console - PARTIALLY COMPLETED
3. Have a high level overview of the software architecture - COMPLETED

<b>Method/Metrics:</b>  
The goal has been met once I've written up and published the design document and wireframes for the project.  The goal is also to have the remaining sprints also already planned out.

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