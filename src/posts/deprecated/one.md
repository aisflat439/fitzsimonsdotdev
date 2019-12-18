# Improving design with great development at IntuitSolutions

Everyone knows that great design leads to more brand trust, higher click through rates, and better conversion rates. However, it can also mean the need for extra HTML, Javascript and CSS to implemenet that design. Our design team recently spec'd out a nice flourish most sites will have coded as several extra div elements. While acceptable, this choice isn't a best practice in modern development. Added markup means larger file size, and file size means slower download times and more for Google's robot trackers to sift through.

## Row separation in design

A common design pattern is to separate two rows of content with a visual cue, letting the visitor know they're moving into a new section of content. Here's an example from BigCommerce's site.

![big commerce design](./assets/bigcommerce.JPG)

Note how the angled grey bar let's you know you've left one section and now you're learning about "Features over fees". Our design team used this pattern to add a small flourish to a clients site. The flourish is on brand for the client, and adds that same visual separator.

![design flourish](./assets/flourish.JPG)

## An inital, not optimal, approach

We have some polish to put on this approach to get what the design calls for, but some version of the following approach is what we see on lots of clients sites. A div with three elements inside, styled appropriately. 

<p class="codepen" data-height="374" data-theme-id="0" data-default-tab="css,result" data-user="aisflat439" data-slug-hash="LvPxgm" style="height: 374px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Approach to a design flourish">
  <span>See the Pen <a href="https://codepen.io/aisflat439/pen/LvPxgm/">
  Approach to a design flourish</a> by Devin P Fitzsimons (<a href="https://codepen.io/aisflat439">@aisflat439</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Strictly speaking there's nothing wrong with this approach. We could refactor this into pseduo elements and a div, or perhaps a horizontal rule element. However, we're adding four elements to the DOM every time we implement this, and similar, solutions. These extra elements are more work for googles robots parse, to say nothing of the increased cognitive load gort the next devleoper that may be working on the site. 

## A class-ier approach

The [site css-tricks.com run by Chris Coyier](https://css-tricks.com/) covers front end developement technology. He points out [Lynn Fishers site](https://a.singlediv.com/) in [this article](https://css-tricks.com/why-would-you-do-that-in-css/). Her experiments in CSS, using a single div, push the boundaries of what can be done with CSS. Inspired by this we can rethink our approach to use the existing DOM structure. For lines, consider linear gradients, for extra content, consider a psuedo element. First lets move the margin into the row class itself. Then using the same row structure just add the flourish code into a utility class. 

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="css,result" data-user="aisflat439" data-slug-hash="LvPxgm" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Approach to a design flourish">
  <span>See the Pen <a href="https://codepen.io/aisflat439/pen/LvPxgm/">
  Approach to a design flourish</a> by Devin P Fitzsimons (<a href="https://codepen.io/aisflat439">@aisflat439</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Adding a linear gradient to the bottomo to the page is quite tricky so instead we should add it to the border bottom. We can't use a linear gradient on `border-color` because as they're not available on borders. Luckily, they're available on `border-image`. We've now added the same design flourish, with no extra markup on the DOM and no cognitive overhead for the developer. 