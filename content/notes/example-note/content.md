---
---
{{% header %}}
{{% cover %}}


# Introduction

## Paragraph
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed dui sed nisi egestas volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque placerat semper justo id aliquet. Fusce placerat suscipit tortor ut vestibulum. Etiam vehicula dolor nec mi vehicula, ut mattis mi porttitor. Duis pellentesque varius eleifend. Etiam sit amet orci ultrices dui auctor blandit a a dui. Maecenas dapibus, velit ac tincidunt aliquet, eros diam accumsan nulla, eu varius massa ex a velit.

{{% fig src="figure.png" caption="Example Caption" %}}

## WebGL `<iframe>`
{{% 3js "https://austinmaddison.github.io/Site-3D-Scenes/overview/teapot/index.html" %}}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed dui sed nisi egestas volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque placerat semper justo id aliquet. Fusce placerat suscipit tortor ut vestibulum. Etiam vehicula dolor nec mi vehicula, ut mattis mi porttitor. Duis pellentesque varius eleifend. Etiam sit amet orci ultrices dui auctor blandit a a dui. Maecenas dapibus, velit ac tincidunt aliquet, eros diam accumsan nulla, eu varius massa ex a velit.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed dui sed nisi egestas volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque placerat semper justo id aliquet. Fusce placerat suscipit tortor ut vestibulum. Etiam vehicula dolor nec mi vehicula, ut mattis mi porttitor. Duis pellentesque varius eleifend. Etiam sit amet orci ultrices dui auctor blandit a a dui. Maecenas dapibus, velit ac tincidunt aliquet, eros diam accumsan nulla, eu varius massa ex a velit.



## Code Snippet

```cpp {linenos=table,hl_lines=[8,"15-17"],linenostart=199}
#include <iostream>
int main()
{
    std::cout << "Example Code" << std::endl;
    return 0;
}
```
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed dui sed nisi egestas volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque placerat semper justo id aliquet. Fusce placerat suscipit tortor ut vestibulum. Etiam vehicula dolor nec mi vehicula, ut mattis mi porttitor. Duis pellentesque varius eleifend. Etiam sit amet orci ultrices dui auctor blandit a a dui. Maecenas dapibus, velit ac tincidunt aliquet, eros diam accumsan nulla, eu varius massa ex a velit.


## Math Notation
##### The Phong Lighting Equation
Based upon what we've learned about BRDFs, one question that often comes up concerns
the relationship between the commonly used Phong lighting model and the general BRDF
lighting equation discussed above. To understand where Phong lighting fits in, it's useful
to examine the Phong expression itself. Recall, that Phong lighting relates the amount of
light reflected towards a viewer as:

$$
\mathrm{BRDF}_{\lambda}(\theta_{i},\phi_{i},\theta_{o},\phi_{o})\mathrm{cos}\,\theta_{o}d w_{o}\leq1\
$$

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed dui sed nisi egestas volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque placerat semper justo id aliquet. Fusce placerat suscipit tortor ut vestibulum. Etiam vehicula dolor nec mi vehicula, ut mattis mi porttitor. Duis pellentesque varius eleifend. Etiam sit amet orci ultrices dui auctor blandit a a dui. Maecenas dapibus, velit ac tincidunt aliquet, eros diam accumsan nulla, eu varius massa ex a velit.

$$
\mathrm{BRDF}=\frac{L_{o}}{L_{i}\cos\theta_{i}d w_{i}}
$$

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed dui sed nisi egestas volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque placerat semper justo id aliquet. Fusce placerat suscipit tortor ut vestibulum. Etiam vehicula dolor nec mi vehicula, ut mattis mi porttitor. Duis pellentesque varius eleifend. Etiam sit amet orci ultrices dui auctor blandit a a dui. Maecenas dapibus, velit ac tincidunt aliquet, eros diam accumsan nulla, eu varius massa ex a velit.

$$
I_{o u t}=I_{i n}\left(k_{d}\left({\bf L}\bullet{\bf N}\right)+k_{s}\left({\bf R}\bullet{\bf V}\right)^{n}\right)
$$