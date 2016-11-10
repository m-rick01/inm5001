/**
 * @author Johnny Tsheke
 */

$(document).ready(function() {
        $('#visionneuse').css("display", "none");
	$('#ex1').eq(0).jstree();
	$("#ex1 li").on("click", "a", function() {
		//attachement traitement evénement click à la balise a
		//voir http://api.jquery.com/on/
                if(($(this).hasClass('lien_visio'))) {
                     console.log("cliqued!!");
                    var url_lien = ($(this).attr('href'));
                    $("#visionneuse").attr("src", url_lien);
                    $('#visionneuse').css("display", "block");
                }
               
                
	});
}); 
