---
title: Hello Mascot!
date: 17 Apr 2024
description: Interactive installation project for my internship at Adapter Digital. Mix of game design, and tech-art.
thumbnail: thumbnail.jpg
cover: null
tags:
  - installation
  - interactive
categories:
  - commercial project
draft: false
weight: 1
type: notes
preview: thumbnail.jpg
---

{{% header %}}

{{% fig src="image.png" %}}

<iframe class="w-full" height="330px" src="https://www.youtube.com/embed/hmK6vug5r68?si=IfmBeWxxLIpL46_o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<div class="h-5"></div>


#### Lookdev Stills

<img src="cover-long.jpg">
<div class="h-5"></div>
<img src="cover-left.jpg">
<div class="h-5"></div>
<img src="cover-right.jpg">



#### Level LookDev + Animation Loop Test
Just triggering all the animations simultaneously in a loop for demonstration purposes.  

<video autoplay loop muted playsinline  >
  <source src="lookdev.mp4" type="video/mp4">
</video>

<div class="h-5"></div>

<video autoplay loop muted playsinline  >
  <source src="lookdev-left.mp4" type="video/mp4">
</video>

<div class="h-5"></div>


<video autoplay loop muted playsinline  >
  <source src="lookdev-right.mp4" type="video/mp4">
</video>


<div class="flex mt-5">
  <span class="flex-1 text-center text-opacity-50 text-zinc-50 italic text-sm"> 
    I called the demo Banana Boy but the project was named to Hello Mascot to be more generic for thier product portfolio's market. 
  </span>  
</div>


# Introduction
Hello Mascot! is a product that I helped develop for Adapter Digitals portfolio which compliments their ongoing efforts on diversifying the kind of media they can deliver to their clients. I will describe my journey to getting the internship as well as the general breakdown of the project. Let's begin!

This project began last year in my first internship at Adapter Digital. They are a digital agency based in Bangkok. How I landed the internship is actually a funny story.  

## The Interview
 Initially a recruitment team approached me with a design tech / 3D motion designer position, I asked if I could get an internship instead because I was a full-time student. When I was interviewed by the people running the design/innovation lab they were surprised to learn that I was still in my first year of university because they really liked my work on behance. 

The interview was great. It was the first time I had a conversation with somebody who understood the craft as much as I did, and it felt amazing to connect with someone on that level. The rest is history.

## Moving to Bangkok
While my university dorm was in Nakhon Pathom, not far from Bangkok, my roots in Phuket made me accustomed to feeling isolated in my interests in computers, art, and technology. Discovering Bangkok's vibrant tech, engineering, and art scene was a revelation. Finally finding a community that shared some of my passions was an incredible feeling! Really got me pumped for the the work I was going to do.

# The Brief
The brief went a little something like this:
A real estate development project (The Forestias) would like a new interesting way to elevate their high end residential experiences with digital interactive experiences. Some of their recreational facilities will have mascots and they would like a way to interact with them. This interactive solution had to come in the form of a installation 

## Constraints
The installation consists of <mark>1080x5760 pixel (16:3) screen</mark> and a single <mark>motion capture camera.</mark> The demo that will be running on the installation will be using the Krungsri banana mascot because the studio had the original rig for it already and the character has no copyright. Lastly, the technology we must use is Unity. 

# Pre-Production
Pre production was important as my internship was short. So I had to really nail the scope and timeline for this project to a tea. Had about 4 weeks to create the visuals, hook up the mechanics that are driven by the mocap camera. No pressure am I right? I couldn't find all the preproduction material I prepared but here are some screenshots I found. 

![alt text](image-2.png)

<div class="h-5"></div>

![alt text](image-3.png)

<div class="h-5"></div>

![alt text](image-4.png)

<div class="h-5"></div>

The initial idea was something more generic, like a talking tom format, if you remember that mobile game. Where you will be able to query questions and trigger some events like emotes. This idea was safe but it wasn't very innovative. So I developed the idea into a experience where you can interact with the mascot in their own little world where the screen acts like a window of sorts. The fun or gameplay loop was not much of a concern, we wanted the world to feel like a interactive sandbox to drive the fun.    

As the weeks went on I was not able to provide enough variety of interactive elements in the world to really drive that vision home because of time but thank goodness it's demo and the outcome still demonstrates that visions potential to customers.  

# Production
## Character
I was given the source files for krungsri's banana character. I immediately realized that the rig provided would not be suitable for the project. Its topology, UVs and polygonal density would make it suboptimal for rendering in realtime on a large screen. So I had to make my own.

### Source Character Rig
<div class="grid grid-cols-2">
  <div class="cols-2" >
    <img src="krungsri.png">
  </div>
  <div>
    <img src="krungsri-wireframe.jpg">
  </div>
</div>

### Low Poly Model + Rig + Run Animation

<video autoplay loop muted playsinline  >
  <source src="rig.mp4" type="video/mp4">
</video>


### High Poly Sculpt
<div class="">
  <img width="400px" class="mx-auto" src="high-poly.jpg">
</div>

### Baked Normals and ID Mask
<div>
  <img src="maps.jpg">
</div>


### LookDev
<video autoplay loop muted playsinline  >
  <source src="rig-lookdev.mp4" type="video/mp4">
