const koa = require('koa')
const bodyParser = require("koa-bodyparser")
// const Router = require("koa-router");
const router = require("./api/sportTagsAPI");

const app = new koa()
app.use(bodyParser())
//引入路由
//装载所有子路由
router(app)

app.use(async (ctx) => {
    ctx.body = '<h1>Hello Bruce1G</h1>'
});

app.listen(3000);
console.log('app started at port 3000...');