import web

class insertPelicula:
	def POST(self):
		i = web.input()
		db = web.database(dbn="mysql", user="blockbuster", pw="tapw2014", db="blockbuster")
		db.insert("peliculas", id_pelicula="", titulo=i.titulo, sinopsis=i.sinopsis, genero=i.genero, duracion=i.duracion, company=i.company, director=i.director, actores=i.actores, ubicacion=i.ubicacion, existencia=i.cantidad, disponibles=i.cantidad)
		web.seeother("/#add_movie?addMovie=true")