const {Sequelize} = require('sequelize');
const sequelize = require('../db/index');
// 身体数据
// const baseBody = sequelize.define('base_body',{
//     user_id:{
//         type:Sequelize.STRING
//     },
//     base_body_id:{
//         type:Sequelize.STRING
//     },
//     delete_state:{
//         type:Sequelize.STRING
//     },
//     weight:{
//         type:Sequelize.STRING
//     },
//     height:{
//         type:Sequelize.STRING
//     },
//     waistline:{
//         type:Sequelize.STRING
//     },
//     body_fat:{
//         type:Sequelize.STRING
//     },
//     BMI:{
//         type:Sequelize.STRING
//     },
    
// },
// {
//     timestamps: true,
// })

// // 用户运动数字记录
// sequelize.define('base_exercise',{
//     user_id:{
//         type:Sequelize.STRING
//     },
//     base_exercise_id:{
//         type:Sequelize.STRING
//     },
//     delete_state:{
//         type:Sequelize.STRING
//     },
//     total_days:{
//         type:Sequelize.STRING
//     },
//     total_weeks:{
//         type:Sequelize.STRING
//     }
// },{
//     timestamps: true,
// })

// // 运动数据表 
// sequelize.define('sport_schedule',{
//     user_id:{
//         type:Sequelize.STRING
//     },
//     sport_schedule_id:{
//         type:Sequelize.STRING
//     },
//     sport_detail_id:{
//         type:Sequelize.STRING
//     },
//     delete_state:{
//         type:Sequelize.STRING
//     },
//     theme:{
//         type:Sequelize.STRING
//     },
//     spend_time:{
//         type:Sequelize.STRING
//     },
//     effect_date:{
//         type:Sequelize.STRING
//     },
//     state:{
//         type:Sequelize.STRING
//     }
// },{
//     timestamps: true,
// })

// // 运动详细表
// sequelize.define('sport_detail',{
//     sport_detail_id:{
//         type:Sequelize.STRING
//     },
//     sport_schedule_id:{
//         type:Sequelize.STRING
//     },
//     sport_tag_name:{
//         type:Sequelize.STRING
//     },
//     name:{
//         type:Sequelize.STRING
//     },
//     times:{
//         type:Sequelize.STRING
//     },
//     carry_weight:{
//         type:Sequelize.STRING
//     },
//     spend_time:{
//         type:Sequelize.STRING
//     },
//     mileage:{
//         type:Sequelize.STRING
//     },
//     quantity:{
//         type:Sequelize.STRING
//     }
// },{
//     timestamps: true,
// })

// 运动标签
const SportTags  = sequelize.define('sport_tag',{
    id:{
        type:Sequelize.INTEGER(11),
        autoIncrement: true, // 自动增长
        primaryKey: true // 主键字段
    },
    sport_tag_id:{
        type:Sequelize.STRING(128)
    },
    delete_state:{
        type:Sequelize.STRING(11)
    },
    name:{
        type:Sequelize.STRING(256)
    },  
    state:Sequelize.STRING(256),
    createdAt: Sequelize.BIGINT,
    updatedAt: Sequelize.BIGINT,
},{
    timestamps:false,
})
SportTags.sync({
    force: false,
});
// // 微信用户
// sequelize.define('wx_user',{
//     user_id:{
//         type:Sequelize.STRING
//     },
//     delete_state:{
//         type:Sequelize.STRING
//     }
// },{
//     timestamps: true,
// })
module.exports = SportTags;