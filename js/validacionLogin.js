function validacionCorreoLogin(){
	let parent = document.getElementById("inputEmailLogin").parentNode.parentNode;
	let correo = document.getElementById("inputEmailLogin").value;
	console.log(correo);

	re=/^.+@.+\..*$/
	if(!re.exec(correo)){
		$(parent).children("#alerta-error-email-login").css("visibility","visible");
		return false;
	}
	else{
		$(parent).children("#alerta-error-email-login").css("visibility","hidden");
		return true;
	}
}
