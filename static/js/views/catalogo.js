Blockbuster.Views.Catalogo = Backbone.View.extend({
	template: _.template($("#catalogo").html()),
	el: ".contenido",

	initialize: function(){

	},

	render: function(){
		this.$el.html(this.template());
		return this;
	}
});
