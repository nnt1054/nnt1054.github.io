---
layout: post
title:  "Website Animations"
date:   2019-01-28
categories: projects
tags: personal_website
---

<b>Context:</b> I want to set up a structured way of playing different CSS animations invovling a series of keyframe sets and different HTML elements using Javascript.

#### Stacking Different CSS Animations on a Single Element
First, I wanted to have overlapping keyframe sets on my home page icon picture as an 'on hover' effect. When idle, the image will have a subtle floating effect.  
<b>The Issue:</b> CSS only allows objects to have only one 'transform' property, or one 'animation' property.

{% highlight css %}
/*This Doesn't Work!*/
.animation-div {
  animation: float 0.5s linear infinite;
  animation: side-step 0.5s linear infinite;
  transform: translateX(-10px);
}

@keyframes float {
	0% {transform: translateY(0px);}
	50% {transform: translateY(-6px);}
	100% {transform: translateY(0px);}
}

@keyframes side-step {
	0% {transform: translateX(0px);}
	50% {transform: translateX(-6px);}
	100% {transform: translateX(0px);}
}
{% endhighlight %}

In the example above, only the `side-step` animation will play since it's the last defined animation value set, and the transform styles in the keyframes will overwrite the styles from the `transform: translateX(-10px);` statement.

In order to circumvent this issue, we can just layer and wrap the `.animation-div` class with extra div's where each div will play a specific animation.

{% highlight html %}
<div class='float-container'>
  <div class='side-step-container'>
	<div class='.animation-div'> DIV Content</div>
  </div>
</div>

<style>
  .float-container {
	animation: float 0.5s linear infinite;
  }
  .side-step {
	animation: side-step 0.5s linear infinite;
  }
  .animation-div {
    transform: translateX(-10px);
  }
</style>
{% endhighlight %}

This really isn't anything revolutionary, but I thought it was neat enough to include it here lmao

#### Playing Animations with Sounds
Uh, I'm planning to implement some other things, but I'm preoccupied with some other stuff for now so I'm gonna leave the front page alone with the instant transmission thing xd  
So uh here's the basic javascript for what I have for now:

{% highlight javascript %}
var transmissionAudio = new Audio('/assets/images/instant_transmission.mp3');
$('#index-img').on('click', function() {
  transmissionAudio.play();
  $('.hover-animation').css("animation", "side-step 0.3s normal forwards");
  setTimeout(function() {
    $('.hover-animation').css("animation", "");
  }, 1500)
})
{% endhighlight %}