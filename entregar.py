import web

class entregar:
	def POST(self):
		db = web.database(dbn="mysql", user="blockbuster", pw="tapw2014", db="blockbuster")
		i = web.input()
		db.update("rentas", entregada="1", where="id_renta="+i.id_renta)
		rs=db.query("select disponibles from peliculas where id_pelicula="+i.id_pelicula)
		disponible=rs[0].disponibles+1
		db.update("peliculas", disponibles=disponible, where="id_pelicula="+i.id_pelicula)
		web.seeother("/?recibirMovie=true&id="+i.id_pelicula)