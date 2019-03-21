---
layout: post
title:  "Common Coding Samples"
date:   2019-02-18
categories: notes
tags: misc
---

##### Greatest Common Denominator
{% highlight python %}
def computeGCD(x, y): 
   while(y): 
       x, y = y, x % y 
   return x 
{% endhighlight %}


##### Fibbonaci w/ Dynamic Programming
{% highlight python %}
# DP w/ memoization (starts from 0 to n rather than n to 0)
def fib(n):
   fibValues = [0,1]
   for i in range(2, n+1):
      fibValues.append(fibValues[i-1] + fibValues[i-2])
   return fibValues[n]
{% endhighlight %}

##### Breadth First Search
{% highlight python %}
def bfs(start):
    queue = []
    visited = []

    queue.append(s)
    visited.add(s)

    while len(queue) > 0:
        cur = queue.pop(0)
        if child not in visited:
            visited.append(child)
            for child in cur.children:
                queue.append(child)
    return visited
{% endhighlight %}

##### Depth First Search
{% highlight python %}
def bfs(start):
    queue = []
    visited = []

    queue.append(s)
    visited.add(s)

    while len(queue) > 0:
        cur = queue.pop(0)
        if child not in visited:
            visited.append(child)
            for child in cur.children:
                queue.insert(0, child)
    return visited
{% endhighlight %}

