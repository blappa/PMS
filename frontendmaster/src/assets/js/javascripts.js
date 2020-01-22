$(document).ready(function(){

	var current_fs, next_fs, previous_fs; //fieldsets
	var opacity;
	
	$(".next").click(function(){
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//Add Class Active
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show();
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
	step: function(now) {
	// for making fielset appear animation
	opacity = 1 - now;
	
	current_fs.css({
	'display': 'none',
	'position': 'relative'
	});
	next_fs.css({'opacity': opacity});
	},
	duration: 600
	});
	});
	
	$(".previous").click(function(){
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//Remove class active
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show();
	
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
	step: function(now) {
	// for making fielset appear animation
	opacity = 1 - now;
	
	current_fs.css({
	'display': 'none',
	'position': 'relative'
	});
	previous_fs.css({'opacity': opacity});
	},
	duration: 600
	});
	});
	
	$('.radio-group .radio').click(function(){
	$(this).parent().find('.radio').removeClass('selected');
	$(this).addClass('selected');
	});
	
	$(".submit").click(function(){
	return false;
	})
	
	});


function count(doc, date, tagId){
	// Set the date we're counting down to
	var countDownDate = new Date(date).getTime();
	// Update the count down every 1 second
	var x = setInterval(function() {
	  // Get today's date and time
	  var now = new Date().getTime();
	  // Find the distance between now and the count down date
	  var distance = countDownDate - now;

	  // Time calculations for days, hours, minutes and seconds
	  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	  // If the count down is finished, write some text
	 if (days >= 0 && days <= 14) {
		  // Display the result in the element with id="demo"
		  //clearInterval(x);
		  doc.getElementById(tagId).innerHTML = 
			  days + "d " 
			+ hours + "h "
		    + minutes + "m " 
		    + seconds + "s ";
	  }else if (days > 14) {
		    clearInterval(x);
		    doc.getElementById(tagId).innerHTML = "PENDING";
	  }
	 }, 1000);
}
