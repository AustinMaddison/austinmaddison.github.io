---
title: Your Name Hero Art 
date: 20 Feb 2024
description: Fan art recreation of one Your Name's hero art. I breakdown procedural NPR shaders in Blender 4.  
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

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1047475777?h=d586fa63b6&amp;muted=1&amp;autoplay=1&amp;loop=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Your Name Fan Art [Free Blender .blend Project File]"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>



<div class="mb-8"> </div>

I bought a new laptop after wrapping up work for Bangkok Design Week. My 5-year-old laptop, equipped with a GTX 1050 and a 7th-generation i5, could no longer keep up. Eager to put my new machine to the test, I downloaded the latest version of Blender (version 4.1 at the time), found some inspiration, and got to work.

---

The shaders I created turned out to be surprisingly simple. Many of the components rely on remapping fractal and Voronoi noise. Thanks to Blender's shading system, all the noise textures I needed were readily available, making it easy to create the different elements. If these noise types weren’t implemented out of the box, the process would have been far more involved.

<mark>You can download the .blend file [here](#project-file) if you want to follow along!</mark>


# Breakdown

## Trail

#### Geometry
The trails are made from simple quad ribbons that that are shaped by splines. Splines are easy to manipulate to make the arcs in the trail. I also ensure their UVs are reasonably layed out so I can map colors and create shapes onto them. 


<div class="grid grid-cols-2 sm:grid-cols-2 my-4 gap-4">
  <img src="image-1.png" class="mx-auto my-auto">
  <img src="image-8.png" class="mx-auto my-auto">
</div>




#### Color

I isolate vertical axis and map the purple, blue 'ish' gradient to like you find in the anime. I alos add some fractal noise to break up the uniformity.

<div class="grid grid-cols-2 sm:grid-cols-2 my-4 gap-4">
  <img src="image-6.png" class="mx-auto my-auto">
  <img src="image-7.png" class="mx-auto my-auto">
</div>


#### Mask
Since the trail is UVed, to make a verical fade, again can isolate the vertical axis. We can use the vertical positions and remap them to new values to create streaks, like we did for the color gradient earlier.

<img src="image.png" class="my-4 mx-auto">

<div class="grid grid-cols-2 sm:grid-cols-2 my-4 gap-4">
  <img src="image-3.png" class="mx-auto my-auto">
  <img src="image-4.png" class="mx-auto my-auto">
</div>

To break up uniformity, I add some fractal noise. 

<div class="grid grid-cols-2 sm:grid-cols-2 my-4 gap-4">
  <img src="image-9.png" class="mx-auto my-auto">
  <img src="image-11.png" class="mx-auto my-auto">
</div>

Then for the cool magical waves I used a vornoi noise but stretched vertically.
<div class="grid grid-cols-2 sm:grid-cols-2 my-4 gap-4">
  <img src="image-10.png" class="mx-auto my-auto">
  <img src="image-12.png" class="mx-auto my-auto">
</div>

To animate the waves I used the python expression (field highlighted in purple) on the mapping nodes's translation `frame * 0.001` translate it along the horizontal direction overtime.

<img src="image-10.png" class="my-4 mx-auto">


Then I combine back with the streaks to get this.


<img src="image-13.png" class="my-4 mx-auto">


#### Combine
I mix the mask and the colors from earlier to get the final trail

<img src="image-15.png" class="mx-auto my-4">
<img src="image-14.png" class="mx-auto my-4">



## Sky

#### Simple Sky Gradient and Ring
Using blender's world shader, first I get the coordinates of the sky.
<img src="image-21.png" class="mx-auto my-4">

Then I apply some noise along an axis. This covers a whole hemisphere. 
<div class="grid grid-cols-2 sm:grid-cols-2 my-4 gap-4">
  <img src="image-20.png" class="mx-auto my-auto">
  <img src="image-22.png" class="mx-auto my-auto">
</div>

A ramp is then used to limit the values to form a ring.

<img src="image-23.png" class="mx-auto my-4">

Lastly I mix the night sky blue colors to the greyscale mask made previously and from the sky vertical cooridinates.

<img src="image-40.png" class="mx-auto my-4">
<img src="image-24.png" class="mx-auto my-4">


#### Colored Stars
To create many randomly distrubuted dots of diifferent sizes and positions, I found inverted vornoi to be a good way to do this.

<div class="grid grid-cols-2 sm:grid-cols-2 my-4 gap-4">
  <img src="image-16.png" class="mx-auto my-auto">
  <img src="image-17.png" class="mx-auto my-auto">
</div>

Since the stars are a little too unifrom, I clustered the stars using a mask. The mask again using scaled up fractal noise.  

<img src="image-19.png" class="mx-auto my-4">


Then to apply colors on the stars, multiplying colored noise made using fractal noise and a color ramp does the trick. 

<img src="image-18.png" class="mx-auto my-4">


#### Combine

Lastly mix the stars with the sky gradient made earlier.
<img src="image-25.png" class="mx-auto my-4">


## Clouds

#### Geometry
Used a modified uv sphere primitive to encompass the scene to render the clouds on. 
<img src="image-26.png" class="mx-auto my-4">


#### Base Noise
The base noise used to shape and color the clouds are made from 3 noises. 2 vornois with different scales and detailed 1 fractal noise.

<img src="image-27.png" class="mx-auto my-4">


<div class="grid grid-cols-3 sm:grid-cols-3 my-4 gap-2">
  <img src="image-29.png" class="mx-auto my-auto">
  <img src="image-30.png" class="mx-auto my-auto">
  <img src="image-33.png" class="mx-auto my-auto">
</div>

The output of all these 3 noises mixed together
<img src="image-35.png" class="mx-auto my-4">


#### Shaping Clouds

Using the base the noise, shape of the clouds can be defined with a ramp.

<img src="image-39.png" class="mx-auto my-4">
<img src="image-28.png" class="mx-auto my-4">


#### Coloring Clouds
Similarly, to color the clouds, a color ramp was used to map the desired cloud colors onto the base noise.

<img src="image-38.png" class="mx-auto my-4">
<img src="image-36.png" class="mx-auto my-4">

#### Combine  

Lastly mask the colors out using the shape made earlier... 'tada', clouds.

<img src="image-37.png" class="mx-auto my-4">

## Compositing
For post-processing, I added lens-flares, color grades and added film grain in after effects. Made a 16x9 and 9x19 version for desktop and mobile phone wallpapers.


<div class="grid grid-cols-2 sm:grid-cols-2 my-4 gap-4">
<img src="Wallpaper 16x9 720p.png" class="mx-auto my-auto">
<img src="9x19.png" class="mx-auto my-auto">
</div>



# Blender Project File (.blend)
https://github.com/AustinMaddison/Your-Name/releases/tag/V1

