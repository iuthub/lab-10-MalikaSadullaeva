window.onload = function(){

	var cont = document.getElementById('container');

	for(var i=0;i<10;i++){
		for(var j=0;j<10;j++){
			var div = document.createElement('div');
			div.classList.add('block');
			div.style.top = i*25 + 'px';
			div.style.left = j*25 + 'px';

			div.onmouseover = function(){
				this.style.zIndex = '-10';
			}

			cont.appendChild(div);
		}
	}
}