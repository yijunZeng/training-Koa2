const {formatCurrentDate} = require('../utils/common')

const SportTagsController = {
    index: async(ctx,next)=>{
        ctx.body = '欢迎来到用户首页！'  
    },
    findAll: async (ctx) => {
        try {
            let result = await SportTags.findAll();
            if (result) {
                ctx.body = {
                    code: 200,
                    message: result
                }
            } else {
                ctx.body = {
                    code: 500,
                    message: '表中没有数据!',
                };
            }
        } catch (error) {
            ctx.body = {
                code: 500,
                message: '错误',
                data: err
            };
        }
    },
    save: async(ctx,next) =>{
        const nowAt = formatCurrentDate()
        await SportTags.create({
            sport_tag_id:'1',
            delete_state:'1',
            name: 'hhdh',
            state: '1',
            createdAt: nowAt,
            updatedAt: nowAt,
        })
        .then((result) => {
            ctx.body = {
                code: 200,
                msg: '注册成功!',
                message: result
            }
        })
        .catch(err => {
            ctx.body = {
                code: 500,
                msg: '注册失败！',
                message: err
            }
        })
    }
}
module.exports = SportTagsController