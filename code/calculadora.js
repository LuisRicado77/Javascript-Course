
document.write("funcionando");
class Calculadora{	

	constructor(){

	}

	sumar(num1,num2){
		return parseInt(num1)+parseInt(num2);
	}


	restar(num1,num2){
		return parseInt(num1)-parseInt(num2);
	}

	multiplicacion(num1,num2){
		return parseInt(num1)*parseInt(num2);
	}

	division(num1,num2){
		return parseInt(num1)/parseInt(num2);
	}

	potenciar(num,exp){
		return num**exp;
	}

	raizCuadrada(num){
		return Math.sqrt(num);
	}

	raizCubica(num){
		return Math.cbrt(num);
	}


}


const calculadora = new Calculadora();


alert("¿que operacion deseas ralizar?");
let operacion = prompt("1.Sumar, 2.Restar, 3.Multiplicar, 4.Dividir, 5.Potenciar, 6.Raiz cuadrada, 7.raiz cubica");

if(operacion==1){
	let num1 = prompt("Ingrese el primer dato");
	let num2 = prompt("Ingrese el segundo dato");
	let resultado =  calculadora.sumar(num1,num2);
	document.write("La suma es: "+ resultado);

}else if(operacion == 2){
	let num1 = prompt("Ingrese el primer dato");
	let num2 = prompt("Ingrese el segundo dato");
	let resultado = calculadora.restar(num1,num2);
	document.write("La resta es: "+ resultado);

}else if(operacion == 3){
	let num1 = prompt("Ingrese el primer dato");
	let num2 = prompt("Ingrese el segundo dato");
	let resultado = calculadora.multiplicacion(num1,num2);
	document.write("La multiplicacion es: "+ resultado);

}else if(operacion == 4){
	let num1 = prompt("Ingrese el primer dato");
	let num2 = prompt("Ingrese el segundo dato");
	let resultado = calculadora.division(num1,num2);
	document.write("La division es: "+ resultado);
	
}else if(operacion == 5){
	let num1 = prompt("Ingrese numero a potenciar");
	let num2 = prompt("Ingrese exponente");
	let resultado = calculadora.potenciar(num1,num2);
	document.write("El resultdo de la potenciacion es: "+ resultado);
	
}else if(operacion == 6){
	let num1 = prompt("Ingrese el numero para sacar la raiz cuadrada");
	
	let resultado = calculadora.raizCuadrada(num1);
	document.write("El resultado de la raiz cuadrada es: "+ resultado);
	
}else if(operacion == 7){
	let num1 = prompt("Ingrese el numero para sacar la raiz cubica");
	
	let resultado = calculadora.division(num1);
	document.write("La raiz cubica es: "+ resultado);
	
}else{

	alert("operacion desconocida");
}

