# About
This is a [Meteor](http://meteor.com/) smart package that allows you to reactively cycle
through elements or sets of elements in the DOM.

#### Events
Reactive-cycle can be set to cycle based on clicks, scrolls, and swipes. By default, it will
detect scrolls and swipes (touch screens, mobile-compatible).

You can explicitly set which events to detect on the container element by specifying an array
of events in the settings object under the `events` property. For example:

```javascript
var settings = {

  /* other settings, */
  
  events: ['scroll', 'swipe', 'click'],

  /* If you specify the click event, you must also specify which buttons to use */
  clickNext: '.click-next',
  clickPrev: '.click-prev'
}

```

Available events are:

* swipe (up and left for next, down and right for previous) __Default__
* swipeVertical (up for next, down for previous)
* swipeHorizontal (left for next, down for previous)
* scroll __Default__
* scrollVertical
* scrollHorizontal
* click (must specify clickNext and clickPrev selectors, which will be scoped to the container)

#### Item & Set Detection
One of the unique features of this library is that it detects items based on visibility in
the browser's viewport, not by an index attribute.

_In order for this to work properly, you must style the elements you're cycling through to
fit into your container precisely as you want them. For example, for a single-page swipe
look, you'll want to specify one element per set, and you'll want to style each element
to be 100% width and height of the container.__

## Install

### Meteorite
Using [meteorite](http://oortcloud.github.io/meteorite/) do the following:
```
mrt add reactive-cycle
```

### Other
If you don't like using meteorite, create the folder `packages/reactive-cycle/` and copy the `packages.js` and `lib/` to it.

## Usage

Pass a settings object into `ReactiveCycle`.

```javascript
// Reactive-cycle will run on every instance of the given template.
var settings = {
  template: "templateName",
  container: ".container-selector",
  items: ".item-selector",
  itemsPerSet: 4, // Default to 1
  events: ['swipeVertical', 'click'], // Default to 'swipe', 'scroll'

  // Only required if click is specified
  clickNext: '.click-next',
  clickPrev: '.click-prev'
}

ReactiveCycle(settings);
```
