---
title: Hello Mascot!
date: 10 Sep 2023
description: Interactive installation project for my internship at Adapter Digital.
thumbnail: thumbnail.jpg
cover: null
tags:
  - installation
  - interactive
categories:
  - commercial
draft: false
weight: 1
type: notes
---

{{% header %}}

{{% fig src="image.png" %}}

<iframe class="w-full"  src="https://www.youtube.com/embed/hmK6vug5r68?si=IfmBeWxxLIpL46_o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<div class="h-5"></div>

#### LookDev Stills

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
    I called the demo Banana Boy but the project was named to Hello Mascot to be more generic for their product portfolio's market.
  </span>  
</div>

# Introduction
Hello Mascot! is a product that I helped develop for Adapter Digitals portfolio which compliments their ongoing efforts on diversifying the kind of media they can deliver to their clients. I will describe my journey to getting the internship as well as the general breakdown of the project. Let's begin!

<div class="grid grid-cols-2 gap-1 my-3">
    <div class="flex"><img class="w-full object-cover bg-cover" src="intern-1.jpg"></div>
    <div class="flex"><img class="w-full object-cover bg-cover" src="intern-4.jpg"></div>
    <div class="flex"><img class="w-full object-cover bg-cover" src="xsight2.jpg"></div>
    <div class="flex"><img class="w-full object-cover bg-cover" src="xsight.jpg"></div>
</div>


