function flip(){
	var img = document.getElementById("img");
	var head = document.getElementById('num_heads');
	var tail = document.getElementById('num_tails');
	var heads = head.innerHTML;
	var tails = tail.innerHTML; 

	if(Math.floor(Math.random()*2)==0){
		img.src = "img/head.png";
		heads++;
	}else{
		img.src = "img/tail.jpg";
		tails++;
	}

	head.innerHTML = heads;
	tail.innerHTML = tails;
}