/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
    var resultado ;

	 sueldo = document.getElementById("sueldo").value;
	 resultado = document.getElementById("resultado").value;

	 sueldo = parseInt(sueldo);
	 resultado = parseInt(resultado);

	resultado = sueldo  * 0.01 ;

	 alert("El resultado es " + resultado);
	
}
