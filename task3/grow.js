function grow(){
	var rows = document.getElementById('rows').value;
	var columns = document.getElementById('columns').value;
	var garden = document.getElementById('garden');
	var table = document.createElement('table');

	// delete prev img
	if(garden.hasChildNodes()){
		garden.removeChild(garden.childNodes[0]);
	}

	//create row
	for(var i=0;i<rows;i++){
		var tr = document.createElement('tr');
		//create column
		for(var j=0;j<columns;j++){
			var td = document.createElement('td');
			var img = document.createElement('img');
			if(Math.floor(Math.random()*3) == 0){
				img.src = 'img/daffodil.png'
			}else{
				img.src = 'img/rose.png';
			}
			//put col and rows
			td.appendChild(img);
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
	garden.appendChild(table);
}