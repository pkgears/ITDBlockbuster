Blockbuster.Views.newCliente = Backbone.View.extend({
	template: _.template($("#newCliente").html()),
	el: ".contenido",

	initialize: function(){

	},

	render: function(){
		this.$el.html(this.template());
		return this;
	}
});
