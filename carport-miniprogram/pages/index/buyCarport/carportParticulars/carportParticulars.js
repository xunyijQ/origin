Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1735688044,4235283864&fm=26&gp=0.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561615749601&di=d82937d3e95516de7023252766bf2b59&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201508%2F20%2F20150820204057_CZdza.jpeg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561615749599&di=d1b1f76903e9173a1cc033de572e9a5f&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201403%2F09%2F20140309132306_u5AXE.thumb.700_0.jpeg'
    ],
    type:0,
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    list:[
        {"name":'地址',"value":'广东省深圳市龙岗区安居路花样年家天下'},
        {"name": '价格', "value": '100900元' },
        {"name": '面积', "value": '12.3㎡' },
      { "name": '编号', "value": '负一，706' },
      { "name": '标准', "value": '员工购' },
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.setStorageSync('carport', that.data.list);
    if (options.type){
      that.setData({
        type: options.type
      })
    }

  
  },
  //购买车位 ，下单
  goToPlaceAnOrder:function(){
    
    wx.navigateTo({
      url:"placeAnOrder/placeAnOrder"
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