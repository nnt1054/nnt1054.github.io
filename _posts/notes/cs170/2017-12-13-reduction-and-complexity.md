---
layout: post
title: Algorithm Complexity
category: notes
tags: cs170
---

#### Reductions:
* A --> B means reducing an algorithm A to an algorithm B
* Reducing an algorithm A to B creates an instance *f*(*I*) from the original instance, *I*, that can then be used with the algorithm B.  The solution *S* can then be used to get *h*(*S*) which is the solution for A.
* If an algorithm A can be reduced to another algorithm B, that means B is **at least** as hard as A.
![reduction graph](/assets/images/reduction.png){: class="column post-image" }

#### Definitions:
* P: The set of all problems that can be verified and solved in polynomial time.
* NP: The set of all problems that can be verified in polynomial time.
* NP-Hard: The set of all problems that are at least as hard as the hardest questions in NP
  * This means that a problem is NP-Hard iff every problem in NP can be reduced to it in polynomial time.
* NP-Complete: The subset of NP-Hard problems that can be verified in polynomial time.
* What does the *N* in *NP* mean? It means non-deterministic because these problems can only be solved in a non-deterministic polynomial time.
* Verifiable: A solution to an algorithm can be verified as a correct solution to the problem in polynomial time.

#### How to show NP-Completeness:
* To show a problem is in NP:
  * Verify the problem can be solved in polynomial time
* To show a problem is NP-Hard:
  * Reduce an NP-Hard or NP-Complete problem to the problem
* To prove a problem is NP-Complete, show a solution can be verified in polynomial time.

#### List of Common NP-Hard Problems
* 3-Dimensional Matching
* 3SAT
* Rudrata Cycle/Path
  * Given a graph, find a cycle/path that visits every vertex once
* Maximum Independent Set
  * Add verticies with or without edges to adjust
* Longest Path
* Knapsack
* Balanced Cut

#### List of Common Algorithms for Verification
* Strongly Connected Components: O(V+E)

#### Graph Definitions:
* Strongly Connected Graph: Every vertex is reachable from every other vertex.
* Independent Set: There are no edges between any vertex of the set.