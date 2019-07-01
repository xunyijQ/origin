// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemList: [{ 'placeAnOrderTime': '2018-03-22', 'payTime': '2019-02-11', 'makeABargain': '20',  'icon':'../../../images/stop_bg.png' },
      { 'placeAnOrderTime': '2018-03-22', 'payTime': '2019-02-11', 'makeABargain': '20',  'icon': '../../../images/stop_bg.png' },
      { 'placeAnOrderTime': '2018-03-22', 'payTime': '2019-02-11', 'makeABargain': '20',  'icon': '../../../images/stop_bg.png' },
      { 'placeAnOrderTime': '2018-03-22', 'payTime': '2019-02-11', 'makeABargain': '20',  'icon': '../../../images/stop_bg.png' },
      { 'placeAnOrderTime': '2018-03-22', 'payTime': '2019-02-11', 'makeABargain': '20', 'icon': '../../../images/stop_bg.png' },
      { 'placeAnOrderTime': '2018-03-22', 'payTime': '2019-02-11', 'makeABargain': '20', 'icon': '../../../images/stop_bg.png' },
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
  goToTop: function () { //回到顶部
    this.setData({
      scrolltop: 0
    })
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

  },
  getTab: function (event) {
    var that = this;
    var type = that.data.type === '验证码登录 >' ? '密码登录 >' : '验证码登录 >';
    this.setData({
      type: type
    })
  },

})