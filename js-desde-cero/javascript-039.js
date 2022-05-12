function revealMessage() {
	document.getElementById("hiddenMessage").style.display = 'block';
}

function countDown() {
	var currentVal = document.getElementById("countDownButton").innerHTML;
	var newVal = 0;
	if (currentVal > 0) {
		newVal = currentVal - 1;
	}
	
	document.getElementById("countDownButton").innerHTML = newVal;
}

function retornarData()
{
	var data;
	data = new Date();
	var cadeia = data.getDate()+'/'+(data.getMonth()+1)+'/'+data.getYear();
	return cadeia;
}

function retornarHora()
{
	var data;
	data=new Date();
	var cadeia=data.getHours()+':'+data.getMinutes()+':'+data.getSeconds();
	return cadeia;
}