Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    height:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var query = wx.createSelectorQuery();
    query.select('.service-user-common').boundingClientRect(function (rect) {
      // console.log(rect.width)
      that.setData({
        height: rect.height + 'px'
      })
    }).exec();
  },
  switch1Change: function (e) {
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
  },
  //保存发票信息
  goToPreserve:function(){
    var that = this;
    let index = currentTab;
    let list = [];
    let obj = {};
    if (that.data.currentTab == 0){

    }else{

    }
    // wx.setStorageSync('invoice', );
  },
  //开票
  goToOpen:function(){
    wx.navigateTo({
      url: '../invoiceHint/invoiceHint',
    })
  },
  //发票类别显示切换
  swiperTab: function (e) {
    var that = this;
    var query = wx.createSelectorQuery();
    if (that.data.currentTab==0){
      query.select('.winHeight').boundingClientRect(function (rect) {
        // console.log(rect.width)
        that.setData({
          height: rect.height + 'px'
        })
      }).exec();
    }else{
      query.select('.winHeight1').boundingClientRect(function (rect) {
        // console.log(rect.width)
        that.setData({
          height: rect.height + 'px'
        })
      }).exec();
    }
    
    
    that.setData({
      currentTab: e.detail.current
    });
  },
  //点击切换
  clickTab: function (e) {
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