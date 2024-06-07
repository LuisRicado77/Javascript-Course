



let numeros = [5,2,4,9,1];

const maximunAndMinimun = (numeros) =>{

	let sumTotal = sumatoria(numeros);
	let sum1 = sumTotal-numeros[0];
	let sum2 = sumTotal-numeros[1];
	let sum3 = sumTotal-numeros[2];
	let sum4 = sumTotal-numeros[3];
	let sum5 = sumTotal-numeros[4];

	document.write(
		`<br/>
			primer resultado = ${sum1} <br/>
			segundo resultado = ${sum2}<br/>
			tercero resultado = ${sum3}<br/>
			cuarto resultado = ${sum4}<br/>
			quinto resultado = ${sum5}

		`);

	let result = numMayorandMenor(sum1,sum2,sum3,sum4,sum5);

	//resultado = numMayorandMenor(sum1,sum2,sum3,sum4,sum5);

	//document.write(resultado);


	return result;	

}


const sumatoria = (numeros) =>{
	let sumatoria = 0;
	for(let i = 0; i < numeros.length; i++){
		//document.write(numeros[i] + "<br/>");
		sumatoria = sumatoria +  numeros[i];
	}
	document.write("sumatoria total: "+sumatoria+" <br/>");
	return sumatoria;

}

//resultado = sumatoria(numeros);
//document.write("<br/>"+resultado);	

const numMayorandMenor =(num1,num2,num3,num4,num5) =>{
	let numeros = [num1,num2,num3,num4,num5];
	let numMayor = 0;
	let numMenor = 0;

	for(let i = 0; i< numeros.length; i++){
		
		if(numMayor < numeros[i]){
			numMayor = numeros[i];
		}
	}

	numMenor = numMayor;

	for(let i = 0; i< numeros.length; i++){
		
		if(numMenor > numeros[i]){
			//document.write("Se ejecuto el if");
			numMenor = numeros[i];
		}
	}
	//document.write("<br/>"+	numMayor+" ");
	//document.write(numMenor+"<br/>");

	return `La sumatoria mayor es ${numMayor} y la sumatoria menor es ${numMenor}`;
}







let solution = maximunAndMinimun(numeros);


document.write("<br/> <br/> "+solution);


