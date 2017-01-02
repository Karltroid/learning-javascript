// break			Terminates a switch or a loop
// continue			Jumps out of a loop and starts at the top
// debugger			Stops the execution of JavaScript, and calls (if available) the debugging function
// do ... while		Executes a block of statements, and repeats the block, while a condition is true
// for				Marks a block of statements to be executed, as long as a condition is true
// function			Declares a function
// if ... else		Marks a block of statements to be executed, depending on a condition
// return			Exits a function
// switch			Marks a block of statements to be executed, depending on different cases
// try ... catch	Implements error handling to a block of statements
// var				Declares a variable

// HTML events
// onchange			An HTML element has been changed
// onclick			The user clicks an HTML element
// onmouseover		The user moves the mouse over an HTML element
// onmouseout		The user moves the mouse away from an HTML element
// onkeydown		The user pushes a keyboard key
// onload			The browser has finished loading the page

// Random Extra Info:
// Writing into an alert box, using window.alert().
// Writing into the HTML output using document.write().
// Writing into an HTML element, using innerHTML.
// Writing into the browser console, using console.log().
// Javascript Numbers - numbers can be written with or without decimals
// Strings - text written within double or single quotes -- ex. "test" or 'test' -- document.getElementById("demo").innerHTML = 'test';
// *Javascript is case sensitive*
// Hyphens(-) are not allowed in JavaScript Identifiers, they are reserved for subtractions.
// multiple statements on one line are allowed by using semicolons(;) -- ex. a=5; b=6; c=a+b;
// javascript ignores white space -- ex. x=7 is the same as x = 7

	function time() // #1
	{
		document.getElementById('time').innerHTML = Date();
	}

	function textChange() // #2
	{
		document.getElementById('textchange').innerHTML = 'This is the changed content!';
	}

	function lightOn() // #3
	{
		document.getElementById('light').src='images/index/lightbulb-on.png';
	}

	function lightOff() // #4
	{
		document.getElementById('light').src='images/index/lightbulb-off.png';
	}

	function styleChange() // #5
	{
		document.getElementById('stylechange').style.fontSize='35px';
	}

	function hidingElement() // #6
	{
		document.getElementById('hidingelement').style.display='none';
	}

	function showingElement() // #7
	{
		document.getElementById('showingelement').style.display='inline';
	}

	function windowAlert() // #8
	{
		window.alert('This is a test alert message!');
	}

	function htmlReplacement() // #10
	{
		document.write('<!DOCTYPE html><html><head><title>error!</title><link rel="stylesheet" type="text/css" href="css/index/styles.css" /></head><body><div class="Header"><b>learning</b> javascript</div><div class="body"><h2><b>I told you!</b></h2><br><font color="green">"press F5"</font></div></body></html>');
		//to edit only a element do .getElementById("ID").innerHTML = message;
	}