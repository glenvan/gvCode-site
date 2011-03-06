$(document).ready(function(){
	$('.product-info').hide();
	
	$('#pac-icon, #pac-header').click(
		function(){
			$('#pac-info').slideToggle(300, 'swing');
		});
});
