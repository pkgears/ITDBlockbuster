window.onload=(confirmacion)

function confirmacion(){
	var si =$.getURLParam("confirm_renta");
	if(si=="renta_true"){
		var cliente = $.getURLParam("cliente");
		alert("Se realizo la renta correctamente");
		window.location="/";
	}
	if(si=="false"){
		alert("No se pudo realizar la renta correctamente");
		window.location="/";
	}

	si=$.getURLParam("recibirMovie");
	if(si=="true"){
		alert("Se recibio la película correctamente")
		window.location="/##consulta_clientes";
	}

	si =$.getURLParam("addMovie");
	if(si=="true"){
		alert("Se cargo la pelicula correctamente");
		window.location="/";
	}

	si = $.getURLParam("updateMovie")
	if(si=="true"){
		var movie = $.getURLParam("id");
		alert("Se actualizo la pelicula "+movie+" correctamente");
		window.location="/";
	}
	si =$.getURLParam("cliente");
	if(si=="cliente_true"){
		var cliente = $.getURLParam("nuevo");
		//window.location=("/#consulta_clientes");
		alert("Se agregó un cliente nuevo con ID "+cliente)
		$('.id_campo').val(cliente);
		//$('.BuscarCliente').click();
		window.location="/";
	}

}