Blockbuster.Views.ConsultaClienteDatos = Backbone.View.extend({
	template: _.template($('#consultaClienteDatos').html()),
	el: '.contenido',

	initialize: function(){

	},

	render: function(modelo){
		this.$el.html(this.template(modelo.toJSON()));
		return this;
	}
})