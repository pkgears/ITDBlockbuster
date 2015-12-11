Blockbuster.Views.Generos = Backbone.View.extend({
	template: _.template($("#optionsGeneros").html()),
	el: "<option>",
	initialize: function(){

	},
	
	render: function(modelo){
		this.$el.html(this.template(modelo.toJSON()));
		return this;
	}
})