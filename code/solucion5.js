materias = {
		fisica: ["hernandez","jesus", "maria","jesus","leidis"],
		programacion:["rodriguez","marlon", "carlos", "jesus"],
		logica: ["dalto","lidia", "jesus", "jairo", "mateo"],
		quimica:["sergiolopez","luis","marcos","juan", "jesus"]
	}


const inscribir = (alumno, materia) => {
	personas = materias[materia];
	if(personas.length >= 21){
		document.write(`${alumno} Usted no puede  inscribirse en ${materia} <br>`);
	}else{
		personas.push(alumno);
		if(materia == "fisica"){
			materias = {
				fisica: personas,
				programacion: materias['programacion'],
				logica: materias['logica'],
				quimica: materias['quimica']
			}
		}else if(materia  == 'programacion'){
			materias = {
				fisica: materias['fisica'],
				programacion: personas,
				logica: materias['logica'],
				quimica: materias['quimica']
			}
		}else if(materia == 'logica'){
			materias = {
				fisica: materias['fisica'],
				programacion: materias['programacion'],
				logica: personas,
				quimica: materias['quimica']
			}
		}else if(materia == 'quimica'){
			materias = {
				fisica: materias['fisica'],
				programacion: materias['programacion'],
				logica: materias['logica'],
				quimica: personas
			}
		}
		document.write(`Felicidades ${alumno} te has  inscrito a ${materia} correctamente. <br>`);
	}

}

document.write(materias['fisica'] +'<br>');


inscribir("maria", "fisica");
inscribir("carlos", "fisica");
inscribir("mariana", "fisica");
inscribir("marcela", "fisica");
inscribir("enique", "fisica");
inscribir("lola", "fisica");
inscribir("eliana", "fisica");
inscribir("cristian", "fisica");
inscribir("luis", "fisica");



document.write(materias['fisica'] +'<br>');