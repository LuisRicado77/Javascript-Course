
let Primero = false;

const ValidarCliente = (time) => {
	let edad = prompt("Cual es su edad?");
	if(edad > 18){
		if(time >= 2 && time < 7 && !Primero){
			alert("Usted es el Primero, adelante entre sin costo");
			Primero = true;
		}else{
			alert(`Entre, debe pagar ademas son las ${time}`);
		}

	}else{
		alert("usted es muy joven para entrar a la fiesta");
	}

}

ValidarCliente(15);
ValidarCliente(6);
ValidarCliente(21);
ValidarCliente(16);
ValidarCliente(3);
ValidarCliente(2);



