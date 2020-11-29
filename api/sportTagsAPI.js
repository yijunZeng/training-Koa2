const SportTags = require('../models/SportTags')
const Router = require("koa-Router")
const SportTagsController = require("../controller/sportTagsController")
let router = new Router();
module.exports = (app)=>{
    router.get('/',SportTagsController.index);
    router.get('/find', SportTagsController.findAll)
    router.post('/save',SportTagsController.save)
    app.use(router.routes())
    .use(router.allowedMethods())
}









