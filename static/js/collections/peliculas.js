Blockbuster.Collections.Peliculas = Backbone.Collection.extend({
	model: Blockbuster.Models.Pelicula,

	initialize:function(){
		this.loadMovie();
	},

	loadMovie: function(){
		var self = this;
		return $.getJSON("static/json/peliculas.json").then(function(data){
			self.jsonData = data;
			for (var id in data){
				if(data.hasOwnProperty([id])){
					self.addMovie(id,data[id]);
				}
			}
		});
	},

	addMovie: function(id,movies){
		allMovies.add(new Blockbuster.Models.Pelicula({
			id:id,
			id_pelicula: movies.id_pelicula,
			titulo:movies.titulo,
			sinopsis: movies.sinopsis,
			genero: movies.genero,
			duracion:movies.duracion,
			company:movies.company,
			director:movies.director,
			actores:movies.actores,
			ubicacion:movies.ubicacion,
			disponibles: movies.disponibles,
			existencia: movies.existencia
		}));
	}
})