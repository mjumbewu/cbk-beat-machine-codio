Whenever you do something on a web page, you may cause an *event*. For example, if you:
* Move the mouse across the screen
* Click on anything
* Press a key

Any of the above actions ([and more](https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events)) will cause an *event*.

## Listening for events

In web pages you create, you can call a *function* whenever an *event* happens by getting elements on the page to "listen" for the event.

For example, let's say I have a function called `sayHi` on my page that will pop up a box that says "Hello there!":

```javascript
function sayHi() {
   alert('Hello there!');
}
```

And let's say I have a button element on my page:

```html
<button id="sayHiBtn">Say Hi</button>
```

I can tell the button to "listen" for when someone clicks it, and when it happens, to call my `sayHi` function.

```javascript
var sayHiBtn = document.getElementById('sayHiBtn');
sayHiBtn.addEventListener('click', sayHi);
```

Try it out here:

<iframe src=".guides/demos/events-sayhibtn.html" style="border: none; width: 100%; height: 2.5em; overflow: hidden;"></iframe>

<small>You can explore this code in <i>.guides/demos/events-sayhibtn.html</i></small>