This project began last year in my first internship at Adapter Digital. They are a digital agency based in Bangkok. I arrived around the time they were debuting their software product [X-Sight Analysis](https://xsight.adapterdigital.com/en/). 

<!-- How I landed the interview and internship is actually a funny story.   -->
<!-- 
## The Interview
 Initially a recruitment team approached me with a design tech / 3D motion designer position, I asked if I could get an internship instead because I was a full-time student. When I was interviewed by the people running the design/innovation lab they were surprised to learn that I was still in my first year of university because they really liked my work on Behance. 

The interview was great. It was the first time I had a conversation with somebody who understood the craft as much as I did, and it felt amazing to connect with someone on that level. 

## Moving to Bangkok
While my university dorm was in Nakhon Pathom, not far from Bangkok, my roots in Phuket made me accustomed to feeling isolated in my interests in computers, art, and technology. Discovering Bangkok's vibrant tech, engineering, and art scene was a revelation. Finally finding a community that shared some of my passions was an incredible feeling! Really got me pumped for the the work I was going to do. -->

# The Brief
The brief went a little something like this:
A real estate development project (The Forestias) would like a new interesting way to elevate their high end residential experiences with digital interactive experiences. <mark>Some of their recreational facilities will have mascots and they would like a way to interact with them.</mark> This interactive solution had to come in the form of a <mark>interactive installation</mark>.

## Constraints
The installation consists of <mark>1080x5760 pixel (16:3) screen</mark> and a single <mark>motion capture camera.</mark> The demo that will be running on the installation will be using the Krungsri banana mascot because the studio had the original rig for it already and the character has no copyright. Lastly, the technology we must use is Unity. 

# Pre-Production
Pre production was important as my internship was short. So I had to really nail the scope and timeline for this project to a tea. Had about 4 weeks to create the visuals, hook up the mechanics that are driven by the mocap camera. No pressure am I right? I couldn't find all the pre-production material I prepared but here are some screenshots I found. 

![alt text](image-2.jpg)

<div class="h-5"></div>

![alt text](image-3.jpg)

<div class="h-5"></div>

![alt text](image-4.jpg)

<div class="h-5"></div>

The initial idea was something more generic, like a talking tom format, if you remember that mobile game. Where you will be able to query questions and trigger some events like emotes. This idea was safe but it wasn't very innovative. So I developed the idea into a experience where you can interact with the mascot in their own little world where the screen acts like a window of sorts. The fun or gameplay loop was not much of a concern, we wanted the world to feel like a interactive sandbox to drive the fun.    

As the weeks went on I was not able to provide enough variety of interactive elements in the world to really drive that vision home because of time but thank goodness it's demo and the outcome still demonstrates that visions potential to customers.  

# Production
## Character
I was given the source files for Krungsri's banana character. I immediately realized that the rig provided would not be suitable for the project. Its topology, UVs and polygonal density would make it suboptimal for rendering in realtime on a large screen. So I had to make my own.

### Source Character Rig
<div class="grid grid-cols-2">
  <div class="cols-2" >
    <img class="bg-cover w-full h-auto" src="krungsri.jpg">
  </div>
  <div>
    <img class="bg-cover w-full h-auto" src="krungsri-wireframe.jpg">
  </div>
</div>

### Low Poly Model + Rig + Run Animation

<video autoplay loop muted playsinline  >
  <source src="rig.mp4" type="video/mp4">
</video>


### High Poly Sculpt
<div class="">
  <img width="300px" class="mx-auto" src="high-poly.jpg">
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

### Face Shader

<div class="w-full mt-5">
    <video width="350px" autoplay loop muted playsinline   class="mx-auto" >
      <source src="face-demo.mp4" type="video/mp4">
    </video>
</div>

<div class="h-5"></div>

What is interesting about the character's shaders is the shader that drives the character's face. The <mark>scheduling of the blinks and mouth shapes are totally driven by wave functions.</mark> The CPU at anytime can interrupt and override a specific eye + mouth expression on an event.
Each expression for the <mark>mouth and eyes are indexed</mark> and <mark>multiple sin cos, modulo functions are manually tuned and combined to get the desired mouth and eye index over time</mark>. Then the face expressions shader is composited onto the body's base yellow claymation shader. Maybe in a future article I write in detail how I made the shaders for the character.

<div class="h-5"></div>

{{< toggle "Shader Graph" >}}
<video autoplay loop muted playsinline  >
  <source src="banana-boy-shader-graph.mp4" type="video/mp4">
</video>
{{< /toggle >}}


#### Eyes
![eyes](eyes.jpg)

#### Mouths
![mouths](mouths.jpg)

## Environment

### Concept

![alt text](image-5.jpg)

So I made a sketch, it isn't amazing by any means but it <mark>provides guidance on what props, shaders, and materials</mark> will the scene need as well as the <mark>loose placement and overall composition</mark>. It also gives me an opportunity to decide where to put triggers in the level for the interactive events.


### Blockout

![blockout](blockout.jpg)
<div class="mb-5"></div>

<div class="w-full mt-5">
    <video width="350px" autoplay loop muted playsinline   class="mx-auto" >
      <source src="blockout-wip.mp4" type="video/mp4">
    </video>
</div>


<div class="mb-5"></div>
Blocking out the scene is super duper important, allows me to <mark>use proxies to establish volume, proportions, and composition of the scene early on.</mark> That way when I start creating the props I have a better understanding on scale, variation, level of detail etc. Also when its time to set dress, the outcome is predictable. <mark>Blockouts also work as a sandbox for programming the gameplay</mark> because it abstracts all the visual noise and unessential objects away.  

### Timelapse
<video autoplay loop muted playsinline  >
  <source src="timelapse.mp4" type="video/mp4">
</video>
<div class="mb-5"></div>

Like all kinds of visual mediums its a highly iterative process. I had to really <mark>trust the process and power through</mark> the not so flattering early stages of the environment's look development. What really transformed the scene was [set dressing](#set-dressing) obviously but not so obviously the the [post-processing](#post-processing).

## Set Dressing
I export the blockouts out of engine and bring into my DCC as reference to model the props. The workflow for all the props are quite typical industry standard stuff. 

## Materials

### Workflow
I used a <mark>highpoly to lowpoly workflow.</mark> I first model/sculpt the high-poly then model a low-poly. I use the low poly meshes to bake normals, cavity, ambient occlusion, alpha, color ID and whatever I forsee that I need for creating materials and shaders. <mark>I do most of my material authoring in Substance Designer</mark>. As for shaders I use the Unity's HDRP lit and unlit shaders as a base build extra visual features around those. 

### Authoring
I use Substance Designer for authoring materials because it is totally procedural meaning all <mark>material and pattern definitions are parametric</mark>. This is great because it allows me to reuse node groups across many assets with different UVs and color IDs. It also means making changes are easier and less time consuming compared to a painting approach. Lastly the target output resolution of the texture maps can be changed without degrading quality. 

There is some things that are just more intuitive to do painterly, when that does happen I use Substance Painter.   

<div class="grid grid-cols-2 gap-3 mt-3">
    <img class="h-auto max-w-full" src="mat-bake-1.jpg">
    <img class="h-auto max-w-full" src="mat-bake-2.jpg">
    <img class="h-auto max-w-full" src="mat-bake-3.jpg">
</div>


### Reference
I was heavily inspired by some of the stylized platformer games, some I even grew up on such as little big planet. 

![reference](reference.jpg)

What I liked about the art direction of little big planet is that you can immediately read exactly what each material was which is not true for all stylistic visuals. The cardboard, plastic, felt cloth, stitching, metallic joinery and so on. Every surface had a material description comprehensive enough to communicate to the player exactly what an object was made out of. It really grounded the visuals you saw on screen to reality, emphasizing this notion of a window into something thats both fiction but grounded in real life. I wanted to incorporate a similar level of tactileness to my materials to give that similar window into a shoebox effect.  

---

### Base Materials
I made a set of base materials in substance designer. These base materials were used for props and the landscape. Since all the materials are parametric changing colors and other material properties could be done for per prop material. 

<div class="grid grid-cols-3 gap-1 mt-3">
    <div class="text-center mb-2"><img class="h-auto max-w-full" src="mat8.jpg"><span class="mt-1 inline-block text-xs sm:text-sm">Clay Base</span></div>
    <div class="text-center mb-2"><img class="h-auto max-w-full" src="mat1.jpg"><span class="mt-1 inline-block text-xs sm:text-sm">Clay River Water</span></div>
    <div class="text-center mb-2"><img class="h-auto max-w-full" src="mat2.jpg"><span class="mt-1 inline-block text-xs sm:text-sm">Striped Plastic w/ Grain</span></div>
    <div class="text-center mb-2"><img class="h-auto max-w-full" src="mat5.jpg"><span class="mt-1 inline-block text-xs sm:text-sm">Clay Grass w/ Grain</span></div>
    <div class="text-center mb-2"><img class="h-auto max-w-full" src="mat6.jpg"><span class="mt-1 inline-block text-xs sm:text-sm">Clay Grass Alternative</span></div>
    <div class="text-center mb-2"><img class="h-auto max-w-full" src="mat3.jpg"><span class="mt-1 inline-block text-xs sm:text-sm">Marbled Wood</span></div>
    <div class="text-center mb-2"><img class="h-auto max-w-full" src="mat7.jpg"><span class="mt-1 inline-block text-xs sm:text-sm">Clay Stone w/ Specular Speckles</span></div>
</div>

#### Base Material Graphs (Substance Designer)

{{< toggle "Clay Base Graph"  >}}
    <img class="h-auto max-w-full" src="mat-graph8.jpg">
{{< /toggle  >}}
{{< toggle "Clay River Water Graph"  >}}
    <img class="h-auto max-w-full" src="mat-graph1.jpg">
{{< /toggle  >}}
{{< toggle "Striped Plastic w/ Grain Graph"  >}}
    <img class="h-auto max-w-full" src="mat-graph2.jpg">
{{< /toggle  >}}
{{< toggle "Clay Grass w/ Grain Graph"  >}}
    <img class="h-auto max-w-full" src="mat-graph5.jpg">
{{< /toggle  >}}
{{< toggle "Clay Grass Alternative Graph"  >}}
    <img class="h-auto max-w-full" src="mat-graph4.jpg">
{{< /toggle  >}}
{{< toggle "Marbled Wood Graph"  >}}
    <img class="h-auto max-w-full" src="mat-graph3.jpg">
{{< /toggle  >}}
{{< toggle "Clay Stone w/ Specular Speckles Graph"  >}}
    <img class="h-auto max-w-full" src="mat-graph7.jpg">
{{< /toggle  >}}

---

## Hero Props and VFX

<div class="grid grid-cols-1 gap-y-4 gap-x-4">

<div>

### Flowers
<video autoplay loop muted playsinline  >
  <source src="flowers.mp4" type="video/mp4">
</video>

<div class="mt-4 mb-4 grid grid-cols-3 gap-y-4 gap-x-4">
<div class="flex h-[200px]"><video autoplay loop muted playsinline class="bg-cover object-cover h-auto w-full"> <source src="flower-1.mp4" type="video/mp4"> </video></div>
<div class="flex h-[200px]"><video autoplay loop muted playsinline class="bg-cover object-cover h-auto w-full"> <source src="flower-2.mp4" type="video/mp4"> </video></div>
<div class="flex h-[200px]"><video autoplay loop muted playsinline class="bg-cover object-cover h-auto w-full"> <source src="flower-3.mp4" type="video/mp4"> </video></div>
</div>
Third times the charm :)
</div>


