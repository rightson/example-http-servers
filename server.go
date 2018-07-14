package main

import (
	"github.com/kataras/iris"
)

var addr = iris.Addr("localhost:7000")

func main() {
	app := iris.New()
	app.RegisterView(iris.Django("./templates", ".html").Reload(true))
	app.Get("/", iris.Gzip, index)
	app.Get("/about", about)
	app.Run(addr)
}

func about(ctx iris.Context) {
	ctx.View("about.html")
}

func index(ctx iris.Context) {
	ctx.View("index.html")
}
