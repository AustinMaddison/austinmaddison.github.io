---
title: Circular Separable Convolutional Lens Blur In Unity
date: 01 Dec 2023
description: Experimental implementation of EA's circular separable convolutional  blur in Unity URP.
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

<video autoplay loop muted playsinline >
  <source src="thumbnail.webm" type="video/webm">
</video>

<div class="h-5"></div>

I have always been intrigued by lens simulation and post process effects in games and movies. One of the most important lens effect to emulate is camera lens blur (also known as bokeh depth of field). Lense blur is usually used isolate subject matter or exagerate depth in a scene. In real life, the charactersistics of the lens blur is highly depenedant on the lens, more specifically the configuration of glass elements inside the lens's housing. 

You can read more about the topic from Silicon Studio's RND Presentations on Real-time Rendering of Physically Based Optical Effect in Theory and Practice [here](https://www.siliconstudio.co.jp/en/rd/presentations/).

For reference renderers such as ray-tracers and path-tracers this effect can simulated while  during rendering while realtime methods is a post effect.

## Gather and Scatter
Solutions to achieving lens blur are categorized into either a gather or scatter solutions. Some modern methods use a hybrid of both. The gather runs convolution kernel over the target image while a scatter solution literally scatters quads with the bokeh shape over the target image. Both methods have unique tradeoffs, I think there is an obscure Epic Game's talk on the topic.From now onwards I will be ignoring scatter solutions.

## Whats wrong with gather? 
Unlike gaussian blur which is seperable, a circular blur was thought to not be able to be serperable too. Gather based methods have that are not seperable have \(O(n^2)\) time complexity.

However developers at EA proposed that we could use an imaginary component to construct a circular blur and supporting seperability.

![alt text](diagram.png)
![alt text](plot.png)

## Inital tests in MATLAB
I used MATLAB's GPU arrays for testing wheteher I could implement what is described in the paper.
![alt text](matlab.png)


## Implementation in Unity
Unity's universal render pipeline (URP) allows us to create a renderer feature to implement post-processing effects. 
![alt text](image.png)

```cs
using UnityEngine.Rendering.Universal;

public class CscLensBlurRendererFeature : ScriptableRendererFeature
{
    CscLensBlurRenderPass cscLensBlurRenderPass;

    public override void Create()
    {
        cscLensBlurRenderPass = new CscLensBlurRenderPass();
        name = "CscLensBlur";
    }

    public override void AddRenderPasses(ScriptableRenderer renderer, ref RenderingData renderingData)
    {
        if(cscLensBlurRenderPass.Setup(renderer))
        {
            renderer.EnqueuePass(cscLensBlurRenderPass);
        }
    }
}
```

The renderer feature takes a render pass which executes the fucntions that run the shaders over the input image.

```cs
public class CscLensBlurRenderPass : ScriptableRenderPass
{
  //...
  public override void Execute(ScriptableRenderContext context, ref RenderingData renderingData)
  {
    if (blurSettings == null || !blurSettings.IsActive())
      return;

    CommandBuffer cmd = CommandBufferPool.Get("Csc Blur Blur Post Process");

    material.SetFloat("_Spread", blurSettings.strength.value);

    // Horizontal
    cmd.Blit(source, horizontalPassTexR, material, 0);
    cmd.Blit(source, horizontalPassTexG, material, 1);
    cmd.Blit(source, horizontalPassTexB, material, 2);
    cmd.Blit(source, horizontalPassTexW, material, 3);

    cmd.Blit(horizontalPassTexR, renderTexR);
    cmd.Blit(horizontalPassTexG, renderTexG);
    cmd.Blit(horizontalPassTexB, renderTexB);
    cmd.Blit(horizontalPassTexW, renderTexW);

    material.SetTexture("_TexR", renderTexR);
    material.SetTexture("_TexG", renderTexG);
    material.SetTexture("_TexB", renderTexB);
    material.SetTexture("_TexW", renderTexW);

    cmd.Blit(null, source, material, 4);

    context.ExecuteCommandBuffer(cmd);
    cmd.Clear();
    CommandBufferPool.Release(cmd);
  }
  //...
}

```

## Results
![alt text](image-1.png)
![alt text](image-2.png)
![alt text](image-3.png)
![alt text](image-4.png)
![alt text](image-5.png)


## Code Repository
[GitHub Repository Link](https://github.com/AustinMaddison/CocLb/tree/master)

## References
https://www.ea.com/frostbite/news/circular-separable-convolution-depth-of-field