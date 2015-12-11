Blockbuster.Views.inventarioTable = Backbone.View.extend({
	template: _.template($('#inventarioTabla').html()),
	el: "<tr/>",

	initialize: function(){

	},

	render: function(modelo){
		this.$el.html(this.template(modelo.toJSON()));
		return this;
	}

})