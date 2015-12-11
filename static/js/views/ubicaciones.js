Blockbuster.Views.UbicacionView = Backbone.View.extend({
	template: _.template($("#optionsUbicacion").html()),
	el: "<option>",
	initialize: function(){
		
	},

	render: function(modelo){
		this.$el.html(this.template(modelo.toJSON()));
		return this;
	}
})