---
layout: post
title: Approximation Algorithms
category: notes
tags: deployment cs170
---

## Approximation Ratio
Given an instance I, and its approximation solution A(I), its approximation ratio is:
* For Max Problems:
  * min<sub>I</sub>(<sup>A(I)</sup> / <sub>OPT(I)</sub>) <= 1
* For Min Problems:
  * max<sub>I</sub>(<sup>A(I)</sup> / <sub>OPT(I)</sub>) >= 1
note: figure out how to format mathematical equations later

## General Approximation Strategy
For minimization problems, try to:
1. Solve a different problem that can be used as a *relaxed* lower bound for the optimal solution.
2. Turn the infeasible solution into a feasible one by increasing its approximation ratio.


The goal is to try and show that the Infeasible(Lower Bound) < OPT < k<code>&ast;</code>Infeasible(or Approximation) < k<code>&ast;</code>Lower Bound

## Notes
* For minimization problems, we want the approximation ratio to be as low as possible.
* Approximations are **not** preserved through reductions since other problems have different approximation metrics.

## General Strategies for Solving Problems
* List out different strategies you can try
* If a + b = c, where c is the optimal solution, either a or b will be at least 0.5<code>&ast;</code>c
* For DAG and graph problems, try rearranging vertices in a straight line.