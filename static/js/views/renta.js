Blockbuster.Views.Renta = Backbone.View.extend({
	template: _.template($("#renta").html()),
	el: ".contenido",

	initialize: function(){
		
	},

	render: function(){
		this.$el.html(this.template());
		return this;
	}

})