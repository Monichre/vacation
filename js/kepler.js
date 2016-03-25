$(document).ready(function() {
	$.ajax({
	  method: "GET",
	  url: "../index.html",
	})
	.success(function( response ) {
	   // Code here 
	   	$('.income').text("$" + (income.toString()));
	  	$('.mental-illness').text(mentalIllness);
	  	$('.criminal-history').text(criminalHistory);
	  	$('.gender').text(gender);
	});
});