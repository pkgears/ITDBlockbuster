Blockbuster.Views.inventarioRentasTabla = Backbone.View.extend({
	template: _.template($('#inventarioRentasTabla').html()),
	el: "<tr/>",

	initialize: function(){

	},

	render: function(modelo){
		this.$el.html(this.template(modelo.toJSON()));
		return this;
	}

})