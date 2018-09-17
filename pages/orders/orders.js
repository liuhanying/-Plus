// page/component/orders/orders.js
Page({
  data:{
    address:{},
    hasAddress: false,
    total:0,
    orders:[
      { id: 1, title: '小羊肖恩', image: 'http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709250930188478650.jpg', num: 4, price: 213.00},
      { id: 2, title: '黑森林', image: 'http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709240954270258060.jpg', num: 1, price: 213.00}
      ]
  },

  onReady() {
    this.getTotalPrice();
  },
  
  onShow:function(){
    const self = this;
    wx.getStorage({
      key:'address',
      success(res) {
        self.setData({
          address: res.data,
          hasAddress: true
        })
      }
    })
  },

  /**
   * 计算总价
   */
  getTotalPrice() {
    let orders = this.data.orders;
    let total = 0;
    for(let i = 0; i < orders.length; i++) {
      total += orders[i].num * orders[i].price;
    }
    this.setData({
      total: total
    })
  },

  toPay() {
    wx.showModal({
      title: '提示',
      content: '本系统只做演示，支付系统已屏蔽',
      text:'center',
      complete() {
        wx.switchTab({
          // url: '../user/user'
          url: '../mine/mine'
        })
      }
    })
  }
})