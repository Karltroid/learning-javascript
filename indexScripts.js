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
		document.getElementById('light').src='lightbulb-on.png';
	}

	function lightOff() // #4
	{
		document.getElementById('light').src='lightbulb-off.png';
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

	// Writing into an alert box, using window.alert().
	// Writing into the HTML output using document.write().
	// Writing into an HTML element, using innerHTML.
	// Writing into the browser console, using console.log().

	function windowAlert() // #8
	{
		window.alert('This is a test alert message!');
	}

	function documentWrite()
	{
		document.write('This is a message using document.write!' '5+5 = '(5+5));
	}