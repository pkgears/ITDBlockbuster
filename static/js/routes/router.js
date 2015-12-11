Blockbuster.Router = Backbone.Router.extend({

	routes:{
		""							:"index",
		"clientes"					:"clientes",
		"clientes_new"				:"newclientes",
		"consulta_clientes"			:"consultarCliente",
		"consultarCliente/:id"		:"consultarOneCliente",
		"clientes_renta"			:"clientesRenta",
		"catalogos"					:"catalogo",
		"add_movie"					:"add_movie",
		"consulta_movie"			:"consulta_movie",
		"consulta_movie/:id"		:"consulta_OneMovie",
		"inventario"				:"inventario",
		"allRentas"					:"todasRentas"
	},

	initialize: function(){
		this.jsonData={},
		allClientes= new Blockbuster.Collections.Clientes(),
		allGeneros = new Blockbuster.Collections.Generos(),
		allUbicaciones = new Blockbuster.Collections.Ubicaciones(),
		allMovies = new Blockbuster.Collections.Peliculas(),
		allRentas = new Blockbuster.Collections.Rentas(),
		allEntregas = new Blockbuster.Collections.Entregas(),
		Backbone.history.start();
	},

	index: function(){
		var info = new Blockbuster.Views.Index();
		$(".contenido").append(info.render(user).el);
	},

	clientes: function(){
		$(".conteido").html("");
		var clientes = new Blockbuster.Views.Clientes();
		$('.clientes').append(clientes.render().el);
	},

	newclientes: function(){
		$(".conteido").html("");
		var nuevoCliente = new Blockbuster.Views.newCliente();
		$('.contenido').append(nuevoCliente.render().el);
	},

	consultarCliente: function(){
		$(".contenido").html("");
		var consultaClienteView = new Blockbuster.Views.ConsultaCliente();
		$('.contenido').append(consultaClienteView.render().el);
	},

	consultarOneCliente: function(id){
		$(".contenido").html("");
		var num = parseInt(id);
		allClientes.forEach(function(modelo){
			var consultaDatos = new Blockbuster.Views.ConsultaClienteDatos();
			if(modelo.get("id_cliente")===num){
				$('.contenido').append(consultaDatos.render(modelo).el);
			}	
		});
		allRentas.forEach(function(modelo){
			var consultaRentas = new Blockbuster.Views.RentasTable();
			if(modelo.get("id_cliente")===num && modelo.get("entregada")===0){
				$('#rentas').append(consultaRentas.render(modelo).el);
			}
		});
		allRentas.forEach(function(modelo){
			var consultaEntregas = new Blockbuster.Views.EntregasTable();
			if(modelo.get("id_cliente")===num && modelo.get("entregada")==1){
				$('#entregas').append(consultaEntregas.render(modelo).el);
			}
		});
	},
	
	clientesRenta: function(){
		$(".contenido").html("");
		var renta = new Blockbuster.Views.Renta();
		$(".contenido").append(renta.render().el);
	},

	catalogo: function(){
		$(".contenido").html("");
		var menu_catalogo = new Blockbuster.Views.Catalogo();
		$(".contenido").append(menu_catalogo.render().el);
		
	},

	add_movie: function(){
		$(".contenido").html("");
		var add_movieView = new Blockbuster.Views.AddMovie();
		$(".contenido").append(add_movieView.render().el);
		allGeneros.forEach(function(modelo){
			var generosView = new Blockbuster.Views.Generos();
			$("#generosList").append(generosView.render(modelo).el);
		});
		allUbicaciones.forEach(function(modelo){
			var ubicacionesView = new Blockbuster.Views.UbicacionView();
			$("#ubicacionList").append(ubicacionesView.render(modelo).el);
		});
	},

	consulta_movie: function(){
		$(".contenido").html("");
		var tplconsulta = new Blockbuster.Views.tplConsultaMovie();
		$(".contenido").append(tplconsulta.render().el);
		allGeneros.forEach(function(modelo){
			var generosView = new Blockbuster.Views.Generos();
			$("#generosList").append(generosView.render(modelo).el);
		});
		allUbicaciones.forEach(function(modelo){
			var ubicacionesView = new Blockbuster.Views.UbicacionView();
			$("#ubicacionList").append(ubicacionesView.render(modelo).el);
		});
	},

	consulta_OneMovie:function(id){
		$(".contenido").html("");
		allMovies.loadMovie();
		var this_genero;
		var this_ubicacion
		var consulta = new Blockbuster.Views.ConsultaMovie();
		allMovies.forEach(function(modelo){
			if(modelo.get("id_pelicula")==id){
				$(".contenido").append(consulta.render(modelo).el);
				this_genero=modelo.get("genero");
			}
		});
		allGeneros.forEach(function(modelo){
			var generosView = new Blockbuster.Views.Generos();
			if(modelo.get("genero")!=this_genero){
				$("#generosList").append(generosView.render(modelo).el);
			}
		});
		allUbicaciones.forEach(function(modelo){
			var ubicacionesView = new Blockbuster.Views.UbicacionView();
			if(modelo.get("ubicacion")!=this_ubicacion){
				$("#ubicacionList").append(ubicacionesView.render(modelo).el);
			}
		});
	},

	inventario: function(){
		$(".contenido").html("");
		var inventario = new Blockbuster.Views.Inventario();
		$('.contenido').append(inventario.render().el);
		allMovies.forEach(function(modelo){
			var tableInv = new Blockbuster.Views.inventarioTable();
			$('#tablaInventario').append(tableInv.render(modelo).el);
		});
	},

	todasRentas: function(){
		$(".contenido").html("");
		var inventario = new Blockbuster.Views.inventarioRentas();
		$('.contenido').append(inventario.render().el);
		allRentas.forEach(function(modelo){
			if(modelo.get("entregada")==0){
				var tableInv = new Blockbuster.Views.inventarioRentasTabla();
				$('#tablaInventario').append(tableInv.render(modelo).el);				
			}	
		});
	}
});


var user = new Blockbuster.Models.Usuario();
Blockbuster.application = new Blockbuster.Router();
