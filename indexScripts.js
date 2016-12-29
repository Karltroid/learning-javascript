	function time()
	{
		document.getElementById('time').innerHTML = Date();
	}

	function textChange()
	{
		document.getElementById('textchange').innerHTML = 'This is the changed content!';
	}

	function lightOn()
	{
		document.getElementById('light').src='lightbulb-on.png';
	}

	function lightOff()
	{
		document.getElementById('light').src='lightbulb-off.png';
	}

	function styleChange()
	{
		document.getElementById('stylechange').style.fontSize='35px';
	}

	function hidingElement()
	{
		document.getElementById('hidingelement').style.display='none';
	}

	function showingElement()
	{
		document.getElementById('showingelement').style.display='inline';
	}

	function textWithScripts()
	{
		document.getElementById("textwithscripts").innerHTML = "the script tag is where all javascript programming should take place!<br>javascript can be done in the body, head, or an external javascript file, url, or folder.";
	}