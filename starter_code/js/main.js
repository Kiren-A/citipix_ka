$(function(){

// click event listener on #submit-btn
	$("#submit-btn").on("click", function (event){
	event.preventDefault()

//store user input in var city
	var city = $("#city-type").val();
	

//if input matc"hes a new york with various ways of input
	if (city === "nyc" || city === "new york" || city === "new york city"){
//link city to url display city back-image
	$("body").attr("class", "nyc");



//if input matches other various ways of input for cities
	}else if (city === "san francisco" || city === "sf" || city === "bay area"){
	$("body").attr("class", "sf");

	}else if (city === "los angeles" || city === "la" || city === "lax"){
	$("body").attr("class", "la");

	}else if (city === "austin" || city === "atx"){
	$("body").attr("class", "austin");

	}else if (city === "sydney" || city === "syd")
	$("body").attr("class", "sydney");
	});

// enter code to upper/lower case the input characters
	$("input").on("keyup", function(){
    this.value = this.value.toLowerCase();

	});



	});