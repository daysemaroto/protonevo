const inputs = document.querySelectorAll(".input");

function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}

//Validaciones de campos

function validacionCamposVacios(){
	let parent = this.parentNode.parentNode.parentNode;
	if(this.value != ""){
		$(parent).children(".alerta-error").hide();
	}
	else{
		$(parent).children(".alerta-error").show();
	}
}

// function validacionDireccion(){
// 	let parent = document.getElementById("direccion").parentNode.parentNode.parentNode;
// 	let direccion = document.getElementById("direccion").value;

// 	if(direccion != ""){
// 		$(parent).children("#alerta-error-direccion").hide();
// 		return true;
// 	}
// 	else{
// 		$(parent).children("#alerta-error-direccion").show();
// 		return false;
// 	}
// }


function validacionContraseña(){
	let parent = document.getElementById("inputRepPassword").parentNode.parentNode.parentNode;

	let pass = document.getElementById("inputPassword").value;
	let pass_retry = document.getElementById("inputRepPassword").value;

	if(pass!=""&&pass==pass_retry){
		$(parent).children("#alerta-error-reply").hide();
		return true;
	}
	else{
		$(parent).children("#alerta-error-reply").show();
		return false;
	}
}

function validacionCorreo(){
	let parent = document.getElementById("inputEmail").parentNode.parentNode.parentNode;
	let correo = document.getElementById("inputEmail").value;

	re=/^.+@.+\..*$/
	if(!re.exec(correo)){
		$(parent).children("#alerta-error-email").show();
		return false;
	}
	else{
		$(parent).children("#alerta-error-email").hide();
		return true;
	}
}

function validacionNombre(){
	let parent =  document.getElementById("inputNombre").parentNode.parentNode.parentNode;
	let valor = document.getElementById("inputNombre").value;

	re=/^([a-zA-ZÀ-ÿ\u00f1\u00d1]+\s*)+$/
	if(!re.exec(valor)){
		$(parent).children("#alerta-error-nombre").show();
		return false;
	}
	else{
		$(parent).children("#alerta-error-nombre").hide();
		return true;
	}
}


function validacionApellido(){
	let parent = document.getElementById("inputApellido").parentNode.parentNode.parentNode;
	let valor = document.getElementById("inputApellido").value;

	re=/^([a-zA-ZÀ-ÿ\u00f1\u00d1]+\s*)+$/
	if(!re.exec(valor)){
		$(parent).children("#alerta-error-apellido").show();
		return false;
	}
	else{
		$(parent).children("#alerta-error-apellido").hide();
		return true;
	}
}

function validacionTelefono(){
	let parent = document.getElementById("inputTelefono").parentNode.parentNode.parentNode;
	let valor = document.getElementById("inputTelefono").value;

	re=/^[0-9]+$/
	if(!re.exec(valor)){
		$(parent).children("#alerta-error-telefono").show();
		return false;
	}
	else{
		$(parent).children("#alerta-error-telefono").hide();
		return true;
	}
}


function validarContraseñaLong(){
	let parent = document.getElementById("inputEmail").parentNode.parentNode.parentNode;
	let pass = document.getElementById("inputEmail").value;

	if(pass.length < 6){
		$(parent).children("#alerta-error-long").show();
		return false;
	}
	else{
		$(parent).children("#alerta-error-long").hide();
		return true;
	}
}

function validarTerminos(){
	let terminos = document.getElementById("checkbox-terminos").checked;
	let mensaje = document.getElementById("contenedor-terminos");
	if(!terminos){
		mensaje.style.color="red";
		return false;
	}
	else{
		mensaje.style.color="black";
		return true;
	}
}

function validarTodosCampos(){
	var val1 =  validacionNombre()
	var val2 = validacionApellido();
	var val3 = validacionCorreo();
	var val4 = validacionTelefono();
	// var val5 = validacionDireccion();
	var val6 = validarContraseñaLong();
	var val7 = validacionContraseña();
	// var val8 = validarTerminos();

	return val1&&val2&&val3&&val4&&val6&&val7;
}

//Agregando validaciones a los elementos

inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
//	input.addEventListener("blur", validacionCamposVacios);
});

document.getElementById("inputPassword").addEventListener("blur",validarContraseñaLong);
document.getElementById("inputRepPassword").addEventListener("blur",validacionContraseña);
document.getElementById("inputEmail").addEventListener("blur",validacionCorreo);
document.getElementById("inputNombre").addEventListener("blur",validacionNombre);
document.getElementById("inputApellido").addEventListener("blur",validacionApellido);
document.getElementById("inputTelefono").addEventListener("blur",validacionTelefono);
// document.getElementById("direccion").addEventListener("blur",validacionDireccion);
// document.getElementById("checkbox-terminos").addEventListener("click",validarTerminos);
//document.getElementById("bton-registrar").addEventListener("mouseover",validarTodosCampos);
