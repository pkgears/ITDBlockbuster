Blockbuster.Views.AddMovie = Backbone.View.extend({
	template: _.template($("#addMovie").html()),
	el: ".contenido",

	initialize: function(){

	},

	render: function(){
		this.$el.html(this.template());
		return this;
	}
});
