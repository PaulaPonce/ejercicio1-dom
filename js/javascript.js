function mostrarEnlaces(){
	var enlaces = document.getElementsByTagName("a");
	document.getElementById("num_enlaces").innerHTML = "El total de enlaces es " + enlaces.length;	
}	
mostrarEnlaces();