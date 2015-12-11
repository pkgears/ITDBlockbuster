import web
import time
import json

class renta:
	def POST(self):
		i=web.input();
		hoy= time.strftime("%d-%m-%y")
		db = web.database(dbn="mysql", user="blockbuster", pw="tapw2014", db="blockbuster")
		listo=0
		try:
			# while listo < i.veces:
			# 	rs=db.query("select existencia from peliculas where id_pelicula="+i.articulo[listo])
			# 	existencia = rs[0].existencia
			# 	con = str(existencia)
			# 	if(existencia>0):
			# 		disponibles=str(existencia-1)
			# 		db.query("UPDATE peliculas set disponibles="+disponibles+" where id_pelicula="+i.articulo[listo])
			# 		#raise web.seeother('/'+con)
			# 		db.insert("rentas", id_renta="", id_cliente=i.id_cliente, id_pelicula=i.articulo[listo], fecha_renta=hoy, fecha_entrega=i.fecha, entregada="0")
			# 	listo= listo+1
			#consultar existencia
			resulst=db.query("select existencia from peliculas where id_pelicula="+i.articulo0)
			existencia = resulst[0].existencia
			if(existencia>0):
				disponibles=str(existencia-1)
				db.query("UPDATE peliculas set disponibles="+disponibles+" where id_pelicula="+i.articulo0)
				db.insert("rentas", id_renta="", id_cliente=i.id_cliente, id_pelicula=i.articulo0, fecha_renta=hoy, fecha_entrega=i.fecha0, entregada="")
				print ("HOLA")
				listo= 1;
				#consultar existencia
			resulst=db.query("select existencia from peliculas where id_pelicula="+i.articulo1)
			existencia = resulst[0].existencia
			if(existencia>0):
				disponibles=str(existencia-1)
				db.query("UPDATE peliculas set disponibles="+disponibles+" where id_pelicula="+i.articulo1)
				db.insert("rentas", id_renta="", id_cliente=i.id_cliente, id_pelicula=i.articulo1, fecha_renta=hoy, fecha_entrega=i.fecha1, entregada="")
				print ("HOLA")
				listo= 1;
			#consultar existencia
			resulst=db.query("select existencia from peliculas where id_pelicula="+i.articulo2)
			existencia = resulst[0].existencia
			if(existencia>0):
				disponibles=str(existencia-1)
				db.query("UPDATE peliculas set disponibles="+disponibles+" where id_pelicula="+i.articulo2)
				db.insert("rentas", id_renta="", id_cliente=i.id_cliente, id_pelicula=i.articulo2, fecha_renta=hoy, fecha_entrega=i.fecha2, entregada="")
				print ("HOLA")
				listo= 1;
			#consultar existencia
			resulst=db.query("select existencia from peliculas where id_pelicula="+i.articulo3)
			existencia = resulst[0].existencia
			if(existencia>0):
				disponibles=str(existencia-1)
				db.query("UPDATE peliculas set disponibles="+disponibles+" where id_pelicula="+i.articulo3)
				db.insert("rentas", id_renta="", id_cliente=i.id_cliente, id_pelicula=i.articulo3, fecha_renta=hoy, fecha_entrega=i.fecha3, entregada="")
				print ("HOLA")
				listo= 1;
			#consultar existencia
			resulst=db.query("select existencia from peliculas where id_pelicula="+i.articulo4)
			existencia = resulst[0].existencia
			if(existencia>0):
				disponibles=str(existencia-1)
				db.query("UPDATE peliculas set disponibles="+disponibles+" where id_pelicula="+i.articulo4)
				db.insert("rentas", id_renta="", id_cliente=i.id_cliente, id_pelicula=i.articulo4, fecha_renta=hoy, fecha_entrega=i.fecha4, entregada="")
				print ("HOLA")
				listo= 1;
			#consultar existencia
			resulst=db.query("select existencia from peliculas where id_pelicula="+i.articulo5)
			existencia = resulst[0].existencia
			if(existencia>0):
				disponibles=str(existencia-1)
				db.query("UPDATE peliculas set disponibles="+disponibles+" where id_pelicula="+i.articulo5)
				db.insert("rentas", id_renta="", id_cliente=i.id_cliente, id_pelicula=i.articulo5, fecha_renta=hoy, fecha_entrega=i.fecha5, entregada="")
				print ("HOLA")
				listo= 1;
			#consultar existencia
			resulst=db.query("select existencia from peliculas where id_pelicula="+i.articulo6)
			existencia = resulst[0].existencia
			if(existencia>0):
				disponibles=str(existencia-1)
				db.query("UPDATE peliculas set disponibles="+disponibles+" where id_pelicula="+i.articulo6)
				db.insert("rentas", id_renta="", id_cliente=i.id_cliente, id_pelicula=i.articulo6, fecha_renta=hoy, fecha_entrega=i.fecha6, entregada="")
				print ("HOLA")
				listo= 1;
			#consultar existencia
			resulst=db.query("select existencia from peliculas where id_pelicula="+i.articulo7)
			existencia = resulst[0].existencia
			if(existencia>0):
				disponibles=str(existencia-1)
				db.query("UPDATE peliculas set disponibles="+disponibles+" where id_pelicula="+i.articulo7)
				db.insert("rentas", id_renta="", id_cliente=i.id_cliente, id_pelicula=i.articulo7, fecha_renta=hoy, fecha_entrega=i.fecha7, entregada="")
				print ("HOLA")
				listo= 1;
			#consultar existencia
			resulst=db.query("select existencia from peliculas where id_pelicula="+i.articulo8)
			existencia = resulst[0].existencia
			if(existencia>0):
				disponibles=str(existencia-1)
				db.query("UPDATE peliculas set disponibles="+disponibles+" where id_pelicula="+i.articulo8)
				db.insert("rentas", id_renta="", id_cliente=i.id_cliente, id_pelicula=i.articulo8, fecha_renta=hoy, fecha_entrega=i.fecha8, entregada="")
				print ("HOLA")
				listo= 1;
			#consultar existencia
			resulst=db.query("select existencia from peliculas where id_pelicula="+i.articulo9)
			existencia = resulst[0].existencia
			if(existencia>0):
				disponibles=str(existencia-1)
				db.query("UPDATE peliculas set disponibles="+disponibles+" where id_pelicula="+i.articulo9)
				db.insert("rentas", id_renta="", id_cliente=i.id_cliente, id_pelicula=i.articulo9, fecha_renta=hoy, fecha_entrega=i.fecha9, entregada="")
				print ("HOLA")
				listo= 1;
			#consultar existencia
			resulst=db.query("select existencia from peliculas where id_pelicula="+i.articulo10)
			existencia = resulst[0].existencia
			if(existencia>0):
				disponibles=str(existencia-1)
				db.query("UPDATE peliculas set disponibles="+disponibles+" where id_pelicula="+i.articulo10)
				db.insert("rentas", id_renta="", id_cliente=i.id_cliente, id_pelicula=i.articulo10, fecha_renta=hoy, fecha_entrega=i.fecha10, entregada="")
				print ("HOLA")
				listo= 1;
		except Exception, e:
			if listo==1:
				#crear rentas.json
				rentas = db.query("SELECT rentas.id_renta,rentas.id_cliente,rentas.id_pelicula,fecha_renta,fecha_entrega,titulo,entregada FROM `rentas`,peliculas WHERE rentas.id_pelicula=peliculas.id_pelicula")
				rentas_row = rentas.list()
				file_rentas=open('static/json/rentas.json','w')
				json.dump(rentas_row,file_rentas)
				file_rentas.close()
				raise web.seeother('/?confirm_renta=renta_true&cliente='+i.id_cliente)
			else:
				raise web.seeother('/#clientes_renta?confirm_renta=false')
