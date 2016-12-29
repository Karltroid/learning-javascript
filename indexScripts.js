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