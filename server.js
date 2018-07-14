const Koa = require('koa')
const Router = require('koa-router')
const views = require('koa-views');

const PORT = process.env.PORT || 3000

const router = new Router()
router.get('/', async function (ctx) {
    await ctx.render('index')
})
router.get('/about', async function (ctx) {
    await ctx.render('about')
})

const app = new Koa()
app.use(router.routes(), router.allowedMethods())
app.use(views(__dirname + '/templates'))
app.listen(PORT, () => console.log(`Server is listening port ${PORT}`))
