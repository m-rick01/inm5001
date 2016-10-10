/**
 * @author Johnny Tsheke
 */

$(document).ready(function() {
	$('div').eq(0).jstree();
	$("#ex1 li").on("click", "a", function() {
		//attachement traitement evénement click à la balise a
		//voir http://api.jquery.com/on/
		document.location.href = this;
	});
}); 
