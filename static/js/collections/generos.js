Blockbuster.Collections.Generos = Backbone.Collection.extend({
	model: Blockbuster.Models.Genero,

	initialize: function (){
		this.loadGeneros();
	},

	loadGeneros: function (){
		var self = this;
		return $.getJSON("static/json/generos.json").then(function(data){
			self.jsonData = data;
			for (var id in data){
				if(data.hasOwnProperty([id])){
					self.addGenero(id,data[id]);
				}
			}
		});
	},

	addGenero: function(id,generos){
		allGeneros.add(new Blockbuster.Models.Genero({
			id:id,
			genero:generos.genero
		}));
	}

})