<div>


### Coconut Tree
<video autoplay loop muted playsinline  >
  <source src="coconut.mp4" type="video/mp4">
</video>
</div>

<div>

### Fish
<video autoplay loop muted playsinline  >
  <source src="fish.mp4" type="video/mp4">
</video>

</div>

<div>

### Rocks
<video autoplay loop muted playsinline  >
  <source src="rocks.mp4" type="video/mp4">
</video>

</div>

<div>

### Statue
<video autoplay loop muted playsinline  >
  <source src="statue.mp4" type="video/mp4">
</video>
</div>

<div>

### God Rays
<video autoplay loop muted playsinline  >
  <source src="god-rays.mp4" type="video/mp4">
</video>
</div>

<div>

### Bees
<video autoplay loop muted playsinline  >
  <source src="bees.mp4" type="video/mp4">
</video>
</div>

</div>

## Primary Props
### Hills
<div class="grid grid-cols-2 gap-y-4 gap-x-4">
<img class="h-auto max-w-full" src="hill-1.jpg">
<img class="h-auto max-w-full" src="hill-2.jpg">
</div>

### Clouds
<div class="grid grid-cols-2 gap-y-4 gap-x-4">
<img class="h-auto max-w-full" src="clouds.jpg">
</div>

## Secondary Props

