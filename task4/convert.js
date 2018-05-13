function convert(){

	//access input
	var input = document.getElementById('input').value;
	//check what user has choosed kg or lb
	var from = document.getElementById('from').value;
	var to = document.getElementById('to').value;
	var answer = document.getElementById("answer");

//convert
	if(from=="kg" && to=="lb"){
		//display
		answer.innerHTML = input*2.20462262;
	}else if(from=="lb" && to=="kg"){
		answer.innerHTML = input*0.45359237;
	}else{
		answer.innerHTML = input;
	}
}