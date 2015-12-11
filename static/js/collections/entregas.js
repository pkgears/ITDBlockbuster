Blockbuster.Collections.Entregas = Backbone.Collection.extend({
	model: Blockbuster.Models.Entrega,

	initialize: function(){
		this.loadEntregas();
	},

	loadEntregas: function (){
		var self = this;
		return $.getJSON("static/json/rentas.json").then(function(data){
			self.jsonData = data;
			for (var id in data){
				if(data.hasOwnProperty([id])){
					self.addEntrega(id,data[id]);
				}
			}
		});
	},

	addEntrega: function(id,entregas){
		allEntregas.add(new Blockbuster.Models.Entrega({
			id:id,
			id_renta:entregas.id_renta,
			id_cliente:entregas.id_cliente,
			id_pelicula:entregas.id_pelicula,
			titulo:entregas.titulo,
			fecha_renta:entregas.fecha_renta,
			fecha_entrega:entregas.fecha_entrega,
			entregada:entregas.entregada
		}));
	}
})