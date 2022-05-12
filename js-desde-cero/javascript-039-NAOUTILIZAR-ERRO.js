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