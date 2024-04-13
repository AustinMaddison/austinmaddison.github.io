---
---
{{% header %}}
{{% cover %}}

# Heading 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed dui sed nisi egestas volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque placerat semper justo id aliquet. Fusce placerat suscipit tortor ut vestibulum. Etiam vehicula dolor nec mi vehicula, ut mattis mi porttitor. Duis pellentesque varius eleifend. Etiam sit amet orci ultrices dui auctor blandit a a dui. Maecenas dapibus, velit ac tincidunt aliquet, eros diam accumsan nulla, eu varius massa ex a velit.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed dui sed nisi egestas volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque placerat semper justo id aliquet. Fusce placerat suscipit tortor ut vestibulum. Etiam vehicula dolor nec mi vehicula, ut mattis mi porttitor. Duis pellentesque varius eleifend. Etiam sit amet orci ultrices dui auctor blandit a a dui. Maecenas dapibus, velit ac tincidunt aliquet, eros diam accumsan nulla, eu varius massa ex a velit.

{{% fig src="figure.png" caption="Example Caption" %}}

## Heading 2
Curabitur ante magna, imperdiet vel magna id, tincidunt sollicitudin turpis. Nulla massa turpis, convallis id lacus ut, sodales egestas nunc. In hendrerit neque sed aliquet porta. Ut hendrerit nibh vitae mattis ornare. Nulla eu orci sed velit pellentesque aliquet. Praesent vitae nisi diam. Cras nec egestas urna.

{{% 3js "https://austinmaddison.github.io/Site-3D-Scenes/overview/teapot/index.html" %}}

### Heading 3

```cpp {linenos=table,hl_lines=[8,"15-17"],linenostart=199}
#include <iostream>
int main()
{
    std::cout << "Example Code" << std::endl;
    return 0;
}
```
##### The Phong Lighting Equation
Based upon what we've learned about BRDFs, one question that often comes up concerns
the relationship between the commonly used Phong lighting model and the general BRDF
lighting equation discussed above. To understand where Phong lighting fits in, it's useful
to examine the Phong expression itself. Recall, that Phong lighting relates the amount of
light reflected towards a viewer as:

$$
I_{o u t}=I_{i n}\left(k_{d}\left({\bf L}\bullet{\bf N}\right)+k_{s}\left({\bf R}\bullet{\bf V}\right)^{n}\right)
$$


\(L\) and \(V\) correspond to incoming direction \((w_i)\) and outgoing direction \((w_o)\) (wo) from the 
BRDF terminology, so we can rewrite the expression as 

$$
\begin{array}{l}
L_{o}=L_{\ell}\text{Refl}(w_{i},w_{o}) \\\\
L_{o}=\text{Refl}(w_{i},w_{o})L_{\nu} \\\\
L_{o}=\dfrac{\text{Refl}(w_{i},w_{o})L_{i}}{\cos\theta,d w_{i}}\text{Refl}(w_{i},w_{o})L_{\nu}\cos\theta_{i}d w_{i} \\\\
L_{o}=\dfrac{\text{Refl}(w_{i},w_{o})}{\cos\theta\,d w_{o}}L_{\ l}\cos\theta_{i}d w_{o}
\end{array}
$$