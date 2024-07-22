// pages/orderDetail/orderDetail.js
Page({
  // 页面的初始数据
  data: {
    // 这里可以定义页面所需的数据
  },
  
  // 事件处理函数
  goToOrder: function() {
    // 跳转到订单页面的逻辑
    wx.navigateTo({
      url: '/pages/orderList/orderList'
    });
  },
  goToHome: function() {
    // 返回主页的逻辑
    wx.switchTab({
      url: '/pages/personal/personal'
    });
  },
  goToFeedback: function() {
    // 跳转到反馈页面的逻辑
    wx.navigateTo({
      url: '/pages/feedback/feedback'
    });
  },
  goToCustomerService: function() {
    // 跳转到客服页面的逻辑
    wx.navigateTo({
      url: '/pages/customerService/customerService'
    });
  }
});