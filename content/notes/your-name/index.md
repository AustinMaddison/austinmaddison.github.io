---
title: Your Name Hero Art 
date: 20 Feb 2024
description: Fan art recreation of one Your Name's hero art. I breakdown procedural NPR shaders in Blender 4 to compositing in After Effects.  
thumbnail: thumbnail.webm
cover: thumbnail.png
tags:
    - shaders
categories:
    - personal
draft: false
weight: 1
type: notes
---

{{% header %}}

<iframe class="w-full" height="360px" src="https://www.youtube.com/embed/x5DszBeoHWU?si=E6zmq-Kp3f46g7dh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>



<div class="mb-8"> </div>

I bought a new laptop after wrapping up work for bangkok design week. My 5 year old laptop rocking GTX 1050 and 7th generation i5 could no longer keep up. I wanted to give my new laptop for a spin. I downloaded the latest version of Blender (version 4.1 at the time) and found some inspiration and got to work.



<mark>You can download the .blend file [here](#project-file) if you want to follow along!</mark>

# Breakdown
All elements are relativley simple geometry, most geometry is just a vehicle for the shaders applied over them. I do not use any special plugins, just vanilla blender here.

## Trail

#### Geometry
The trails are made from simple quad ribbons that that are shaped by splines. Splines are easy to manipulate to make the arcs in the trail. I also ensure their UVs are reasonably layed out so I can map colors and create shapes onto them. 

![alt text](image-1.png)


#### Color

![alt text](image-6.png)

![alt text](image-7.png)



#### Transparency
Since the trail is UVed, to make a verical fade, we just need to isolate 1 of the axes.

![alt text](image.png)

![alt text](image-3.png)

![alt text](image-4.png)





#### Waves










## Sky

#### Geometry

#### Vornoi Noise

#### 3D Fractal Noise  

## Clouds

#### 3D Vornoi Noise



## Compositing
I wanted to push the render a little more with some post-process effects and color grading that to enhance the composition. Also I add the official typography over the top to seal the deal. 

# Project File
https://github.com/AustinMaddison/Your-Name/releases/tag/V1

