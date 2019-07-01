Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
        {'name':' 下单时间','value':'2018-02-03 13:22:32','text':''},
      { 'name': ' 优惠信息', 'value': '-300', 'text': '饭票优惠'},
      { 'name': ' 付款信息', 'value': '197000', 'text': '彩钱包' },
      { 'name': ' 订单编号', 'value': '4201114542122444422112', 'text': ''},
      ]
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
  //开具发票
  goToInvoice:function(e){
    wx.navigateTo({
      url: '../openInvoice/openInvoice',
    })
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