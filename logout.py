import web

class logout:
	def GET(self):
		render = web.template.render("templates")
		web.setcookie("webusername","",expires=-1)
		web.setcookie("webpassword","",expires=-1)
		raise web.seeother("/")