Blockbuster.Views.Clientes = Backbone.View.extend({
	template: _.template($("#clientes").html()),
	el: ".contenido",

	initialize: function(){},

	render: function(){
		this.$el.html(this.template());
		return this;
	}

})