// pages/index1/index1.js
const db = wx.cloud.database()
const productsCollection = db.collection('products')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log("调用开始")
    productsCollection.get().then(res => {
      this.setData({
        products: res.data
      })
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },
  click:function(event){
    
    console.log(event.currentTarget.dataset.id)
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    productsCollection.get().then(res => {
      this.setData({
        products: res.data,
        page:0
      }, res => {
        console.log("数据更新完成")
        wx.stopPullDownRefresh()
      })
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log("触底了")
    let page = this.data.page + 20
    console.log(page)
    productsCollection.skip(page).get().then(res => {
      let new_data = res.data
      let old_data = this.data.products
      this.setData({
        products: old_data.concat(new_data),
        page: page
      }, res => {
        console.log(res);

      })
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})