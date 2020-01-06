// pages/info/info.js
const db = wx.cloud.database()
const productsCollection = db.collection('products')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    products: productsCollection
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    // productsCollection.where({
    //   _id:options.id
    // }).get().then(res=>{
    //   console.log(res.data)
    //   this.setData({
    //     products :res.data[0]
    //   })
    // })
    productsCollection.doc(options.id).get().then(res => {
      console.log(res.data)
      this.setData({
        products: res.data
      })
    })
    

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  
  sendMsg: function () {
    wx.cloud.callFunction({
      name:'sendMsg',
          
      success(res) {
        console.log("获取成功", res.result.event)
      },
      fail(res) {
        console.log("获取失败", res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})