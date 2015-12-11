Blockbuster.Views.EntregasTable = Backbone.View.extend({
	template: _.template($('#consultaClienteEntregas').html()),
	el:"<tr/>",
	initialize: function(){

	},

	render: function(modelo){
		this.$el.html(this.template(modelo.toJSON()));
		return this;
	}
})