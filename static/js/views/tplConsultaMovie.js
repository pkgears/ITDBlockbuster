Blockbuster.Views.tplConsultaMovie = Backbone.View.extend({
	template: _.template($("#tpl_consultaMovie").html()),
	el: ".contenido",

	initialize: function(){

	},

	events:{
		"click .BuscarPelicula" : "buscar"
	},

	buscar: function(){
		var movie = parseInt($('.id_campo_pelicula').val());
		if(!isNaN(movie)){
			window.location="#consulta_movie/"+movie;
		}else{
			$('.id_campo_pelicula').css("border-color","red");
		}
	},

	render: function(){
		this.$el.html(this.template());
		return this;
	}

})