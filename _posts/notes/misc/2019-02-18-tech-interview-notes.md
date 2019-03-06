---
layout: post
title:  "Tech Inteview Notes Part 1"
date:   2019-02-18
categories: notes
tags:
---

Iterating over a Map is hecking annoying

{% highlight c++ %}
std::map<std::string, int>::iterator iter = myDict.begin();
while (iter != myDict.end()) {
	std::string myString = iter->first;
	int myValue = iter->second;
	iter++
}=
{% endhighlight %}
