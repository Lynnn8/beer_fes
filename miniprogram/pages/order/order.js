// pages/order/order.js
Page({
  data: {
    tickets: [
      { name: '普通票 (不限人群)', heightLimit: '120cm以上', price: 1080 },
      { name: '普通票 (双人票)', heightLimit: '120cm以上', price: 2150 }
    ]
  },
  purchase: function(event) {
    const index = event.currentTarget.dataset.index;
    console.log('您选择了：', this.data.tickets[index].name);
    // 这里可以添加购买票务的逻辑，例如跳转到订单确认页面
  }
});