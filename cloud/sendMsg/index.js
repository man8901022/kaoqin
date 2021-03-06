// 云函数入口文件
const cloud = require('wx-server-sdk');
cloud.init();

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext();

  if (event.Content == '1' || event.Content == '购买') {
    await cloud.openapi.customerServiceMessage.send({
      touser: wxContext.OPENID,
      msgtype: 'link',
      link: {
        title: '课程名称',
        description: '课程描述',
        url: 'http://xxx.com/xxx'
      }
    });
  } else {
    await cloud.openapi.customerServiceMessage.send({
      touser: wxContext.OPENID,
      msgtype: 'text',
      text: {
        content: '您好,很高兴为您服务。回复1:购买课程'
      }
    });
  }

  return 'success';
};