/*let Arraypc1{
	nombre: "luisPc",
	procesador: "inter I7",
	ram: "8GB",
	espacio: "500GB"
}*/


array1 = ["luis", "marcela", "carlos"];
array2 = ["pedro", array1, "carlota", "marxos"];

forCentral:
for(let array in array2){
	if(array == 1){
		for(let array of array1){
			
			document.write(array + "<br>");
			continue forCentral;

		}

	}else{
		document.write(array2[array] + "<br>");
	}
}



