import web
import json
from hashlib import md5

class index:
	def GET(self):
		render = web.template.render("templates")
		cookies = web.cookies()
		username = cookies.get("webusername")
		if username:
			self.cargar()
			return render.index()
		else:
			return render.login()
	
	def POST(self):
		render = web.template.render("templates")
		db = web.database(dbn="mysql", user="blockbuster", pw="tapw2014", db="blockbuster")
		i = web.input()
		q= db.select("usuarios",what="password", where="usuario=$username", vars={"username":i.username})
		pw=i.password
		if(pw==list(q)[0]["password"]):
			pw = md5(pw).hexdigest();
			print pw
			web.setcookie("webusername",i.username, expires=360)
			web.setcookie("webpassword",pw, expires=360)
			self.cargar()
			return render.index()
		else:
			return render.login()
		
	
	def cargar(self):
		db = web.database(dbn="mysql", user="blockbuster", pw="tapw2014", db="blockbuster")
		#consultas
		cliente = db.select("clientes")
		rentas = db.query("SELECT rentas.id_renta,rentas.id_cliente,rentas.id_pelicula,fecha_renta,fecha_entrega,titulo,entregada FROM `rentas`,peliculas WHERE rentas.id_pelicula=peliculas.id_pelicula")
		peliculas = db.select("peliculas")
		ubicaciones = db.select("ubicacion")
		generos = db.select ("generos", order="genero DESC")
		#crear cliente.json
		cliente_row = cliente.list()
		file_cliente=open('static/json/clientes.json','w')
		json.dump(cliente_row,file_cliente)
		file_cliente.close()
		db = web.database(dbn="mysql", user="blockbuster", pw="tapw2014", db="blockbuster")
		#crear rentas.json
		rentas_row = rentas.list()
		file_rentas=open('static/json/rentas.json','w')
		json.dump(rentas_row,file_rentas)
		file_rentas.close()
		#crear peliculas.json
		peliculas_row = peliculas.list()
		file_peliculas = open('static/json/peliculas.json','w')
		json.dump(peliculas_row,file_peliculas)
		#crear ubicacion.json
		ubicaciones_row = ubicaciones.list()
		file_ubicaciones = open('static/json/ubicacion.json', 'w')
		json.dump(ubicaciones_row,file_ubicaciones)
		file_ubicaciones.close()
		#crear generos.json
		generos_row = generos.list()
		file_generos = open('static/json/generos.json','w')
		json.dump(generos_row,file_generos)
		file_generos.close()