contador = 1;
nueva_clase='lista'+contador;

function oneMore(){
	//$(".add").append('<th><input name="articulo"type="text" pattern="[0-9]" required></th><th><input name="fecha" type="date" required></th><!--<th><input name="precio" type="text" class="costo" required>--></th><td><span id="borrame " class="icon-close" onclick="deleteOne(this)" ></span></td>');
	$(".add").append('<th><input name="articulo'+contador+'"type="text" pattern="[0-9]"></th><th><input name="fecha'+contador+'"type="date"></th></th><td><span id="borrame " class="icon-close" onclick="deleteOne(this)" ></span></td>');
	nueva_clase='lista'+contador;
	$(".add").removeClass('add').addClass(nueva_clase);
	var nuevo = $('<tr/>', {'class':'add'});
	$(nuevo).insertAfter('.'+nueva_clase);
	contador++;
	veces = parseInt($("#veces").val())+1;
	$("#veces").val(veces);
	if(contador>10){
		$('.icon-plus').hidden();
		alert("Unicamente se permite un maximo de 10 rentas por cliente")
	}
	else{
		$('.icon-plus').show();
	}
};

function deleteOne(me){
	var padre = $(me).parents('tr');
	padre.remove();
	veces = $("#veces").val()-1;
	$("#veces").val(veces);
}
