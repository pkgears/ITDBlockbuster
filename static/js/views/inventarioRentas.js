Blockbuster.Views.inventarioRentas = Backbone.View.extend({
	template: _.template($('#inventarioRentas').html()),
	el: ".contenido",

	initialize: function(){

	},

	render: function(){
		this.$el.html(this.template());
		return this;
	}

})