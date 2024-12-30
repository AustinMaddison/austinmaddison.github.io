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

## What are ANSII escape codes?
## Cursor Actions
```cpp
  Log::CurosrAction(UP, arg1);
  Log::CurosrAction(DOWN, arg1);
  Log::CurosrAction(FORWARD, arg1);
  Log::CurosrAction(BACKWARD, arg1);
  Log::CurosrAction(NEXT_LINE, arg1);
  Log::CurosrAction(PREVIOUS_LINE, arg1);
  Log::CurosrAction(SET_HORIZONTAL_POSITION, arg1, arg2);
  Log::CurosrAction(SET_VERTICAL_LINE_POSITION, arg1, arg2);
  Log::CurosrAction(SET_POSITION, arg1, arg2);
  Log::CurosrAction(SAVE_POSITION);
  Log::CurosrAction(RESTORE_POSITION);
  Log::CurosrAction(ERASE_DISPLAY, arg1);
  Log::CurosrAction(ERASE_LINE, arg1);
  Log::CurosrAction(DELETE_CHARACTERS, arg1);
  Log::CurosrAction(INSERT_CHARACTERS, arg1);
  Log::CurosrAction(INSERT_LINE, arg1);
  Log::CurosrAction(ERASE_CHARACTERS, arg1);
  Log::CurosrAction(HIDE);
  Log::CurosrAction(SHOW);
```
These functions print ANSII escape codes to stdout to manipulate the cursor in the terminal.
Here is a snippet of whats happening under the hood:

```cpp
switch (cursorMove)
{
  //...
  case SET_VERTICAL_LINE_POSITION:
      cout << "\033[" + to_string(arg1) + "d";
      break;

  case SET_POSITION:
      cout << "\033[" + to_string(arg1) + ";" + to_string(arg2) + "H";
      break;

  case SAVE_POSITION:
      cout << "\0337";
      break;
  //...
}

```
With these `CursorActions` you can draw sophisticated things to the terminal easily. Also whats nice it also, we are able to erase or overwrite what we have drawn previously. This allows for updateing visual elements in place. This is the building block to animations and dynamic terminal GUI. In this article I mostly just do animations.


## Colors
```cpp
  static void SetColor(Color color);
  static void ResetColor();

```

```cpp
  enum Color
  {
    DEFAULT,
    PRIMARY,
    SECONDARY,
    TERTIARY,
    GREEN,
    RED,
    BLD_UL_REV,
    HIGHLIGHT
  };

  const vector<string> Log::TextColorCodes =
  {
    "\033[0m",                               // Default
    "\033[38;5;214m",                        // PRIMARY
    "\033[38;5;38m",                         // SECONDARY
    "\033[38;5;208m",                        // TERTIARY
    "\033[38;5;100m",                        // GREEN
    "\033[38;5;197m",                        // RED
    "\u001b[1m\u001b[4m\u001b[7m",           // BOLD UNDERLINE REVERSE
    "\033[48;2;28;31;55m\033[38;2;10;10;10m" // HIGHLIGHT
  };

  const string Log::ResetCode = "\033[39m\u001b[0m";

  void Log::SetColor(Color color) { cout << TextColorCodes[color]; }
  void Log::SetColor(Color color) { cout << ResetCode; }

```

## Flip-Book

<div class="w-full mb-4">
<video class="mx-auto" autoplay loop muted playsinline >
  <source src="flipbook.webm" type="video/webm">
</video>
</div>


```txt
█
▄
█
▄▀ 
█  
▄▀█ 
█
▄▀█ 
█ █ 
▄▀█ 
█▀█ 
▄▀█ 
█▀█ █
▄▀█ █▄
█▀█ █ 
▄▀█ █▄ 
█▀█ █ ▀█
▄▀█ █▄ █
█▀█ █ ▀█
▄▀█ █▄ █ 
█▀█ █ ▀█ █
▄▀█ █▄ █ ▄
█▀█ █ ▀█ █
▄▀█ █▄ █ ▄▀ 
█▀█ █ ▀█ █  
▄▀█ █▄ █ ▄▀█ 
█▀█ █ ▀█ █
▄▀█ █▄ █ ▄▀█ 
█▀█ █ ▀█ █ █ 
▄▀█ █▄ █ ▄▀█ 
█▀█ █ ▀█ █▀█ 
▄▀█ █▄ █ ▄▀█  
█▀█ █ ▀█ █▀█ ▄
▄▀█ █▄ █ ▄▀█    ▀
█▀█ █ ▀█ █▀█ ▄
▄▀█ █▄ █ ▄▀█   █▀
█▀█ █ ▀█ █▀█ ▄ 
▄▀█ █▄ █ ▄▀█   █▀
█▀█ █ ▀█ █▀█ ▄  █
▄▀█ █▄ █ ▄▀█   █▀
█▀█ █ ▀█ █▀█ ▄ ▄█
▄▀█ █▄ █ ▄▀█   █▀ █ 
█▀█ █ ▀█ █▀█ ▄ ▄█ 
▄▀█ █▄ █ ▄▀█   █▀ █
█▀█ █ ▀█ █▀█ ▄ ▄█ █
▄▀█ █▄ █ ▄▀█   █▀ █ █
█▀█ █ ▀█ █▀█ ▄ ▄█ █
▄▀█ █▄ █ ▄▀█   █▀ █ █
█▀█ █ ▀█ █▀█ ▄ ▄█ █ █
▄▀█ █▄ █ ▄▀█   █▀ █ █
█▀█ █ ▀█ █▀█ ▄ ▄█ █▀█
```

## Scramble Transition

## Code Repository
[GitHub Repository Link](https://github.com/AustinMaddison/Pathfinding-Visualizer/tree/master)

## Thoughts
In the future I hope to revisit this and try to implement interactibilty and dynamic immediate UI that we usually expect from modern terminal GUIs.


## References
https://en.wikipedia.org/wiki/ANSI_escape_code
