CSS3 is the latest version of CSS. There won't be a CSS4 as the way CSS is developed
has changed. CSS3 contains modules that have different versions.

CSS is case insensitive, so using camel case names would have no value.

CSS uses a box model. It means that every element 
is a box. It consists of the content, padding, border
and margin.

* Padding comes right after the content and is between
the border and the content.

* Margin is the area that is outside of the border.

**Margin collapsing** - if you have two elements
next to each other, then their overlapping margins
are collapsed to one margin. The bigger margin wins.
In general it's a good idea to use either 
margin-top or margin-bottom, unless you don't care
about the collapsing. If the parent element does not
have padding, border or inline content aside from
the child, then the margins collapse. With an
element with no content the top and bottom margins
get merged into one with the larger winning.


Shorthand properties combine multiple properties
into a single property.

**display:none vs visibility: hidden** - display none removes the element from
the view and it doesn't take up any space. Other elements can take its place.
Visibility: hidden makes it keep its place, so it's only invisible, it isn't
removed from the DOM.

If you have several classes on an element, then the same
rules of specifity apply. The order on the element does not 
matter, but the order in the CSS files will matter.

When styling a single element, then prefer a class.
Using an ID would have the same effect, but it 
introduces additional effects, that you might not want.
E.g. being able to link to that element on the page.
A class, however, is purely for style.

!important overwrites specifity and all other selectors.
It is a good idea to avoid it, as it breaks the regular rules.
Use specifity and rules to style correctly. There are
some edge cases where it might be necessary.

Not all browsers support every CSS feature, 
similar to how Javascript works. When adding features
it's a good idea to make sure they are supported by
your target browsers. 

### Hardware pixels vs software pixels
A hardware pixels is an individual dot of light in the display. A software pixel, also called
a CSS pixel in the web world, is a unit of measurement. The device manufacturer determines how
many hardware pixels equals one software pixels, a concept known as the device pixel ration.

A CSS pixel is designed to be roughly equivalent across devices. If you load the same website
side-by-side on devices with similar physical dimensions, but different pixel rations, then the
website will appear to be roughly the same visual size. 

For example an iPhone X is CSS pixel measurements physically 375 x 812 pixels. But as there is a 
3 times multiplier, then the physical measurements would be 1125 x 2436 pixels, meaning that going
by those pixels, our website would consider the renderer a desktop device. In order to properly
render our website using the CSS dimensions, then we need to say that it should use CSS pixels.
`mydevice.io` can be used to check the different sizes.

In order to tell the browser that it should use the CSS pixels we have to add a viewport metatag
to our HTML. `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

A lot of places are designing websites mobile first nowadays. That is first they check that the
website fits the mobile device and then that it fits desktop.

If you're trying to decide what breakpoints to target, then you can take a look at the most common
devices and use the breakpoints from there. When adding media queries, they usually go to the bottom
of the CSS files so they'd be easier to find.