// pages/login/login.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:"",
    itemList: [{ 'name': '个人详情', 'r_icon': '../../images/global_icon_list.png', 'l_icon': '../../images/in_regard_to.png', 'url':'../../pages/personalCenter/personalDetails/personalDetails' },
      { 'name': '订单列表', 'r_icon': '../../images/global_icon_list.png', 'l_icon': '../../images/in_regard_to.png', 'url': '../../pages/personalCenter/indentList/indentList' },
      { 'name': '我的收藏', 'r_icon': '../../images/global_icon_list.png', 'l_icon': '../../images/in_regard_to.png', 'url': '../../pages/personalCenter/myFavorite/myFavorite' },
      { 'name': '邀请好友', 'r_icon': '../../images/global_icon_list.png', 'l_icon': '../../images/in_regard_to.png', 'url': '../../pages/personalCenter/inviteFriends/inviteFriends' },
      { 'name': '关于', 'r_icon': '../../images/global_icon_list.png', 'l_icon': '../../images/in_regard_to.png', 'url': '../../pages/personalCenter/myFavorite/myFavorite' },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      "user":app.globalData.userInfo,
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

  },
  getTab: function (event) {
    var that = this;
    var type = that.data.type === '验证码登录 >' ? '密码登录 >' : '验证码登录 >';
    this.setData({
      type: type
    })
  },

})