<div class="grid grid-cols-2 gap-y-4 gap-x-4">
<img class="h-auto max-w-full" src="trees-prop.jpg">
<img class="h-auto max-w-full" src="vegetation-1.jpg">
<img class="h-auto max-w-full" src="vegetation-2.jpg">
<img class="h-auto max-w-full" src="rays.jpg">
</div>

## Shaders

### Vegetation
The tree leaves were just convex geometry on top of a trunk mesh, nothing too special.
For the grass I used polygonal cards and for the ivy I used polygonal strips. I leveraged the baked maps produced from the high-poly meshes to provide normals and alpha's to the low-poly cards. Also baked other maps such as thickness, curvature for more advanced shader effects like subsurface scattering. 


### Wind Shader For Vegetation and Clouds
#### Vegetation
<video autoplay loop muted playsinline  >
  <source src="vegetation-shader-preview.mp4" type="video/mp4">
</video>
<div class="h-5"></div>
<video autoplay loop muted playsinline  >
  <source src="vegetation-shader.mp4" type="video/mp4">
</video>

#### Clouds
<video autoplay loop muted playsinline  >
  <source src="cloud-shader.mp4" type="video/mp4">
</video>

<div class="h-5"></div>

{{< toggle "Wind Shader Graph"  >}}
    <img class="h-auto max-w-full" src="vegetation-shadergraph.jpg">
{{< /toggle  >}}

### River Shader
<video autoplay loop muted playsinline  >
  <source src="river-shader.mp4" type="video/mp4">
</video>

<div class="h-5"></div>
{{< toggle "River Shader Graph"  >}}
    <img class="h-auto max-w-full" src="river-shadergraph.jpg">
{{< /toggle  >}}


## Post-Processing
Post processing was really key in getting the final look. Since Unity's HDRP is physically based the default tonemapped image has a tendency of desaturating the intended diffuse colors of the objects. For the kind of look I was going for (vibrant and lots of lifted shadows), it was essential to color grade. You can see the difference it makes in the [timelaspe](#timelapse). There was a transition where everything had this ugly yellow cast and felt really dull then all of the sudden its bright and vibrant. 


## Dialogue Boxes

<div class="w-full">
    <div class="flex h-[500px]">
    <video autoplay loop muted playsinline class="bg-cover object-cover h-auto w-full"> <source src="dialogue-wip.mp4" type="video/mp4"> </video>
    </div>
</div>

## Gameplay Programming 
For implementing the game mechanics I had someone in the lab to assist me, P'Kiew. He is a experienced C# unity developer. I was so lucky to have him help and mentor me. He contributed in hooking up the mocap, core game systems and game mechanics on the final week of internship (week 4). 

### Design Pattern
The pattern we mostly used singletons. We used singletons as managers that take certain responsibilities aspects of the virtual world. Nothing here was super fancy as Unity handles a lot of complicated logic for us such as physics, triggers and colliders automatically.  Our focus was in mostly hooking up routines and animations based on player input controls or triggered events in the level. The challenge was mostly tuning parameters post play tests.

### Pose Estimation (Google's API)
We leveraged [Google's Media Pipe API](https://developers.google.com/mediapipe/solutions/vision/pose_landmarker) for precise body pose detection and estimation, seamlessly integrating it into Unity's C# .NET environment. This integration allowed us to utilize key joint positions, such as wrists and shoulders, to dynamically control various aspects of the virtual world. For instance, we utilized these joint positions to control the horizontal movement of the character, adjust the levitation strength of the toppled rocks, and trigger in-game dialogue with the character. 

### Play Testing

<div class="grid grid-cols-2 gap-1 mb-3">
    <div class="flex"><video autoplay loop muted playsinline class="bg-cover object-cover h-auto w-full"> <source src="playtesting.mp4" type="video/mp4"> </video></div>
    <div class="flex"><img class="h-full object-cover bg-cover" src="intern-3.1.jpg"></div>
</div>

Did lots of informal play tests letting people in the office or myself test the current build of the project to develop features and or iron out bugs.   

# Conclusion

### Wish there was more time.
My internship being as long as my summer break (4 weeks) it was admittedly short. This is due to it being an independent internship and not a university sponsored one. However, I was surprised how much was accomplished in the time I had. Wish I had more time to polish the features and turn it into a game with a fun gameplay loop. 

<div class="grid grid-cols-2 gap-1 my-3">
    <div class="flex"><video autoplay loop muted playsinline class="bg-cover object-cover h-auto w-full"> <source src="end.mp4" type="video/mp4"> </video></div>
    <div class="flex"><img class="h-full object-cover bg-cover" src="adapter-team.jpg"></div>
</div>

I wished I spent more time talking to the team. Everybody in the innovation / design lab at Adapter Digital were so incredibly kind and welcoming. I couldn't of asked for a better internship experience❤️. 



