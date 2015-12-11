Blockbuster.Views.formConsultaClientesRentas = Backbone.View.extend({
	template: _.template($('#formConsultaClientesRentas').html()),
	el: "<tr>",
	className: "entregarCliente",

	initialize: function(){

	},

	render: function(){
		this.$el.html(this.template());
		return this;
	}
})