/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
    var resultado ;

	 importe = document.getElementById("importe").value;
	 resultado = document.getElementById("resultado").value;

	 importe = parseInt(importe);
	 resultado = parseInt(resultado);

	resultado = importe  * 0.75  ;

	 alert("El resultado es " + resultado);
}
