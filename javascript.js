const buttonCalcTip = document.querySelector('#buttonCalcTip');

buttonCalcTip.addEventListener('click', ()=>{
	var final = "The following are missing: ";
	var topping = getToppings();
	var size = getSize();
	var addr = getAddress();
	var fname = getFName();
	var lname = getLName();
	var smth = false;
	if(topping==0){
		final += "topping";
		smth = true;
	}
	if(size==""){
		if(smth){
			final += ", size";
		}else{
			final += "size";
			smth = true;
		}
	}



	if(addr==""){
		if(smth){
			final+=", address";
		}else{
			final+="address";
			smth = true;
		}
	}
	
	if(fname==""){
		if(smth){
			final+=", first name";
		}else{
			final+="first name"; 
			smth = true;
		}
	}

	if(lname==""){
		if(smth){
			final+=", last name";
		}else{
			final += "last name";
			smth = true;
		}
	}
	

	
	if(smth){
		alert(final);
	}else{
		var pay = 0;
		if(size=="Large") pay+=4;
		if(size=="Medium") pay+=2;
		if(size=="Small") pay+=1;
		pay+=topping*0.25;
		var total = document.getElementById('total');
		alert("Your total amount to pay is: " + pay);
	}
});

function getToppings(){
	var top = document.getElementsByName('toppings');
	var count = 0;
	for( i = 0; i< top.length;i++){
		if(top[i].checked){
			count++;
		}
	}
	return count;
}

function getSize(){
	var size = document.getElementsByName('choice');

	for(i = 0;i<size.length;i++){
		if(size[i].checked){
			return size[i].value;
		}
	}
	return "";
}

function getAddress(){
	return document.getElementById('addrs').value;
}

function getLName(){
	return document.getElementById('lname').value;
}

function getFName(){
	return document.getElementById('fname').value;
}