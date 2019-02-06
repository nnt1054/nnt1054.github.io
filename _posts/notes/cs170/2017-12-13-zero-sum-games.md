---
layout: post
title: Zero Sum Games
category: notes
tags: cs170
---

#### Goal:

Develop a strategy to maximize your own score while minimizing your opponents, using an immediate payoff matrix and assumming both players play optimally.

|   | 0      | 1      |
|---|--------|--------|
| 0 | A      | B      |
| 1 | C      | D      |

#### Solving with Linear Programming:

- Let x<sub>i</sub> denote the probability that the row player plays strategy i and y<sub>j</sub> denote the probability the the column player plays strategy j.
- If the column player uses strategy j<sub>0</sub>, then the row player's payoff will be Ax<sub>0</sub> + Cx<sub>1</sub>
- If the column player uses strategy j<sub>1</sub>, then the row player's payoff will be Bx<sub>0</sub> + Dx<sub>1</sub>
- So the column player's optimal strategy becomes: min(Ax<sub>0</sub> + Cx<sub>1</sub>, Bx<sub>0</sub> + Dx<sub>1</sub>)
- As a result, the row player's optimal strategy also becomes max(min(Ax<sub>0</sub> + Cx<sub>1</sub>, Bx<sub>0</sub> + Dx<sub>1</sub>))

#### Linear Program Solution for Row Player:

* max P
  * p <= Ax<sub>0</sub> + Cx<sub>1</sub>
  * p <= Bx<sub>0</sub> + Dx<sub>1</sub>
  * x<sub>i</sub> >= 0
* x<sub>0</sub> + x<sub>1</sub> = 1

Note: The LP for the Row Player and the LP for the Column Player are *Dual* to each other despite which player announces their strategy first.
