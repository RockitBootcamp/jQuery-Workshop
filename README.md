# jQuery Workshop

## Setup

Be sure to have students download and install Sublime Text Editor, any version is okay. Also have them download the code from GitHub:

- [Sublime Text Editor](http://www.sublimetext.com/3)
- https://github.com/RockitBootcamp/jQuery-Workshop

## Outline

The goal of the workshop is to create a message system similar to Twitter's "Direct Messages". Instructors should demonstrate the working code by substituting the `main.js` file for `solution.js` (in the `index.html` page) and then running the code.

## Instruction

### Introduction

Introduce the students to the HTML they will be working with and how we're including jQuery and our own main.js file from the HTML file. It might be nice to create some hard-coded messages (`<div class="message">`) to show how the new DOM will be created

Note that there are two types of messages that can be created:

```html
<div class="message other">message text goes here</div>
<div class="message self">message text goes here</div>
```

"Self" means messages that we created which will show up as blue. "Other" means messages that the other person has created which will show up green. Messages without `self` or `other` classes will be displayed with a white background and gray text. This way we can see we did something wrong.

### Document Ready

The `main.js` file has just enough code to setup jQuery's "Document Readiness". Briefly explain the concept but don't worry about getting into details of anonymous functions and DOM readiness.

### Functions (30 Mins)

The first goal of instruction is to explain functions. Create a function called `makeMessage()` and call it to show some output

```js
var makeMessage = function() {
	console.log('it was called');
}

makeMessage();
```

> Note that code examples in this document will exclude the "Document Rediness" anonymous function.

Further explain arguments and parameters as necessary.

### DOM Creation (30 mins)

Expand the function to create a `div` tag with a `message` class and append it to `.thread`. Be sure to explain:

- How to select something in the existing DOM
- How to call methods from what you selected (append in this case)
- How append can take a string of HTML to create new DOM

```js
var makeMessage = function() {

	$('thread').append('<div class="message self">Hello World</div>');
	
}

makeMessage();
```

### Better Dom Creation and function arguments (30 Mins)

Explain that by creating the new DOM this way, we can chain methods onto the new `div` and therefore it's easier to create something dynamic from our arguments. Be sure to explain:

- Function arguments in general
- Creating new DOM is different from selecting existing DOM
 - `$('<div>')` vs `$('div')`
- Method Chaining

```js
var makeMessage = function(message, who) {

	var html = $('<div>').addClass('message').addClass(who).text(message);

	$('thread').append(html);
	
}

makeMessage('Hello World', 'self');
```