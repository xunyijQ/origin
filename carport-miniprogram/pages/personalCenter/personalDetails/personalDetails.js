// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemList: [{ 'name': '姓名', 'value':'张三', 'icon': '../../../images/order.png', 'url': '' },
      { 'name': '联系电话', 'value': '18888888888', 'icon': '../../../images/address.png', 'url': 'address' },
      { 'name': '邮箱', 'value': 'zhangsan@163.com', 'icon': '../../../images/myCoupon.png', 'url': 'coupon' },
      { 'name': '所在城市', 'value': '湖南邵阳', 'icon': '../../../images/contact.png', 'url': '' },
      { 'name': '家庭住址', 'value': '民富路一号', 'icon': '../../../images/store.png', 'url': '' },
      { 'name': '所在小区', 'value': '民福花园', 'icon': '../../../images/fangke.png', 'url': '' },
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