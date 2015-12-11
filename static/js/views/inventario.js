Blockbuster.Views.Inventario = Backbone.View.extend({
	template: _.template($('#inventario').html()),
	el: ".contenido",

	initialize: function(){

	},

	render: function(){
		this.$el.html(this.template());
		return this;
	}

})