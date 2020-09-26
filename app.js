const koa = require('koa')
const bodyParser = require("koa-bodyparser")
const Router = require("koa-Router")
const Request = require("request")
const mysql = require('./utils/mysql')


const app = new koa()
app.use(bodyParser())
const router = new Router();



app.use(async (ctx, next) => {
    console.log("121212start");
    await next();
})
// router.get('/query',async (ctx,next)=> {
//     await ctx.util.mysql(`select * from test;`,function(res,results) {
//         console.log(results)
//         ctx.response.body = res;
//     })
// })

router.get('/index', async (ctx, next) => {
    ctx.response.body = '<h1>Index</h1>';
    const res = await mysql.findTest()
    console.log(res)
});
router.post('/sendCode',async (ctx, next) => {
    const res = ctx.request.body
    console.log('前端小程序送过来的code',res)
    // if(res.code){
    //     let url = 'https://api.weixin.qq.com/sns/jscode2session?appid='+res.appId+'&secret='+res.appSecret+'&js_code='+res.code+'&grant_type=authorization_code'
    //     Request({
    //         url:url,
    //         method:'get'
    //     },
    //     function(err,res,body){

    //     }
    //     )
    // }
})
// add router middleware:
app.use(router.routes());
// router.get("/index",async ctx => {
    
// })
app.listen(3000);
console.log('app started at port 3000...');