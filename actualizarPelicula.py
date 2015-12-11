import web

class actualizarPelicula:
	def POST(self):
		i = web.input()
		nueva = int(i.existencia_nueva) - int(i.existencia)
		nuevo_disp = (int)(i.disponibles) + (nueva)
		db = web.database(dbn="mysql", user="blockbuster", pw="tapw2014", db="blockbuster")
		print nuevo_disp
		db.update("peliculas", titulo=i.titulo, sinopsis=i.sinopsis, genero=i.genero, duracion=i.duracion, company=i.company, director=i.director, actores=i.actores, ubicacion=i.ubicacion, existencia=i.existencia_nueva, disponibles=nuevo_disp, where="id_pelicula=$pelicula", vars={"pelicula":i.id_pelicula})
		web.seeother("/#add_movie?updateMovie=true&id="+i.id_pelicula)