const {Sequelize,DataTypes} = require("sequelize");

const dbConfig = {
    username: 'root',
    host:'47.103.192.224',
    password:'abcd12347890',
    database:'sports_plan',
    dialect: 'mysql' // 'mysql'|'sqlite'|'postgres'|'mssql'

};

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    // operatorsAliases: false,
    // 设置时区
    timezone: '+08:00',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

// 身体数据
const baseBody = sequelize.define('base_body',{
    user_id:{
        type:DataTypes.STRING
    },
    base_body_id:{
        type:DataTypes.STRING
    },
    delete_state:{
        type:DataTypes.STRING
    },
    weight:{
        type:DataTypes.STRING
    },
    height:{
        type:DataTypes.STRING
    },
    waistline:{
        type:DataTypes.STRING
    },
    body_fat:{
        type:DataTypes.STRING
    },
    BMI:{
        type:DataTypes.STRING
    },
    
},
{
    timestamps: true,
})

// 用户运动数字记录
sequelize.define('base_exercise',{
    user_id:{
        type:DataTypes.STRING
    },
    base_exercise_id:{
        type:DataTypes.STRING
    },
    delete_state:{
        type:DataTypes.STRING
    },
    total_days:{
        type:DataTypes.STRING
    },
    total_weeks:{
        type:DataTypes.STRING
    }
},{
    timestamps: true,
})

// 运动数据表 
sequelize.define('sport_schedule',{
    user_id:{
        type:DataTypes.STRING
    },
    sport_schedule_id:{
        type:DataTypes.STRING
    },
    sport_detail_id:{
        type:DataTypes.STRING
    },
    delete_state:{
        type:DataTypes.STRING
    },
    theme:{
        type:DataTypes.STRING
    },
    spend_time:{
        type:DataTypes.STRING
    },
    effect_date:{
        type:DataTypes.STRING
    },
    state:{
        type:DataTypes.STRING
    }
},{
    timestamps: true,
})

// 运动详细表
sequelize.define('sport_detail',{
    sport_detail_id:{
        type:DataTypes.STRING
    },
    sport_schedule_id:{
        type:DataTypes.STRING
    },
    sport_tag_name:{
        type:DataTypes.STRING
    },
    name:{
        type:DataTypes.STRING
    },
    times:{
        type:DataTypes.STRING
    },
    carry_weight:{
        type:DataTypes.STRING
    },
    spend_time:{
        type:DataTypes.STRING
    },
    mileage:{
        type:DataTypes.STRING
    },
    quantity:{
        type:DataTypes.STRING
    }
},{
    timestamps: true,
})

// 运动标签
sequelize.define('sport_tag',{
    sport_tag_id:{
        type:DataTypes.STRING
    },
    delete_state:{
        type:DataTypes.STRING
    },
    name:{
        type:DataTypes.STRING
    },  
    state:{
        type:DataTypes.STRING
    }
},{
    timestamps: true,
})

// 微信用户
sequelize.define('wx_user',{
    user_id:{
        type:DataTypes.STRING
    },
    delete_state:{
        type:DataTypes.STRING
    }
},{
    timestamps: true,
})

module.exports = baseBody