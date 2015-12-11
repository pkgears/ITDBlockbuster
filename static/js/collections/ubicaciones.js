Blockbuster.Collections.Ubicaciones = Backbone.Collection.extend({
	model: Blockbuster.Models.Ubicacion,

	initialize: function (){
		this.loadUbicaciones();
	},

	loadUbicaciones: function (){
		var self = this;
		return $.getJSON("static/json/ubicacion.json").then(function(data){
			self.jsonData = data;
			for (var id in data){
				if(data.hasOwnProperty([id])){
					self.addUbicacion(id,data[id]);
				}
			}
		});
	},

	addUbicacion: function(id,ubicaciones){
		allUbicaciones.add(new Blockbuster.Models.Ubicacion({
			id:id,
			ubicacion:ubicaciones.ubicacion
		}));
	}
})