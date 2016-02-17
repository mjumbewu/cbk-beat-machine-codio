By listing out instructions, you can get the computer to do just about anything. You can use a *function* to wrap up a set of instructions so that you can run them over and over again. A function is like a machine that takes some *input* and gives some *output*.

You could think of a recipe as a function where you put in some ingredients (*inputs*), mix them and cook them according to some directions (*instructions*), and get a cooked dish (*outputs*).

<img src=".guides/img/Recipes-are-like-functions.svg" title="Recipes are like functions" style="text-align: center; border: 1px solid silver;" width="75%">

## Making functions

To make a new function, start with the `function` keyword. Next you put the name of the function. The name should describe what the function does (don't put spaces in your function names!). Then, inside of parentheses (`()`), you list what the *inputs* to the function should be. Last, you use curly braces (`{}`) to wrap up the function's instructions. Often, one of these instructions will start with `return` to tell the function what the *output* needs to be.

```javascript
//       THE FUNCTION NAME      THE INPUTS
//          -----------    ---------------------
function    doSomething    (input1, input2, ...) {

    instruction1;   //  |
    instruction2;   //  | INSTRUCTIONS
    ...;            //  |
    
    return output;  //  | OUTPUT
}
```

Phew! That's a lot, but let's see some examples. Here's a function that takes two variables as inputs, adds them, and gives the sum as the output:

```javascript
function addValues(val1, val2) {
    var sum = val1 + val2;
    return sum;
}
```

Here's a function that takes a variable representing a person's name as the input, and gives a greeting as the output:

```javascript
function sayHello(name) {
    var greeting = 'Hello, ' + name + '!';
    return greeting;
}
```

As you can see in your HTML code, here you have one function named `playSound1`.

## Using functions

After you name a function, you can use it in other places. To call a function, you first use its name, and then in parentheses say what values it should use as inputs. For example you can the `addValues` function above like so:

```javascript
addValues(2, 3);  // Output will be 5
addValues(6, 4);  // Output will be 10
```

You can use variables as inputs too:

```javascript
var firstNumber = 5;
var secondNumber = 2;
addValues(firstNumber, secondNumber);  // What will the output be?
```
{Check It!|assessment}(fill-in-the-blanks-463567513)


We created a function for you called `playSound` (it's in *play-sound.js*) that takes an HTML element and a string as inputs. The `playSound1` function calls `playSound` and gives it our `sound1btn` and `sound1` variables in its inputs.