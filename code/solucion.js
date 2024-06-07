class Celular{
	constructor(color,peso,tamaño,rdc,ram){
		this.color = color;
		this.peso = peso;
		this.tamaño = tamaño;
		this.rdc = rdc;
		this.ram = ram;
		this.encendido = false;
	}


	presionarBotonEncendido(){	
		if(this.encendido == false){
			alert("Encendiendo celular");
			this.encendido = true;
		}else{
			alert("Apagando celular");
			this.encendido = false;
		}
	}
	

	reiniciar(){
		alert("Reiniciando celular");
	}

	tomarFoto(){
		alert(`foto tomada con una resolución de ${this.rdc}`);
	}
	grabarVideo(){
		alert(`Grabando video en ${this.rdc}`);		
	}

	mobileInfo(){

		return`
		color: <b>${this.color}</b></br>
		peso: <b>${this.peso}</b><br>
		tamaño: <b>${this.tamaño}</b></br>
		resolución: <b>${this.rdc}</b></br>
		ram: <b>${this.ram}</b></br>
		`;
	}

}


class CelularAltagama extends Celular{

	constructor(color,peso,tamaño,rdc,ram,rdce){		
		super(color,peso,tamaño,rdc,ram);
		this.resolucionDepantallaExtra = rdce;
	}

	grabarVideoLento(){
		alert("Estas grabando en camara lenta");
	}

	reconocimientoFacial(){
		alert("Vamos a iniciar el reconocimiento Facial");
	}
	infoAltagama(){
		 return super.mobileInfo() + `resolucion camara Extra: <b> ${this.resolucionDepantallaExtra}</b> <br>`;
	}

}

celular1 = new CelularAltagama("rojo", "15 kg", "10'","50px","2Gb","409px");
celular2 = new CelularAltagama("gris", "10 kg", "1800' ","60px","6Gb", "45px");
celular3 = new CelularAltagama("verde", "20 kg", "1892'","40px","4Gb", "70px");


/*celular1.presionarBotonEncendido();
celular1.tomarFoto();
celular1.grabarVideo();
celular1.reiniciar();
celular1.presionarBotonEncendido();*/

document.write(`
	
	${celular1.infoAltagama()} <br>
	${celular2.infoAltagama()} <br>
	${celular3.infoAltagama()} 
	`);
