//EM CINZA ESTÁ A PARTE 
//DO CÓDIGO HTML QUE 
//NÃO É NECESSÁRIA NO
//ARQUIVO DE EXTENSÃO
//*.js

/*<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
	<title></title>
	Ver funções no código fonte
</head>
<body>
<!-- 1-Criar um arquivo com extensão *.js e tipar as funções na mesma; -->
<script type="text/javascript">*/
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
/*</script>
</body>
</body>
</html>*/