import web
import json

class nuevoCliente:
	def POST(self):
		i = web.input()
		db = web.database(dbn="mysql", user="blockbuster", pw="tapw2014", db="blockbuster")
		db.insert("clientes", id_cliente="", nombre=i.nombre, apellido=i.apellidos, direccion=i.direccion, email=i.email, telefono=i.telefono)
		results = db.query("SELECT max(id_cliente) as ultimo FROM clientes")
		cliente = str(results[0].ultimo)
		
		#crear cliente.json
		clientes = db.select("clientes")
		cliente_row = clientes.list()
		file_cliente=open('static/json/clientes.json','w')
		json.dump(cliente_row,file_cliente)
		file_cliente.close()

		raise web.seeother("/#consulta_clientes?cliente=cliente_true&nuevo="+cliente)
