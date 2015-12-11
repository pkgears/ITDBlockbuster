Blockbuster.Views.ConsultaMovie = Backbone.View.extend({
	template: _.template($("#consultaMovie").html()),
	el: ".contenido",

	initialize: function(){

	},

	events:{
		"click .BuscarPelicula" : "buscar"
	},

	buscar: function(){
		var movie = parseInt($('.id_campo').val());
		if(!isNaN(movie)){
			window.location="#consulta_movie/"+movie;
		}else{
			$('.id_campo').css("border-color","red");
		}
	},

	render: function(modelo){
		this.$el.html(this.template(modelo.toJSON()));
		return this;
	}
})