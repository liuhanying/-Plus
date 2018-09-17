// pages/goods/goods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lastIndex:0,
    lastNav:1,
    cateItems: [
      {
        cate_id: 1,
        cate_name: "慕斯蛋糕",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '奥利奥芝士',
              image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709231119516437790.jpg",
              price: "￥227.00"
            },
            {
              child_id: 2,
              name: '经典榴莲',
              image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709241156084239360.jpg",
              price: "￥183.00"
            },
            {
              child_id: 3,
              name: '蓝莓优格',
              image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709241255041735610.jpg",
              price: "￥227.00"
            },
            {
              child_id: 4,
              name: '恋香轻芝士',
              image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709241300024292880.jpg",
              price: "￥227.00"
            }
          ]
      },
      {
        cate_id: 2,
        cate_name: "水果蛋糕",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '致青春',
              image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709251148233469370.jpg",
              price: "￥213.00"
            },
            {
              child_id: 2,
              name: '小羊肖恩',
              image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709250930188478650.jpg",
              price: "￥213.00"
            },
            {
              child_id: 3,
              name: '莓果绵绵',
              image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709241337344256500.jpg",
              price: "￥213.00"
            },
            {
              child_id: 4,
              name: '黑森林',
              image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709240954270258060.jpg",
              price: "￥213.00"
            }
          ]
      },
      {
        cate_id: 3,
        cate_name: "私人订制",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '爱心永恒',
              image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_67a939ccf5d7420cb0979f8a055c3dfe.jpg",
              price: "￥1599.00"
            },
            {
              child_id: 2,
              name: '百年好合',
              image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_82bce1adf292478eb3421df6c0c25e27.jpg",
              price: "￥2399.00"
            },
            {
              child_id: 3,
              name: '浓情蜜语（糖纸）',
              image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201610301720133535560.jpg",
              price: "￥227.00"
            },
            {
              child_id: 4,
              name: '一吻情深',
              image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201611041708491728810.jpg",
              price: "￥1588.00"
            }
          ]
      },
      {
        cate_id: 4,
        cate_name: "面包饼干",
        ishaveChild: true,
        children: [{
          child_id: 1,
          name: '千层鲜奶面包',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_b848a67816b64e3dbd2245573a8b1a73.jpg",
          price: "￥19.80"
        },
        {
          child_id: 2,
          name: '巧克力毛毛虫',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_270bc6a0a63944a7aba190995ecabb6c.jpg",
          price: "￥8.00"
        },
        {
          child_id: 3,
          name: '丹麦菠萝派',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201703021530032387670.jpg",
          price: "￥10.80"
        },
        {
          child_id: 4,
          name: '原味蛋挞1盒/4个（门店提货）',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201708311608516263240.jpg",
          price: "￥24.00"
        }]
      },
      {
        cate_id: 5,
        cate_name: "超值团购",
        ishaveChild: true,
        children: [{
          child_id: 1,
          name: '格林城堡',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201804031503269047100.jpg",
          price: "￥178.00"
        },
        {
          child_id: 2,
          name: '巴黎之夜',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201804031449569047830.jpg",
          price: "￥178.00"
        }]
      },
      {
        cate_id: 6,
        cate_name: "会员卡专区",
        ishaveChild: true,
        children: [{
          child_id: 1,
          name: '100元实体店提货卡',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_33ac4f765f9040abb616bc7974aec3e6.jpg",
          price: "￥98.00"
        }]
      },
      {
        cate_id: 7,
        cate_name: "中秋月饼",
        ishaveChild: true,
        children: [{
          child_id: 1,
          name: '至尊福临门月饼礼盒',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201808081232156346640.jpg",
          price: "￥258.00"
        },
        {
          child_id: 2,
          name: '房山饼【仅限上门自提】',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201804301517464870300.jpg",
          price: "￥38.00"
        }]
      },
      {
        cate_id: 8,
        cate_name: "冰激凌蛋糕",
        ishaveChild: true,
        children: [{
          child_id: 1,
          name: '冰峰巧克力（巧克力冰淇淋）',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201705011136110065290.png",
          price: "￥227.00"
        },
        {
          child_id: 2,
          name: '冰雪蓝莓（香草冰淇淋）',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201705011130059682700.png",
          price: "￥227.00"
        },
        {
          child_id: 3,
          name: '莓果雪域（草莓冰淇淋）',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201705011113563402790.png",
          price: "￥227.00"
        }]
      }
    ],

    chooseDatas: [
      {
        choose_id: 1,
        choose_name: "综合排序"
      },
      {
        choose_id: 2,
        choose_name: "按价格"
      },
      {
        choose_id: 3,
        choose_name: "按销量"
      }
    ],
    curNav: 1,
    curIndex: 0,
    curNav2: 1,
    curIndex2: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


  },



  //事件处理函数  
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
      this.lastIndex = index;
      this.lastNav = id;
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
  },
  switchRightTab2: function (e) {
    
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    console.log(id)
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav2:id,
      curIndex2: index
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
  onShow: function () {

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