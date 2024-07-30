// pages/orderDetail/orderDetail.js
Page({
  // 页面的初始数据
  data: {
    arr: [{
      images: '../photos/主页2.jpeg',
      title: '共享精酿',
    },
    {
      images: '../photos/主页1.jpg',
      title: '场地美景',
    },    
    {
      images: '../photos/主页3.jpeg',
      title: '电音舞台',
    }],
    beforeColor: "white",//指示点颜色 
    afterColor: "coral",//当前选中的指示点颜色 
    previousmargin: '0px',//前边距
    nextmargin: '24px',//后边距
    indicator: false, //是否显示指示点
    interval: 5000,  //自动切换时间间隔
    duration: 400,  //滑动动画时长
    autoplay: false, //是否自动切换
    circular: true, //是否采用衔接滑动
    cur: 0,         //当前所在滑块的index
  },

  //轮播图的切换事件  
  swiperChange(e) {
    let cur = e.detail.current  //获取当前轮播图片的下标, 可以给当前指示点加样式
    this.setData({
      cur: cur
    })
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