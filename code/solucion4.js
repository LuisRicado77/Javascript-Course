const obtenerInformacion = (materia) =>{
	materias = {
		fisica: ["hernandez","jesus", "maria","jesus","leidis"],
		programacion:["rodriguez","marlon", "carlos", "jesus"],
		logica: ["dalto","lidia", "jesus", "jairo", "mateo"],
		quimica:["sergiolopez","luis","marcos","juan", "jesus"]
	}

	if(materias[materia] !== undefined){
		return [materias[materia],materia,materias];
	}else{
		return materias
	}

}

const mostrarInfo = (materia) =>{
	let info = obtenerInformacion(materia);

if(info !== false ){
	let profesor = obtenerInformacion(materia)[0][0];

	
	let alumnos = obtenerInformacion(materia)[0];
	alumnos.shift();
	document.write(`El profesor de <b> ${info[1]}</b> es: <b style = "color:red"> ${profesor}</b><br>
					Los alumnos son: <b style="color:blue">${alumnos}</b><br><br>

		`);
}
}


mostrarInfo("logica");
mostrarInfo("programacion");
mostrarInfo("fisica");
mostrarInfo("quimica");


const cantidadAlumnos = (nombre) =>{
	let informacion = obtenerInformacion();
	let clasespresentes = [];
	let clases = [];
	let count = 0;

	for(info in informacion){
		//document.write(info+"<br>");
		if(informacion[info].includes(nombre)){
			count++;
			//clasespresentes.push[" "+info];
			//document.write("esta tomando " + clasespresentes);
			clases.push(" "+info);
			

		}
	}
	return `<b style ='color:blue'>${nombre}</b> esta en <b>${count} clases</b><br>
	Esta cursando las clases: <b style = "color:green">${clases}</b><br><br>` ;
}
document.write(cantidadAlumnos("jesus"));
document.write(cantidadAlumnos("leidis"));
