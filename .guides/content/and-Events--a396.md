Whenever you do something on a web page, you may cause an *event*. For example, if you:
* Move the mouse across the screen
* Click on anything
* Select some text
* Press a key
Any of the above actions will cause an *event*.

In web pages you create, you can call a *function* whenever an *event* happens. For example, let's say I have a function called `sayHi` on my page that will pop up a box that says "Hello!":

```javascript
function sayHi() {
   alert('Hello there!');
}
```

And let's say I have a button on my page:

```html
<button id="sayHiBtn">Say Hi</button>
```

I can tell the page to "listen" for when someone clicks that button, and when it happens, to call my `sayHi` function.

```javascript
var sayHiBtn = document.getElementById('sayHiBtn');
sayHiBtn.addEventListener('click', sayHi);
```

Try it out here:

<iframe src=".guides/demos/events-sayhibtn.html" style="border: none; width: 100%; height: 3em;"></iframe>

<small>You can see this code in <i>.guides/demos/events-sayhibtn.html</i></small>