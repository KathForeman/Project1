$(document).ready(
	function() {
		/* toggle navSideBar on hover */
	$('#menu-icon').toggle(
		function() {
			$('.navSide').fadeIn(600);
		}, //show on submenu click
		
		function() {
			$('.navSide').fadeOut(600);
	}); // end toggle
}); //end ready