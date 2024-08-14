const db = wx.cloud.database();

Page({
  data: {
    user: {
      avatarUrl: '../photos/image.png'
    },
    showModal: false,
    order: null, // Check if order exists
    items: [] // Store fetched items
  },
  onLoad() {
    const that = this;
    wx.cloud.database().collection("fest-list").where({
      price: '2150'
    }).get({
      success(res) {
        if (res.data.length > 0) {
          that.setData({
            order: res.data[0],
            items: res.data,
            orderImage: res.data[0].image
          });
        } else {
          that.setData({
            order: null
          });
        }
      },
      fail(err) {
        console.error('请求失败', err);
      }
    });
  },
  getmessage() {
    db.get({
      success: function(res) {
        console.log(res);
      },
      fail: function(err) {
        console.error(err);
      }
    })
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
  }
});
