
var vPacientes = document.querySelectorAll(".paciente");


	for (i = 0; i < 4; i++) {

		tdPeso = vPacientes[i].querySelector(".info-peso");
		peso = tdPeso.textContent;
    
    tdAltura = vPacientes[i].querySelector(".info-altura");
		altura = tdAltura.textContent;

		tdGordura = vPacientes[i].querySelector(".info-gordura");
		gordura = tdGordura.textContent;

		tdImc = vPacientes[i].querySelector(".info-imc");
		imc = peso / (altura*altura);

    tdResult = vPacientes[i].querySelector(".info-result")

		if (peso <= 1 || peso > 300) {
      tdImc.textContent = "Peso Inválido";
    }
    else if (altura < 1 || altura > 3.00) {
			tdImc.textContent = "Altura Inválida"
    }else tdImc.textContent = imc;

		if(tdImc.textContent == "Peso Inválido"  || tdImc.textContent == "Altura Inválida" ){
      tdResult.style.backgroundColor = "blue"; 
      tdResult.textContent = "Indefinido";
		}else {
		 	if (imc < 18.5) {
         tdResult.style.backgroundColor = "red";
         tdResult.textContent = "Abaixo do peso";

      }else if (imc >= 18.5 && imc < 25) {
        tdResult.style.backgroundColor = "green";
		  	 tdResult.textContent = "Peso normal";
		 	}else if (imc >= 25 && imc < 30) {
        tdResult.style.backgroundColor = "orange";
		 		 tdResult.textContent = "Acima do peso";
		 	}else tdResult.textContent = "Obeso";
    }
}

  
