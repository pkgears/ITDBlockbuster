Blockbuster.Views.ConsultaCliente = Backbone.View.extend({
	template: _.template($('#consultaCliente').html()),
	el: ".contenido",

	initialize: function(){

	},

	events:{
		"click .BuscarCliente"	:"buscar"
	},

	buscar:function(){
		var cliente = parseInt($('.id_campo').val());
		if(!isNaN(cliente)){
			window.location="#consultarCliente/"+cliente;
		}else{
			$('.id_campo').css("border-color","red");
		}
	},

	render: function(){
		this.$el.html(this.template());
		return this;
	}

})