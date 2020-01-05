const DB = wx.cloud.database().collection("list")
let name =""
let age =""
let id=""
let openid=""
Page({
  data:{
    imgurl:""
  },
  addData(){
    DB.add({
      data: ({
        name: name,
        age: age,
        sex:"男"
      }),
      success(res){
        console.log("添加成功",res)
      },
      fail(res){
        console.log("添加失败", res)
      }
    })
     
  },
   getData() {
     DB.get({
       success(res) {
         console.log("查询数据成功", res)
       }
     })
  } ,
  addName(event){
    name = event.detail.value
  },
  addAge(event) {
    age = event.detail.value
  },
  delDataInput(event){
    console.log(event.detail.value)
    id = event.detail.value
  },
  delData(){
    DB.doc(id).remove({
      success(res) {
        console.log("删除成功", res)
      },
      fail(res) {
        console.log("删除失败", res)
      }
    })
  },
  //更新数据
  upDataInput(event) {
    console.log(event.detail.value)
    id = event.detail.value
  },
  upData(){
    DB.doc(id).update({
      data:{
        name:name,
        age:age
      },
      success(res) {
        console.log("更新成功", res)
      },
      fail(res) {
        console.log("更新失败", res)
      }
    })
  },
  getOpenId(){
    wx.cloud.callFunction({
      name:"getopenid",
      success(res){
        
        console.log("获取成功",res.result)
        DB.add({
          data:({
            appid:res.result.appId,
            openid:res.result.openId,

          })
        })
      },
      fail(res){
        console.log("获取失败", res)
      }
    })
  },
  getcloudData(){
    wx.cloud.callFunction({
      name:"getdatabase",
      success(res){
        console.log("获取成功",res)
      },
      fail(res){
        console.log("获取失败", res)
      }
    })
  },
  upload(){
    console.log("点击了上传")
    
    let that =this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      // sourceType: ['album', 'camera'],
      sourceType: ['album'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        console.log("选择成功",res)
      that.uploadImg(res.tempFilePaths[0])
      
      }
    })
  },
    uploadImg(fileUrl){
      wx.cloud.uploadFile({
        cloudPath: new Date().getTime()+'.png',
        filePath: fileUrl,
        success: res => {
          console.log( res.fileID)
          this.setData({
            imgurl: res.fileID
          })
        },
        fail: console.error

      })
    }
  
  
  





})
