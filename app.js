const koa = require('koa')
const bodyParser = require("koa-bodyparser")
const Router = require("koa-Router")
const Request = require("request")
const baseBody = require("./db/index")

console.log(baseBody)
// import from './db/index'
// const Sequelize = require("sequelize");

// const dbConfig = {
//     username: 'root',
//     host:'47.103.192.224',
//     password:'abcd12347890',
//     database:'sports_plan',
//     dialect: 'mysql' // 'mysql'|'sqlite'|'postgres'|'mssql'

// };

// const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
//     host: dbConfig.host,
//     dialect: dbConfig.dialect,
//     operatorsAliases: false,
//     // 设置时区
//     timezone: '+08:00',
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     },
// });
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