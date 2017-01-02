// $ = jquery
$(document).ready(function(){ // telling to start running the js code when the page loads
// CODE vvvvv

// Fade in effect
$('div.body').fadeIn(1000);

	// BASIC SELECTORS
	$('p.basicselector').css('border', '4px solid red'); // in this example we are editing the css of any <p> with a class of basicselector.

	// BASIC ANIMATIONS
	$('button.basicanimation').click(function(){

		$('.box:eq(0)').slideUp().slideDown().slideUp().slideDown().slideUp().slideDown().slideUp().slideDown();
		$('.box:eq(1)').animate({height: '200px', width: '200px'}, 900).animate({height: '42px', width: '42px'}, 900);
		$('.box:eq(2)').css('position', 'absolute').css('left', '49%').animate({top:'3000px'}, 1000);

	});
	// INDEX FILTER
	//$('span:first').css('background-color', 'green');
	//$('span:last').css('background-color', 'green');
	//$('span:gt(2)').css('background-color', 'green'); // counts from 0
	//$('span:lt(2)').css('background-color', 'green');
	$('span:eq(2)').css('background-color', 'green');

	// RELATIONSHIP FILTERS


	// ATTRIBUTE FILTERS


// CODE ^^^^^
});