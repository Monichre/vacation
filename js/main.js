$(document).ready(function() {
	$(".result-header").fadeIn(3000);
	$(".result-header").fadeOut(3000);
	$(".result-header").fadeIn(3000);
	$(".result-header").fadeOut(3000);
	$(".result-header").fadeIn(3000);
	$(".result-header").fadeOut(3000);
	$(".result-header").fadeIn(3000);

	$("#name").keydown(function (){
		$(".keydown").fadeIn(2000);
	
		
	});
	console.log("im working");
	 $(".btn").click(function(event) {
	 	 
  	
  	  
  	// variables NAME, AGE, CRIMINAL, ILLNESS, INCOME, GENDER//

    var age = parseInt($("input#age").val());
    var name = $("input#name").val();
    var gender = $("select#gender").val();
    var mentalIllness = $("select#mental-illness").val();
    var income = parseInt($("select#income").val());
    var criminalHistory = $("select#criminal-history").val();

  

  	$(".name").text(name);
  	$('.app-complete').show();
  	$('.income').text("$" + (income.toString()));
  	$('.mental-illness').text(mentalIllness);
  	$('.criminal-history').text(criminalHistory);
  	$('.gender').text(gender);
  	$('.placement').show();

     event.preventDefault(); 
  });
});