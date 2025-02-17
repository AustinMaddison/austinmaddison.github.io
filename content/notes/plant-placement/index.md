---
title: Simulating Realsitic Plant Placement
date: 01 Dec 2024
description: Climate space and plant optimility based simulation that aims to try to solve the caveats of noise/topological based scattering techniques.  
thumbnail: thumbnail.webm
cover: thumbnail.webm
tags:
    - simulation
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

I created a set of tools to generate plant placement to used in internally in houdini or externally via houdini engine. Plant placement is fully derived by climate space attributes (preciptation, sun occlusion, temperature and so on) and plant species optimality attributes. This in hopes solves the caveat of purely noise/topological based scattering techniques for many plants species. Go see slides [here](https://www.slideshare.net/slideshow/faithful-foliage-placement-for-realtime-virtual-terrain/274538137).

## Slides 
<iframe src="https://www.slideshare.net/slideshow/embed_code/key/UPDVcQ2ZVwoki?hostedIn=slideshare&page=upload" width="100%" height="400" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>

<div class="h-5"></div>


## Results
<img class="mx-auto my-4" src=render_0.jpg>
<img class="mx-auto my-4" src=render_1.jpg>
<img class="mx-auto my-4" src=render_2.jpg>
<img class="mx-auto my-4" src=render_3.jpg>
<img class="mx-auto my-4" src=render_4.jpg>
<img class="mx-auto my-4" src=render_5.jpg>
<img class="mx-auto my-4" src=render_6.jpg>
<img class="mx-auto my-4" src=render_7.jpg>
<img class="mx-auto my-4" src=render_8.jpg>
<img class="mx-auto my-4" src=render_9.jpg>
<img class="mx-auto my-4" src=render_10.jpg>

## Future Plans
As of currently, the seeding procdeure in the algorithm is causes the simulation to explode. I suspect the calculations doesn't properly conserve resources. Futher investigation is needed. 

To side step simulation time, a friend of mine suggested training a machine learning model. The idea is that when a climate and plant configuration is established, we could train a model to cheapily calculate plant placement for very large climate spaces.  

## References
**Reference Images**  
Forza Horizon 5 (Game) - Playground Games  
Far Cry 6 (Game) - Ubisoft  
The Lion King Remake (Animated Feature Film) - Disney & MPC VFX  

**Textbook**   
Digital Design of Nature: Computer Generated Plants and Organics - Oliver Deussen, Bernd Lintermann

**Current Methods**   
Synthetic Silviculture: Multi-scale Modeling of Plant Ecosystem
https://storage.googleapis.com/pirk.io/projects/synthetic_silviculture/index.html

GPU-Based Procedural Placement in Horizon Zero Dawn
https://www.slideshare.net/guerrillagames/gpubased-procedural-placement-in-horizon-zero-dawn

**Foliage Atlas Textures**  
Quixel Megascans - https://quixel.com/megascans

**Technology Used**  
SideFx Houdini - VEX, Hython, OpenCL  
Unreal Engine 5 - Reference Renderer, Pathtracer
