# A single div with some triangles

Turns out Triangles are quite tricky with CSS. I never really tried to make one before. 

```
<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="css,result" data-user="aisflat439" data-slug-hash="ZdNxXo" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Triangles">
  <span>See the Pen <a href="https://codepen.io/aisflat439/pen/ZdNxXo/">
  Triangles</a> by Devin P Fitzsimons (<a href="https://codepen.io/aisflat439">@aisflat439</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
```

## Gradients for the win

Seriously... Gradients. They're the best. I need to up my box shadow game a lot. I think the combination of elite box shadow skills, plus top level chops at gradients could make for some amazing CSS approaches to common layout tricks. This one is actually very understandable.

Mine was a styledComponent that I put in a function (since I reused it a bunch) but lets take a look.

```js
const triangleGradient = color => `background: linear-gradient(
                                                      45deg,
                                                      ${color} 50%,
                                                      transparent 50% 100%);` 
```

The first argument to the linear gradient is `45deg`. This could also be written, to top right. It's just the direction we're sending our gradient. Then we make it a solid color for half with `${color} 50%,`. For a second forget the degree. Our box is square because of the height and width being set? So we color half of the square, and let the other half be transparent. So now it's a rectangle. Right? Okay so instead of coloring it right to left, just color it point to point, that's the 45 degrees. And then it's a triangle.  You have to rotate it to make it fit. But that's pretty straightforward. 


## Moving things

You have to watch out for translate. Since you've rotated, up and down aren't exactly the same as what you expect. Also, you need to flip the text, that is if you want to. I suspect I could handle the text slightly differently. In my specific case, I wanted to have text so that I could give it that sweet neon look.

## Going forward

I'd like to make this same triange but equilateral. For now this is "good enough" and I have other stuff to focus on. This is kind of a cool thing to have to do though and I hope I can come up with some cool uses for Triangles, besides just vaporwave elements. In truth, this is probably best achieved with an SVG. I'd say looking up a react package that generates SVG shapes would be time well spent. I'll add that to the never ending list of things I want to look up.