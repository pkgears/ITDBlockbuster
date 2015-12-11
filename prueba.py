import json
import web

# db = web.database(dbn="mysql", user="blockbuster", pw="tapw2014", db="blockbuster")
# select = db.select("existencia")
# rows=select.list()
# for row in rows:
# 	print row.id_pelicula
# 	print row.existencia
# fh = open('d.txt','w')
# json.dump(rows,fh)
# fh.close()
db = web.database(dbn="mysql", user="blockbuster", pw="tapw2014", db="blockbuster")
select = db.select("peliculas", where="id_pelicula=1")
rows = select.list()
fh = open('static/json/peliculas.json','w')
json.dump(rows,fh)
fh.close()
