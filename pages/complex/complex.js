const db =wx.cloud.database()
const productsCollection = db.collection("products")

Page({
  data:{

  },
  click:function(event){
    console.log("调用开始")
    productsCollection.get().then(res => {
      this.setData({
        products: res.data
      })
    })
  },
  chooseRed:function(event){
    console.log("红色")
    productsCollection.where({
      color:"red"
    }).get().then(res => {
      this.setData({
        products: res.data
      })
    })
  }

})