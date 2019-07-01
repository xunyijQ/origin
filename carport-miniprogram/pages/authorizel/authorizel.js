
var globalOpenId = getApp().globalData.openId;
var amapFile = require('../../libs/amap-wx.js');
var markersData = {
  latitude: '',//纬度
  longitude: '',//经度
  key: "fac5cc1689e15e13c8adc968b1957aeb"//申请的高德地图key
};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weather: [],
    // 判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo')//获取用户信息是否在当前版本可用
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.loadInfo();
  },
  //获取当前位置的经纬度
  loadInfo: function () {
    var that = this;
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude//维度
        var longitude = res.longitude//经度
        console.log(res);
        that.loadCity(latitude, longitude);
      }
    })
  },

  //把当前位置的经纬度传给高德地图，调用高德API获取当前地理位置，天气情况等信息
  loadCity: function (latitude, longitude) {
    var that = this;
    var myAmapFun = new amapFile.AMapWX({ key: markersData.key });
    myAmapFun.getRegeo({
      location: '' + longitude + ',' + latitude + '',//location的格式为'经度,纬度'
      success: function (data) {
        console.log(data);
      },
      fail: function (info) { }
    });

    myAmapFun.getWeather({
      success: function (data) {
        that.setData({
          weather: data
        })
        console.log(data);
        //成功回调
      },
      fail: function (info) {
        //失败回调
        console.log(info)
      }
    })
  },
  // onShow: function () {
  //   var _this = this;
  //   //调用定位方法
  //   _this.getUserLocation();
  // },
  // //定位方法
  // getUserLocation: function () {
  //   var _this = this;
  //   wx.getSetting({
  //     success: (res) => {
  //       // res.authSetting['scope.userLocation'] == undefined    表示 初始化进入该页面
  //       // res.authSetting['scope.userLocation'] == false    表示 非初始化进入该页面,且未授权
  //       // res.authSetting['scope.userLocation'] == true    表示 地理位置授权
  //       if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {
  //         //未授权
  //         wx.showModal({
  //           title: '请求授权当前位置',
  //           content: '需要获取您的地理位置，请确认授权',
  //           success: function (res) {
  //             if (res.cancel) {
  //               //取消授权
  //               wx.showToast({
  //                 title: '拒绝授权',
  //                 icon: 'none',
  //                 duration: 1000
  //               })
  //             } else if (res.confirm) {
  //               //确定授权，通过wx.openSetting发起授权请求
  //               wx.openSetting({
  //                 success: function (res) {
  //                   if (res.authSetting["scope.userLocation"] == true) {
  //                     wx.showToast({
  //                       title: '授权成功',
  //                       icon: 'success',
  //                       duration: 1000
  //                     })
  //                     //再次授权，调用wx.getLocation的API
  //                     _this.geo();
  //                   } else {
  //                     wx.showToast({
  //                       title: '授权失败',
  //                       icon: 'none',
  //                       duration: 1000
  //                     })
  //                   }
  //                 }
  //               })
  //             }
  //           }
  //         })
  //       } else if (res.authSetting['scope.userLocation'] == undefined) {
  //         //用户首次进入页面,调用wx.getLocation的API
  //         _this.geo();
  //       }
  //       else {
  //         console.log('授权成功')
  //         //调用wx.getLocation的API
  //         _this.geo();
  //       }
  //     }
  //   })

  // },

  // // 获取定位城市
  // geo: function () {
  //   var _this = this;
  //   wx.getLocation({
  //     type: 'wgs84',
  //     success: function (res) {
  //       var latitude = res.latitude
  //       var longitude = res.longitude
  //       var speed = res.speed
  //       var accuracy = res.accuracy
  //       wx.request({
  //         url: 'http://api.map.baidu.com/geocoder/v2/?ak=xxxxxxxxxxxx&location=' + res.latitude + ',' + res.longitude + '&output=json',
  //         data: {},
  //         header: { 'Content-Type': 'application/json' },
  //         success: function (ops) {
  //           console.log('定位城市：', ops.data.result.addressComponent.city)
  //         },
  //         fail: function (resq) {
  //           wx.showModal({
  //             title: '信息提示',
  //             content: '请求失败',
  //             showCancel: false,
  //             confirmColor: '#f37938'
  //           });
  //         },
  //         complete: function () {
  //         }
  //       })
  //     }
  //   })
  // },
  bindGetUserInfo: function (e) {//点击的“拒绝”或者“允许
    if (e.detail.userInfo) {//点击了“允许”按钮，
      var that = this;
      requestUrl.requestUrl({//将用户信息传给后台数据库
        url: "/QXEV/xxx/xxx",
        params: {
          openId: globalOpenId,//用户的唯一标识
          nickName: e.detail.userInfo.nickName,//微信昵称
          avatarUrl: e.detail.userInfo.avatarUrl,//微信头像
          province: e.detail.userInfo.province,//用户注册的省
          city: e.detail.userInfo.city//用户注册的市
        },
        method: "post",
      })
        .then((data) => {//then接收一个参数，是函数，并且会拿到我们在requestUrl中调用resolve时传的的参数
          console.log("允许授权了");
        })
        .catch((errorMsg) => {
          console.log(errorMsg)
        })
      wx.switchTab({
        url: '../index/index',
      })
    }
  }
})