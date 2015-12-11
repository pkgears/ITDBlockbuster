Blockbuster.Views.RentasTable = Backbone.View.extend({
	template: _.template($('#consultaClienteRentas').html()),
	el: "<tr>",
	initialize: function(){

	},

	render: function(modelo){
		this.$el.html(this.template(modelo.toJSON()));
		return this;
	}
})