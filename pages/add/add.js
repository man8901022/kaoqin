const db = wx.cloud.database()
const productsCollection =db.collection('products')

Page({
 

  addData:function(event){
    console.log(event)
    productsCollection.add({
      data:{
        titile:"product2",
        image:"http://dmimg.5054399.com/allimg/pkm/pk/22.jpg",
        tags:["tag1","tag3"],
        price:20.12,
        color:'blue'
        

      },
      success: res => {
        console.log(res)
      }
    })
    // wx.cloud.callFunction({
    //   name:'delData'
    // })
    //    success: res => {
    //     console.log(res)
    //   }
    
    // }).then(res=>{
    //   console.log(res)
    // })
      
      
  }
})