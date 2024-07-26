Page({
  data: {
    user: {
      avatarUrl: '../photos/image.png'
    },
    showModal: false
  },
  onAvatarTap: function(event) {
    this.setData({ showModal: true });
  },
  onOverlayTap: function(event) {
    this.setData({ showModal: false });
  },
  onConfirm: function(event) {
    const that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        const tempFilePaths = res.tempFilePaths;
        that.setData({
          user: {
            avatarUrl: tempFilePaths[0]
          }
        });
      }
    });
    this.setData({ showModal: false });
  },
  onCancel: function(event) {
    console.log('取消更换头像');
    this.setData({ showModal: false });
  },

  
  getOrderDetails: function() {
    const that = this;
    wx.request({
      url: 'http://localhost:3000', // 替换为你的后端 API 地址
      method: 'GET',
      success: function(res) {
        if (res.statusCode === 200) {
          that.setData({
            order: res.data
          });
        } else {
          wx.showToast({
            title: '获取订单信息失败',
            icon: 'none'
          });
        }
      },
      fail: function() {
        wx.showToast({
          title: '请求失败，请稍后再试',
          icon: 'none'
        });
      }
    });
  }
});