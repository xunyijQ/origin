Page({

  /**
   * 页面的初始数据
   */
  data: {
    carport:[],
    itemList:[
        {'name':'客户姓名','value':'张三'},
      { 'name': '手机号码', 'value': '18838866999' },
      { 'name': '身份证号码', 'value': '18838866999' },
      { 'name': 'OA', 'value': 'zhangsan' },
      { 'name': '楼栋', 'value': 'zhangsan' },
      { 'name': '房间号', 'value': 'zhangsan' },
      ]
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var carport =  wx.getStorageSync("carport");
    this.setData({
      carport: carport
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  //调用支付接口
  goToPay:function(){
    wx.requestPayment({
      timeStamp: '',
      nonceStr: '',
      package: '',
      signType: 'MD5',
      paySign: '',
      success(res) {
        wx.navigateTo({
          url: '../../../paymentSuccess/paymentSuccess'
        })

       },
      fail(res) { 
        wx.navigateTo({
          url: '../../../paymentSuccess/paymentSuccess'
        })
      }
    })
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