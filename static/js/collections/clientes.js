Blockbuster.Collections.Clientes = Backbone.Collection.extend({
	model: Blockbuster.Models.Cliente,

	initialize: function (){
		this.loadClientes();
	},

	loadClientes: function (){
		var self = this;
		return $.getJSON("static/json/clientes.json").then(function(data){
			self.jsonData = data;
			for (var id in data){
				if(data.hasOwnProperty([id])){
					self.addCliente(id,data[id]);
				}
			}
		});
	},

	addCliente: function(id,clientes){
		allClientes.add(new Blockbuster.Models.Cliente({
			id:id,
			id_cliente:clientes.id_cliente,
			nombre:clientes.nombre,
			apellido:clientes.apellido,
			direccion: clientes.direccion,
			email:clientes.email,
			telefono: clientes.telefono
		}));
	}

})