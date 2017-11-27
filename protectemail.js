/*require jquery library*/
$(function(){
	$('a[href^="mailto:"]').on('click', function(e){
	  var email = $(this).attr('href').replace('mailto:', '');
	  // submit action to server here.
	  alert(email);
	});
	// if($('a').length>0){
	// 	alert('có thẻ a');
	// }
});
