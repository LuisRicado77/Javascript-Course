class App{

	constructor(nombre, descargas, estrellas, tamaño){
		this.nombre = nombre;
		this.descargas = descargas;
		this.estrellas = estrellas;
		this.tamaño = tamaño;
		this.iniciada = false;
		this.instalada = false;
	}


	instalar(){
		if(this.instalada == false){
			this.instalada = true;
			alert("App descargada");
		}
	}

	desinstalar(){
		if(this.instalada == true){
			this.instalada = false;
			alert("App desinstalada");
		}
	}

	iniciar(){
		if(this.instalada == true && this.iniciada == false){
			this.iniciada = true;
			alert("App iniciada");

		}
	}

	salir(){
		if(this.instalada == true && this.iniciada == true){
			this.iniciada = false;
			alert("Saliendo de la app")

		}		
	}
	appInfo(){
		return`
			nombre: <b>${this.nombre}</b></br>
			descargas: <b>${this.descargas}</b></br>
			estrellas: <b>${this.estrellas}</b></br>
			tamaño: <b>${this.tamaño}</b></br>
		`;

	}


}


app = new App("Free fire", "500.000", "3 estrellas", "540mb");
app2 = new App("facebook", "10.100", "4 estrellas", "2Gb");
app3 = new App("instagram", "500", "5 estrellas", "200mb");
app4 = new App("tuister", "1.000", "2.5 estrellas", "1Gb");
app5 = new App("firefoz", "150.000", "3.7 estrellas", "500mb");
app6 = new App("excel", "12", "4.8 estrellas", "400mb");

/*app.instalar();
app.desinstalar();
app.iniciar();
app.salir();*/

document.write(
	`
		${app.appInfo()}</br>
		${app2.appInfo()}</br>
		${app3.appInfo()}</br>
		${app4.appInfo()}</br>
		${app5.appInfo()}</br>
		${app6.appInfo()}</br>

	`
	);
