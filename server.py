
import web
import json
from index import index
from nuevoCliente import nuevoCliente
from renta import renta
from insertPelicula import insertPelicula
from entregar import entregar
from logout import logout
from actualizarPelicula import actualizarPelicula

urls = (
	"/", 					"index",
	"/insertCliente",		"nuevoCliente",
	"/insertRenta",			"renta",
	"/entregar",			"entregar",
	"/insertPelicula", 		"insertPelicula",
	"/actualizarPelicula",	"actualizarPelicula",
	"/logout",				"logout"
	)

class Application(web.application):
    def run(self, port=1234, *middleware):
        func = self.wsgifunc(*middleware)
        return web.httpserver.runsimple(func,('0.0.0.0',port))


if __name__ == "__main__":
    app = Application(urls, globals())
    app.run()