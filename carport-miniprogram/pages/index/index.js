//index.js
//获取应用实例
const util = require('../../utils/util.js');
const app = getApp()

Page({
  data: {
    itemList: [{ 'id':'001','coupon':'3000','address': '广东惠州', 'Community': '惠州花样年', 'price': '16897', 'icon': '../../images/stop_bg.png' },
      { 'id': '002','coupon': '3000','address': '广东惠州', 'Community': '惠州花样年','price':'16897','icon': '../../images/stop_bg.png' },
      { 'id': '003','coupon': '3000','address': '广东惠州', 'Community': '惠州花样年', 'price': '16897','icon': '../../images/stop_bg.png' },
      { 'id': '004','coupon': '3000','address': '广东惠州', 'Community': '惠州花样年', 'price': '16897','icon': '../../images/stop_bg.png' },
      { 'id': '005','coupon': '3000','address': '广东惠州', 'Community': '惠州花样年', 'price': '16897','icon': '../../images/stop_bg.png' },
      { 'id': '006','coupon': '3000','address': '广东惠州', 'Community': '惠州花样年', 'price': '16897','icon': '../../images/stop_bg.png' },
    ]
  },
  
  onLoad: function () {
    var that = this;

      wx.getSetting({
        success: (res) => {
          if (res.authSetting['scope.userInfo']) {//授权了，可以获取用户信息了
            wx.getUserInfo({
              success: (res) => {
                console.log(res)
              }
            })
          } else {//未授权，跳到授权页面
            wx.redirectTo({
              url: '../authorize/authorize',//授权页面
            })
          }
        }
      })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
