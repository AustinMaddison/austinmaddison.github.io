---
title: Terminal String Animation Library
date: 01 Jan 2024
description: A toy terminal string animation library I put together for a custom shell using C/C++
thumbnail: thumbnail.webm
cover: thumbnail.webm
tags:
    - terminal
    - animation
categories:
    - personal
draft: false
weight: 1
type: notes
---

{{% header %}}

<video autoplay loop muted playsinline >
  <source src="thumbnail.webm" type="video/webm">
</video>

<div class="h-5"></div>

Have you ever wondered how some of our favourite CLI/terminal programs are able to have..

**Colored Text**
<image class="mx-auto mb-5 mt-2" src="batcat.png">

**Spinners**
<image class="mx-auto mb-5 mt-2" src="https://raw.githubusercontent.com/sindresorhus/cli-spinners/HEAD/screenshot.svg">

**Loading Bars**
<video autoplay loop muted playsinline class="mb-5 mt-2 mx-auto" >
  <source src="bar.webm" type="video/webm">
</video>

or even full blown **Fullscreen GUIs**?!
<video autoplay loop muted playsinline class="mb-5 mt-2 mx-auto" >
  <source src="lazygit.webm" type="video/webm">
</video>

Well I definitley curious on how these programs were able to do this. After researching I found that the secret sauce was in the use ANSII escape codes.  

## What are ANSII escape codes?
They are codes that allow developers to manipulate the cursor and character style in terminals. These codes when printed to the terminal, they won't show up as characters but does manipulate the state on how the terminal may print incoming characters. 

You can read all about them [here](https://en.wikipedia.org/wiki/ANSI_escape_code).

---

For my systems class we were assigned to make a shell in C/C++. 

The shell had to support all kinds of commands you would expect in a shell program such as echo, redirection, foreground and background jobs, and threading. Whilst looking for ways to make my terminal more appealing I came across ANSII escape codes for coloring and terminal cursor actions.

I made some simple low level facilities to wrangle ANSI escape codes for coloring the terminal and moving the cursor around easily. Then I created functions for drawing boxes, reading a "string flipbook" and creating text transitions.

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

In my shell's splash screen thing I have ASCII title animation. How it works is that it plays back "frames" from a text file into the terminal in order. This gives the impression of animation. Below is the content's of the text file. 

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

Each frame consists of two lines. To display them in succession, I simply print each frame one after the other. To ensure that I replace the last frame, I save the cursor position `SAVE_POSITION` before printing a frame and restore it `RESTORE_POSITION` once printing is complete.

```cpp
void Log::FileAnimation(string file_path, int line_height, int frame_duration)
{
    ifstream file(file_path);
    string line;

    Log::CursorAction(Log::CursorActions::HIDE);
    Log::SetColor(Color::PRIMARY);
    Log::CursorAction(Log::CursorActions::SAVE_POSITION);

    if (file.is_open())
    {
        bool eof = false;
        while (!eof)
        {
            /** Print Frame */
            for (int i = 0; i < line_height; i++)
            {
                eof = !getline(file, line);
                cout << line << "\n";
            }

            Log::CursorAction(Log::CursorActions::RESTORE_POSITION);
            fflush(stdout);
            usleep(frame_duration);
        }
        file.close();
    }
    
    Log::CursorAction(Log::CursorActions::DOWN, line_height);
    Log::ResetColor();
    Log::CursorAction(Log::CursorActions::SHOW);
}
```
As you can see, even in this very simple application, being able to manipulate the terminal cursor is a powerful tool for creating animated and dynamic elements in the terminal.

## Drawing Boxes

<div class="w-full mb-4">
<video class="mx-auto" autoplay loop muted playsinline >
  <source src="box.webm" type="video/webm">
</video>
</div>

A box's anatamoy can be broken into edges and corners. Thankfully there are characters that exist to draw these primitives.

edges: `─ │`   
corners: `╭ ╮ ╯ ╰ `


```cpp
void Log::Box(int width, int height)
{
    if (width < 2)
        width = 2;
    if (height < 2)
        height = 2;

    string fill = " "; // fill

    // edges
    string tb = "─"; // top bottom
    string lr = "│"; // left right

    // corners
    string br = "╯";
    string bl = "╰";
    string tl = "╭";
    string tr = "╮";

    string line, start, end, mid;

    for (int i = 0; i < height; i++)
    {
        line = "";
        if (i == 0)
        {
            start = tl;
            end = tr;
            mid = tb;
        }
        else if (i < height - 1)
        {
            start = lr;
            end = lr;
            mid = fill;
        }
        else
        {
            start = bl;
            end = br;
            mid = tb;
        }

        line += start;
        for (int j = 0; j < width; j++)
            line += mid;
        line += end;

        cout << line << '\n';
    }
}
```
As for the animation of the box growing, the principles are the same as the [flip book](#flip-book).


## Scramble Transition
<div class="w-full mb-4">
<video class="mx-auto" autoplay loop muted playsinline >
  <source src="scramble.webm" type="video/webm">
</video>
</div>

You might of seen a similar text effect in places where movies/games have to portray hackers or somthing like that. The text first comes in as gibberish then the characters are replaced with the real message. I think its suppose to give the impression that a message comes in encrypted then is decyrpted on the fly? Any who this is how I did it.

```cpp
void Log::LineFancyAnimation(string line, Color color, int leading, __useconds_t duration)
{
    string slice;
    string random_characters{"@%*$!_+?)=&#~^"};

    if (leading > line.length())
        leading = line.length();

    Log::CursorAction(HIDE);
    Log::CursorAction(SAVE_POSITION);
    int leading_current;

    for (int i = 1; i <= line.size() + leading; i++)
    {
        Log::CursorAction(RESTORE_POSITION);
        if (i > leading)
        {
            slice = line.substr(0, i - leading);
        }

        int r = clamp(i, 0, (int)line.length() - (int)slice.length());

        for (int j = 0; j < r; j++)
        {
            slice += random_characters[0 + (rand() % (random_characters.length() - 0 + 1))];
        }

        Msg(slice, color);
        fflush(stdout);
        usleep(duration);
    }
    Log::CursorAction(SHOW);
}

```

## Gist
https://gist.github.com/AustinMaddison/79bf7ee82d4cfde7e4fc1526b8ae61ef.js

## Thoughts
In the future I hope to revisit this stuff but try making more interactive things such as UI or fullscreen terminal app or game.


## References
https://en.wikipedia.org/wiki/ANSI_escape_code
