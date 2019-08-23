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

    queue.append(start)
    visited.append(start)

    while len(queue) > 0:
        cur = queue.pop(0)
        visited.append(cur)
        if child not in visited:
            visited.append(child)
            for child in cur.children:
                queue.append(child)
    return visited
{% endhighlight %}

* Queues are FIFO

##### Depth First Search
{% highlight python %}
def dfs(start):
    stack = []
    visited = []
    stack.append(s)
    visited.append(s)
    while len(stack) > 0:
        cur = stack.pop(-1)
        if child not in visited:
            visited.append(child)
            for child in cur.children[::-1]:
                stack.insert(0, child)
    return visited

def dfsRecursive(start):
    visit(start)
    for child in start.children:
        bfsRecursive(start)

{% endhighlight %}

* Stacks are LIFO
* iterating through children backwards, so 'left-most' children are visited first
* bfsRecursive assumes no cycles, since it doesn't reference a 'visited' set

#### Dijkstra's Algorithm and A-Star
{% highlight python %}
def dijkstras(G, s):
    queue = prioQueue()
    dist = {}
    prev = {}
    for v in G:
        dist[v] = float('inf')
        prev[v] = None
    dist[s] = 0
    while !queue.isEmpty():
        node = queue.pop() #Gets node with smallest dist[n]
        for n in node.neighbors():
            alt = dist[node] + length(node, n)
            if alt < dist[n]:
                dist[n] = alt
                prev[n] = node
    return dist, prev
{% endhighlight %}

* Both Dijkstra's and A-Star are algorithms for finding shortest paths and not just traversal algorithms.
* We assume we have a PriorityQueue class that returns the value with the SMALLEST dist[n]
* dijkstras returns the distance of all nodes from their source node and their paths

{% highlight python %}
def aStar(G, s):
    queue = prioQueue()
    dist = {}
    prev = {}
    for v in G:
        dist[v] = float('inf')
        prev[v] = None
    dist[s] = 0
    while !queue.isEmpty():
        node = queue.pop() #Gets node with smallest fCost = dist[n] + h(node)
        for n in node.neighbors():
            alt = dist[node] + length(node, n)
            if alt < dist[n]:
                dist[n] = alt
                prev[n] = node
    return dist, prev
{% endhighlight %}

* A Star is an 'informed search algorithm' and requires a 'heuristic' function that returns an estimated cost of the cheapest path from the current node to the end node.
* In other implementations, gScore(n) denotes the known cost from the start to n, and fScore(n) is equal to the gScore(n) + h(n)
    * fScore is only used to determine which node to expand next from the prioQueue.
* The heuristic function must satisfy: h(x) ≤ dist(x, y) + h(y) to be monotone or consistent.
    * Intuitively, this means the heuristic cannot overestimate the cost of x (to the goal) compared to the estimated cost of y + the actual distance between x and y.
    * When a heuristic is consistent, you're guaranteed to find the optimal path and no node will be processed more than once.

#### Greedy Algorithms
* Greedy algorithms build up a solution piece by piece, always choosing the next
piece that offers the most obvious and immediate benefit
* Applicable Problems:
    * Minimum Spanning Trees 
