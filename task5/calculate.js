function calculate(){
	var total = document.getElementById("amount").value;
	var dollars = null;
	var quaters = null;
	var dimes = null;
	var nickels = null;
	var pennies = null;
	var change = document.getElementById("change");
	var rem = null;

	dollars = Math.floor(total);
	rem = total - dollars;
	
	quaters = Math.floor(rest/0.25);
	rem = rem- quaters*0.25;

	dimes = Math.floor(rest/0.1);
	rem = rem - dimes*0.1;

	nickels = Math.floor(rest/0.05);
	rem = rem - nickels*0.05;

	pennies = Math.ceil(rest/0.01);

	change.innerHTML = dollars + " dollars ";
	change.innerHTML += quaters +" quaters ";
	change.innerHTML += dimes +" dimes ";
	change.innerHTML += nickels +" nickels ";
	change.innerHTML += pennies +" pennies ";
}	