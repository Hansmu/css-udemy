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

### Fonts
There are generic font families, that include specific fonts within them. Generic families define what
kind of styles can be found within them. A serif is a small line or stroke regularly attached to the end
of a larger stroke in a letter or a symbol. So serifs are font families that include a serif style. A
sans-serif is the opposite of that. Cursive is families that include cursive. Monospace is a font where
each character occupies the same amount of horizontal space.

So every generic font family defines what kind of feature they have. Each of those generic families then
have their specific implementations. Basically a generic font family is an interface and a font is an
implementation.

| Generic Families     | Specific font examples |
| --------------- | ----------- |
| serif      | Times New Roman; Georgia       |
| sans-serif   | Helvetica; Verdana        |
| cursive   | Brush Script; Mistral        |
| monospace   | Courier New; Lucida Bright        |
| fantasy (uncommon)   |         |

The browser has a default font that it will display. If we do not specify a specific font, then the default
one will be displayed. Alternatively, we could define a generic family to make sure the browser uses that 
type of style. The user can define whatever font they want for those generic families, though. So if we
state sans-serif, that does not mean that we're going to get the same look on every device as the specific
fonts used for those families can be overwritten in the options. Finally, we can define a specific font
family. This would make sure that our fonts would look the same on all browsers.