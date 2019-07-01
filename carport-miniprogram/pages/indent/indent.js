Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    height: 0,
    widHeight: 0,
    list1: [{
        "id": '001',
        "name": "惠州花样年家天下|负一076车位",
        "orderTime": "下单时间：2018-02-03",
        "price": " 成交总价：20000",
        "type": '已成交',
        'images': '../../images/course2.png',
        "typeNumber": '1'
      },
      {
        "id": '002',
        "name": "惠州花样年家天下|负一077车位",
        "orderTime": "下单时间：2018-02-04",
        "price": " 成交总价：20000",
        "type": '已成交',
        'images': '../../images/course2.png',
        "typeNumber": '1'
      }
    ],
    list2: [{
        "id": '003',
        "name": "惠州花样年家天下|负一076车位",
        "orderTime": "下单时间：2018-02-03",
        "price": " 成交总价：20000",
        "type": '已成交',
        'images': '../../images/course2.png',
        "typeNumber":'1'
      },
      {
        "id": '004',
        "name": "惠州花样年家天下|负一077车位",
        "orderTime": "下单时间：2018-02-04",
        "price": " 成交总价：20000",
        "type": '已成交',
        'images': '../../images/course2.png',
        "typeNumber": '1'
      },
      {
        "id": '004',
        "name": "惠州花样年家天下|负一077车位",
        "orderTime": "下单时间：2018-02-04",
        "price": " 成交总价：20000",
        "type": '待支付',
        'images': '../../images/course2.png',
        "typeNumber": '2'
      },
      {
        "id": '003',
        "name": "惠州花样年家天下|负一076车位",
        "orderTime": "下单时间：2018-02-03",
        "price": " 成交总价：20000",
        "type": '已成交',
        'images': '../../images/course2.png',
        "typeNumber": '1'
      },
      {
        "id": '003',
        "name": "惠州花样年家天下|负一076车位",
        "orderTime": "下单时间：2018-02-03",
        "price": " 成交总价：20000",
        "type": '待支付',
        'images': '../../images/course2.png',
        "typeNumber": '2'
      }, {
        "id": '003',
        "name": "惠州花样年家天下|负一076车位",
        "orderTime": "下单时间：2018-02-03",
        "price": " 成交总价：20000",
        "type": '已成交',
        'images': '../../images/course2.png',
        "typeNumber": '1'
      }
    ],
    list3: [{
      "id": '003',
      "name": "惠州花样年家天下|负一076车位",
      "orderTime": "下单时间：2018-02-03",
      "price": " 成交总价：20000",
      "type": '已成交',
      'images': '../../images/course2.png',
      "typeNumber": '1'
    }
    ],
    list4: [{
      "id": '003',
      "name": "惠州花样年家天下|负一076车位",
      "orderTime": "下单时间：2018-02-03",
      "price": " 成交总价：20000",
      "type": '已成交',
      'images': '../../images/course2.png',
      "typeNumber": '1'
    },
      {
        "id": '003',
        "name": "惠州花样年家天下|负一076车位",
        "orderTime": "下单时间：2018-02-03",
        "price": " 成交总价：20000",
        "type": '待支付',
        'images': '../../images/course2.png',
        "typeNumber": '2'
      },
      {
        "id": '003',
        "name": "惠州花样年家天下|负一076车位",
        "orderTime": "下单时间：2018-02-03",
        "price": " 成交总价：20000",
        "type": '已成交',
        'images': '../../images/course2.png',
        "typeNumber": '1'
      },
      {
        "id": '003',
        "name": "惠州花样年家天下|负一076车位",
        "orderTime": "下单时间：2018-02-03",
        "price": " 成交总价：20000",
        "type": '待支付',
        'images': '../../images/course2.png',
        "typeNumber": '2'
      }
    ],
    list5: [{
      "id": '003',
      "name": "惠州花样年家天下|负一076车位",
      "orderTime": "下单时间：2018-02-03",
      "price": " 成交总价：20000",
      "type": '已成交',
      'images': '../../images/course2.png',
      "typeNumber": '1'
    }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    var query = wx.createSelectorQuery();
    var list1Length = that.data.list1.length;
    query.select('.indent-box').boundingClientRect(function(rect) {
      console.log()
      that.setData({
        // 获取要循环标签的高度d
        height: rect.height,
        widHeight: rect.height * list1Length + (list1Length - 1) * 10 + 10 +"px"
      })
    }).exec();
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  goToOpenInvoice:function(){
    wx.navigateTo({
      url: '../index/openInvoice/openInvoice',
    })
  },
  swiperTab: function(e) {
    var that = this;
    // 获取单个轮播循环的高度
    var heights = this.data.height;
    // 获取一级成员的数组个数
    var list1 = this.data.list1.length
    // 获取二级成员的数组个数
    var list2 = this.data.list2.length
    // 获得三级成员的数组个数
    var list3 = this.data.list3.length
    // 获得四级成员的数组个数
    var list4 = this.data.list4.length
    // 获取五级成员的数组个数
    var list5 = this.data.list5.length
    that.setData({
      currentTab: e.detail.current
    });
    if (this.data.currentTab == 0) {
      that.setData({
        widHeight: heights * list1 + (list1 -1 ) * 10 + 10+"px"
      });
    } else if (this.data.currentTab == 1) {
      that.setData({
        widHeight: heights * list2 + (list2 - 1) * 10 + 10+"px"
      });
    } else if (this.data.currentTab == 2) {
      that.setData({
        widHeight: heights * list3 + (list3 - 1) * 10 + 10 + "px"
      });
    } else if (this.data.currentTab == 3) {
      that.setData({
        widHeight: heights * list4 + (list4 - 1) * 10 + 10 + "px"
      });
    } else if (this.data.currentTab == 4) {
      that.setData({
        widHeight: heights * list5 + (list5 - 1) * 10 + 10 + "px"
      });
    }

  },
  //点击切换
  clickTab: function(e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
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

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})