function mostrarEnlace(){
			var enlaces = document.getElementsByTagName("a");
			document.getElementById("num_enlaces").innerHTML = enlaces.length;	
		}	
		mostrarEnlaces();