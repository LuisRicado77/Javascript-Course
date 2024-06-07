let cantidad = prompt("Ingrese la cantidad de estudiantes");
let TotalEstudiantes = [];


for(let i = 0; i< cantidad; i++){
	TotalEstudiantes[i] = [prompt("Nombre del estudiante " +(i+1)),0]
}

const tomarAsistencia = (nombre,p) =>{
	let presencia = prompt(nombre);

	if(presencia == "p" || presencia =="P"){
		TotalEstudiantes[p][1]++;
	}
}

for(i = 0; i< 30; i++){
	for(estudiante in TotalEstudiantes){

		tomarAsistencia(TotalEstudiantes[estudiante][0],estudiante);
	}
}

for(estudiante in TotalEstudiantes){
	let resultado = `${TotalEstudiantes[estudiante][0]}: <br>
	__________Presentes: <b>${TotalEstudiantes[estudiante][1]}</b> <br>
	__________Ausencias: <b>${30 - TotalEstudiantes[estudiante][1]}	</b>`;
	if(30 - TotalEstudiantes[estudiante][1]>18){
		resultado += "<b style='color:red '>REPORBADO POR INASISTENCIA </b><br><br>";

	}else{
		resultado+= "<br><br>";
	}
	document.write(resultado);
}




