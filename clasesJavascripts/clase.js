
class Animal{
	constructor(especie, edad, color){
		this.especie = especie;
		this.edad = edad;
		this.color = color; 
		this.info = `Soy ${this.especie} tengo ${this.edad} años y 
		soy de color ${this.color}`+ "<br>";
	}


	verInfo(){
		document.write(this.info);
	}

}


class Perro extends Animal{
	constructor(especie, edad, color, raza){
		super(especie, edad, color);
		this.raza = raza;
	}
	set setRaza(newName){
		this.raza = newName;
	}
	get getRaza(){
		return this.raza;
	}
}

const perro = new Perro("perro", 15, "verde" , "pitbull");
const pajaro = new Animal("perico", 12, "amarillo");
const gato = new Animal("gato", 2, "negro");

perro.setRaza = "doberman";
document.write(perro.getRaza);

/*document.write(perro.info + "<br/>");
document.write(pajaro.info + "<br/>");
document.write(gato.info + "<br/>");*/

