---
title: Terminal String Animation Library
date: 01 Apr 2022
description: A toy terminal string animation library I put together for a custom shell using C/C++
thumbnail: thumbnail.webm
cover: thumbnail.webm
tags:
    - terminal
    - animation
categories:
    - personal
draft: true
weight: 1
type: notes
---

{{% header %}}

<video autoplay loop muted playsinline >
  <source src="thumbnail.webm" type="video/webm">
</video>

<div class="h-5"></div>

For my systems class we were assigned to make a shell in C/C++. 

The shell had to support all kinds of commands you would expect in a shell program such as echo, redirection, foreground and background jobs, and threading. Whilst looking for ways to make my terminal more appealing I came across ANSII escape codes for coloring and terminal cursor actions.

I made some simple low level facilities to wrangle ANSI escape codes for coloring the terminal and moving the cursor around easily. Then I created functions for drawing boxes, reading a "string flipbook" and creating text transitions.

## ANSII
## Cursor Actions
## Colors
## Flip-Book
## Scramble Transition

## Code Repository
[GitHub Repository Link](https://github.com/AustinMaddison/Pathfinding-Visualizer/tree/master)

## References
P. E. Hart, N. J. Nilsson and B. Raphael, "A Formal Basis for the Heuristic Determination of Minimum Cost Paths," in IEEE
Transactions on Systems Science and Cybernetics, vol. 4, no. 2, pp. 100-107, July 1968, doi: 10.1109/TSSC.1968.300136.

Ruoqi He, Chia-Man Hung, “Pathfinding In 3d Space - A*, Theta*, Lazy Theta* In Octree Structure”, https://ascane.github.io/projects/07_pathfinding3d/report.pdf

Hybesis H.urna, “Pathfinding algorithms: the four Pillars.”, https://medium.com/@urna.hybesis/pathfinding-algorithms-the-four-pillars-1ebad85d4c6b
