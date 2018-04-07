//alert("teste1");
//console.log("teste2");
//console.log(document);

var vPacientes = document.querySelectorAll(".paciente");


	for (i = 0; i < vPacientes.length; i++) {

// var paciente = vPacientes[i];
/*		var tdPeso = vPacientes[i].querySelector(".info-peso");
		var peso = tdPeso.textContent;
 console.log(paciente);
}*/
	
		var tdPeso = vPacientes[i].querySelector(".info-peso");
		var peso = tdPeso.textContent;

		var tdAltura = vPacientes[i].querySelector(".info-altura");
		var altura = tdAltura.textContent;

		var tdGordura = vPacientes[i].querySelector(".info-gordura");
		var gordura = tdGordura.textContent;

		var tdImc = vPacientes[i].querySelector(".info-imc");
		var imc = peso / (altura*altura);

		var tdResult = vPacientes[i].querySelector(".info-result")

		if (peso <= 1 || peso > 300) {
			tdImc.textContent = "Peso Inválido";
		}else if (altura < 1 || altura > 3.00) {
			tdImc.textContent = "Altura Inválida"
		}else tdImc.textContent = imc;

		if(tdImc.textContent == "Peso Inválido"  || tdImc.textContent == "Altura Inválida" ){
		 	tdResult.textContent = "Indefinido"
		}else {
		 	if (imc < 18.5) {
		 		tdResult.textContent = "Abaixo do peso"
		  	}else if (imc >= 18.5 && imc < 25) {
		  		tdResult.textContent = "Peso normal"
		 	}else if (imc >= 25 && imc < 30) {
		 		tdResult.textContent = "Acima do peso"
		 	}else tdResult.textContent = "Obeso"
		}

	}
