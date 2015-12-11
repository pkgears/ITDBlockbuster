Blockbuster.Views.Index = Backbone.View.extend({
	template: _.template($("#inicio").html()),
	el: ".contenido",

	initialize: function(){

	},

	render: function(modelo){
		this.$el.html(this.template(modelo.toJSON()));
		return this;
	}
});
