//second and first task
function calculate(){
	var w = document.getElementById("weight").value;
	var h = document.getElementById("height").value;
	var s = document.getElementById('score');
	var t = document.getElementById("type");
	var BMI = computeBMI(w, h);

	s.innerHTML = BMI;

	if(BMI<18){
		type.innerHTML = "Underweight";
	}else if(BMI<25){
		type.innerHTML = "Normal";
	}else if(BMI<30){
		type.innerHTML = "Overweight";
	}else{
		type.innerHTML = "Obese";
	}
}
function computeBMI(weight, height){
	var BMI = 703*weight/(height*height);
	return BMI;
}