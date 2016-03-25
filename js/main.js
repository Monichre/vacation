$(document).ready(function() {
	$(".result-header").fadeIn(3000);
	$(".result-header").fadeOut(3000);
	$(".result-header").fadeIn(3000);
	$(".result-header").fadeOut(3000);
	$(".result-header").fadeIn(3000);
	$(".result-header").fadeOut(3000);
	$(".result-header").fadeIn(3000);

	$("#name").keydown(function (){
		$(".keydown").slideDown(2000);
		$('.result-group').slideDown(2000);
	
		
	});
	console.log("im working");
	 $(".info").click(function(event) {
	 	 event.preventDefault(); 
  	  
  	// Global variables NAME, AGE, CRIMINAL, ILLNESS, INCOME, GENDER//

     age = parseInt($("input#age").val());
     name = $("input#name").val();
     gender = $("select#gender").val();
     mentalIllness = $("select#mental-illness").val();
     income = parseInt($("select#income").val());
     criminalHistory = $("select#criminal-history").val();

  

  	$(".name").text(name);
  	$('.app-complete').show();
  	$('.income').text("$" + (income.toString()));
  	$('.mental-illness').text(mentalIllness);
  	$('.criminal-history').text(criminalHistory);
  	$('.gender').text(gender);
  	$('.barcode').hide()
  	$('.keydown').hide();
  	$('.placement').show();
  	

     
  });
	$('.placement').click(function(event){
		event.preventDefault();
		$('.result-header').hide();
		//Placement conditionals for earth //
		if (mentalIllness === "yes" || criminalHistory === "yes"){
			
			$('#result').hide();
			$('.final').show();
			$(".result-planet").show();
			$(".earth").show();
		} else if ((age >= 25 && income > 40000) || ((gender === "female") && age < 25)){
			
			$('#result').hide();
			$('.final').show();
			$(".result-planet").show();
			$(".gliese").show();
		} else if (age < 25 && gender === "male"){
			$('#result').hide();
			$('.final').show();
			$(".result-planet").show();
			$(".result-planet").append("<p>ATTN: No males under 25</p>");
			$(".earth").show();
		}
		else {
			$('#result').hide();
			$('.final').show();
			$(".result-planet").show();
			$(".kepler").show();
		}

	});
});

// AN ATTEMPT AT USING HTTP GET //
