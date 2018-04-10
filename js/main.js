
// selecionar todos os elementos da classe paciente
var vPacientes = document.querySelectorAll(".paciente");

getValues();

function getValues(){
	
	for (i = 0; i < vPacientes.length; i++) {

		tdPeso = vPacientes[i].querySelector(".info-peso");
		peso = tdPeso.textContent;
    
 		tdAltura = vPacientes[i].querySelector(".info-altura");
		altura = tdAltura.textContent;

		tdGordura = vPacientes[i].querySelector(".info-gordura");
		gordura = tdGordura.textContent;

		tdImc = vPacientes[i].querySelector(".info-imc");
		imc = peso/(altura*altura)
		imc = parseFloat(imc.toFixed(2));

    tdResult = vPacientes[i].querySelector(".info-result");
    
		if (peso <= 1 || peso > 300) {
      
      tdImc.textContent = "Peso Inválido";
      tdResult.style.backgroundColor = "red";
    
    }else if (altura < 1 || altura > 3.00) {

			tdImc.textContent = "Altura Inválida"
			tdResult.style.backgroundColor = "red";

    }else{
    	tdImc.textContent = imc;
    }

		if(tdImc.textContent == "Peso Inválido"  || tdImc.textContent == "Altura Inválida" ){
    
      tdResult.style.backgroundColor = "blue"; 
      tdResult.textContent = "Indefinido";
		
		}else{
		 	
		 	if (imc < 18.5) {

         tdResult.style.backgroundColor = "red";
         tdResult.textContent = "Abaixo do peso";
      }

      else if (imc >= 18.5 && imc < 25) {
        tdResult.style.backgroundColor = "green";
		  	tdResult.textContent = "Peso normal";
		 	}

		 	else if (imc >= 25 && imc < 30) {
        tdResult.style.backgroundColor = "orange";
		 		tdResult.textContent = "Acima do peso";
		 	}

		 	else{
		 	  tdResult.style.backgroundColor = "red";
		 	  tdResult.textContent = "Obeso";
		 	}
    }
	}
}


function getRowPeso(element) {
	p = element.closest('tr').rowIndex -1;
	//alert(p);
	value = prompt("Informe um valor para peso: ");
	if (value == null) {
		 value = vPacientes[p].querySelector(".info-peso").textContent;
	}
	vPacientes[p].querySelector(".info-peso").innerHTML = value;
	getValues();
}

function getRowNome(element) {
	p = element.closest('tr').rowIndex -1;
	//alert(p);
	value = prompt("Informe um novo nome: ");
	if (value == null) {
		 value = vPacientes[p].querySelector(".info-nome").textContent;
	}
	vPacientes[p].querySelector(".info-nome").innerHTML = value;
	getValues();
}

function getRowAltura(element) {
	p = element.closest('tr').rowIndex -1;
	//alert(p);
	value = prompt("Informe uma nova altura: ");
	if (value == null) {
		 value = vPacientes[p].querySelector(".info-altura").textContent;
	}
	vPacientes[p].querySelector(".info-altura").innerHTML = value;
	getValues(); 
}

