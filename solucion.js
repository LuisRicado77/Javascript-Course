
let name1 = "cofla";
let name2 = "pedro";
let name3 = "roberto";



	 function metodoHelados(dinero, name){

	 	let devolver = 0;
		if(dinero > 0.6 && dinero < 1){
			devolver = dinero-0.6;
			alert(name + " te alcanza para un helado de agua además te debo devolver " +devolver);
		}else if(dinero >= 1 && dinero < 1.6){
			devolver = dinero-1;
			alert(name + " te alcanza para un helado de cremaademás te debo devolver " +devolver);
		}else if(dinero >= 1.6 && dinero < 1.7){
			devolver = dinero-1.6;
			alert(name + " te alcanza para un helado de heladix además te debo devolver " +devolver);
		}else if(dinero >= 1.7 && dinero < 1.8){
			devolver = dinero-1.7;
			alert(name + "te alcanza para un helado de heladovich además te debo devolver " +devolver);
		}else if( dinero >= 1.8 && dinero < 2.9){
			devolver = dinero-1.8;
			alert(name + " te alcanza para un helado de helardo además te debo devolver " +devolver);
		}else if(dinero >= 2.9){
			devolver = dinero-2.9;
			alert(name + " te alcanza para un helado con confites o un pote de 1/4 KG además te debo devolver " +devolver);
		}
    }


let dineroRoberto = prompt("Ingresa tu dinero " + name3);
let dineroPedro = prompt("Ingresa tu dinero " +name2);
let dineroCofla = prompt("Ingresa tu dinero " +name1);

metodoHelados(dineroRoberto, name3);
metodoHelados(dineroPedro, name2);
metodoHelados(dineroCofla, name1);
