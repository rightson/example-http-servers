all:
	@cat Makefile
koa:
	npx nodemon server.js

flask:
	venv/bin/gunicorn --reload --bind 0:8000 server:app

go:
	go run server.go

koa-deps:
	npm install koa koa-router koa-views nodemon

flask-deps:
	python3 -m venv venv
	venv/bin/python3 -m pip install flask gunicorn

go-deps:
	go get -v -u github.com/kataras/iris

