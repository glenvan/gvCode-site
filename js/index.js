$(document).ready(function(){
	$('.product-info').hide();
	
	$('#pac-icon, #pac-header').click(function(){
			$('#pac-info').slideToggle(300, 'swing');
	});
	
	$('a.pac-screens').fancybox({'padding': 0, 'showNavArrows': true});
	
	$('p, .product-section').hover(
		function(){
			$(this).toggleClass('glowy');
		},
		function(){
			$(this).removeClass('glowy');
		});
});
