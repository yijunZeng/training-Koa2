const mysql = require('mysql')
let pools = {} // 连接池

let pool = mysql.createPool ( {
    host:'47.103.192.224',
    port:'3306',
    user:'root',
    password:'abcd12347890',
    database:'sports_plan'
})
let query = function(sql,values) {
    return new Promise ( (resolve,reject) => {
        pool.getConnection(function(err,connection) {
            if(err) {
                reject(err)
            } else {
                connection.query(sql,values,(err,rows)=> {
                    if(err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })
}
let findTest = function () {
    let _sql = `select * from test`
    return query(_sql)
}


// let query = (sql,callback,host = '47.103.192.224') =>{
//     if(!pools.hasOwnProperty(host)) {
//         pools[host] = mysql.createPool({
//             host:host,
//             port:'3306',
//             user:'root',
//             password:'abcd12347890',
//             database:'sports_plan'
//         })
//     }
//     pools[host].getConnection((err, connection)=>{  // 初始化连接池
//         connection.query(sql,(err, results=>{  // 去数据库查询数据
//             callback(err,results)  //  结果回调
//             connection.release()    // 释放连接资源 ｜ 跟connection destroy 不同，它是销毁
//         }))
//     })
// }
module.exports = {findTest}