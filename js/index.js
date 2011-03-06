
$(document).ready(function(){
	//$('#site-name').animate({bottom: '0.5em'}, 1000, 'swing');
	//$('#header').delay(500).slideDown(1000, 'swing');
	$('#pac-icon, #pac-header').click(
		function(){
			$('#pac-info').slideToggle(300, 'swing');
		});
});
