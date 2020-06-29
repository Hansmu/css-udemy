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