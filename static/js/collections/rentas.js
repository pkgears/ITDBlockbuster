Blockbuster.Collections.Rentas = Backbone.Collection.extend({
	model: Blockbuster.Models.Renta,

	initialize: function(){
		this.loadRentas();
	},

	loadRentas: function (){
		var self = this;
		return $.getJSON("static/json/rentas.json").then(function(data){
			self.jsonData = data;
			for (var id in data){
				if(data.hasOwnProperty([id])){
					self.addRenta(id,data[id]);
				}
			}
		});
	},

	addRenta: function(id,rentas){
		allRentas.add(new Blockbuster.Models.Renta({
			id:id,
			id_renta:rentas.id_renta,
			id_cliente:rentas.id_cliente,
			id_pelicula:rentas.id_pelicula,
			titulo:rentas.titulo,
			fecha_renta:rentas.fecha_renta,
			fecha_entrega:rentas.fecha_entrega,
			entregada:rentas.entregada
		}));
	}
})