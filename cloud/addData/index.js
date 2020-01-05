// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
const productsCollenction = db.collection('products')
// 云函数入口函数
exports.main = async (event, context) => {
  

  return await productsCollenction.add({
       data:{
        titile:"product3",
        image:"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpgs",
        tags:["tag1","tag3"],
        price:20.12,
        color:'greens'


      }
  })
}