</video>
<div class="mb-5"></div>

### Face shader

<div class="w-full mt-5">
    <video width="350px" autoplay loop muted playsinline   class="mx-auto" >
      <source src="face-demo.mp4" type="video/mp4">
    </video>
</div>

<div class="h-5"></div>

What is interesting about the character's shaders is the shader that drives the character's face. The <mark>scheduling of the blinks and mouth shapes are totally driven by wave functions.</mark> The CPU at anytime can interrupt and override a specific eye + mouth expression on an event. I did not take a screenshot nor have to correct development environment at home to open the project file so for now I will just give a gist on how it works. 

Each expression for the <mark>mouth and eyes are indexed</mark> and <mark>multiple sin cos, modulo functions are manually tuned and combined to get the desired mouth and eye index over time</mark>. Then the face expressions shader is composited onto the body's base yellow claymation shader. Maybe in a future article I write in detail how I made the shaders for the character.

#### Eyes
![eyes](eyes.jpg)

#### Mouths
![mouths](mouths.jpg)

## Environment

### Concept

![alt text](image-5.png)

So I made a sketch, it isn't amazing by any means but it provides some guidance on what props, shaders, and materials will the scene need as well as the loose placement and overall composition. It also gives me an opportunity to decide where to put triggers in the level for the interactive events.


### Blockout

![blockout](blockout.jpg)
<div class="mb-5"></div>
Blocking out the scene is super duper important, allows me to <mark>use proxies to establish volume, proportions, and composition of the scene early on.</mark> That way when I start creating the props I have a better understanding on scale, variation, level of detail etc. Also when its time to set dress, the outcome is predictable. <mark>Blockouts also work as a sandbox for programming the gameplay</mark> because it abstracts all the visual noise and unessential objects away.  

### Timelapse
<video autoplay loop muted playsinline  >
  <source src="timelapse.mp4" type="video/mp4">
</video>
<div class="mb-5"></div>

Like all kinds of visual mediums its a highly iterative process. I had to really <mark>trust the process and power through</mark> the not so flattering early stages of the environment's look development. What really transformed the scene was [set dressing](#set-dressing) obviously but not so obviously the the [post-processing](#post-processing).

<div class="h-5"></div>

## Set Dressing
I export the blockouts out of engine and bring into my DCC as reference to model the props. The workflow for all the props are quite typical industry standard stuff. I first model/sculpt the high-poly then model a low-poly. I use the low poly meshes to bake normals, cavity, ambient occlusion, alpha, color ID and whatever I forsee that I need for creating materials and shaders. I do most of my material authoring in Substance Designer. I use Substance Designer for authoring materials because it is totally procedural meaning all material and pattern definitions are parametric. This is great because it allows me to reuse node groups across many assets with different UVs and color IDs. It also means making changes are easier and less time consuming compared to a painting approach. Lastly the target output resolution of the texture maps can be changed without degrading quality. There is some things that are just more intuitive to do painterly, when that does happen I use Substance Painter.    

## Materials and Shaders
### Substance Designer
I was heavily inspired by some of the stylized platformer games, some I even grew up on such as my little planet. I loved how tactile all the materials were in these games. 

![reference](reference.jpg)

You could immediately read exactly what each material might feel like in my little planet. The cardboard, plastic, felt cloth, stitching, metallic joinery and so on. Every surface had a material description comprehensive enough to communicate to the player exactly what an object was made out of. It really grounded the visuals you saw on screen to reality, emphasizing this notion of a window of sorts. I wanted to incorporate a similar level of tactileness to into my materials and shaders to give a similar window into shoebox effect.  


### Hero Props
#### Flowers
#### Coconut Tree
#### Fish
#### Rocks
#### Statue

## Primary Props
#### Hills

### Secondary Props
#### Clouds
#### River

#### Vegetation
The trees just consisted of leaves mesh on top of a trunk mesh, nothing too special.
For the grass I used cards and for the ivy I used strips. I leveraged the high-poly baked maps to provide normals and alpha's that make convincing looking vegetation that match well with the rest of the scene without looking totally flat. 
##### Trees


##### Grass
##### Ivy

#### Wind Vertex Shader






## Post-Processing

## Dialogue Boxes

## Gameplay Programming and Player Interaction
For implementing the game mechanics I had someone in the lab to assist me, P'Kiew. He is a experienced C# unity developer. I was so lucky to have him help and mentor me. He contributed in hooking up the mocap, core game systems and game mechanics on the final week of internship (week 4).  

### Mocap (Google's API)
### Extracting Essential Data

# Conclusion


### Wish there was more time.
My internship being as long as my summer break (4 weeks) it was admittedly short. This is due to it being an independent internship and not a university sponsored one. However, I was surprised how much was accomplished in the time I had. Wish I had more time to polish the features and turn it into a game with a fun gameplay loop. 

<div class="mb-5">
  <img width="400px" class="mx-auto" src="adapter-team.jpg">
</div>

I wished I spent more time talking to the team. Everybody in the innovation / design lab at Adapter Digital were so incredibly kind and welcoming. I couldn't of asked for a better internship experience especially almost halfway in my undergraduate program ❤️. 



