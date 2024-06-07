class producto{
	static contadorProductos = 0;

	construtor(nombre,precio){
		this.idProducto = ++Producto.contadorProductos;
		this.nombre = nombre;
		this.precio = precio;
	}

	get idProducto(){
		return this.idProducto;
	}

	get nombre(){
		return this.nombre;
	}

	set nombre(nombre){
		this.nombre = nombre;
	}

	get precio(){
		return this.precio;
	}

	set precio(precio){
		this.precio = precio;
	}

	toString(){
		return `idProducto: ${this.idProducto}, \n, nombre: ${this.nombre}, \n precio: ${this.precio} <br>`;
	}
}


let  producto1 = new producto('pantalon',2000);
let  producto2 = new producto('sueter',3000);


producto1.toString();
producto2.toString();

document.write(producto1.toString());
document.write(producto2.toString());


console.log(producto1.toString());
console.log(producto2.toString());


