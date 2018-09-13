Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: 'hello,wfb',
    flag: true,
    lists: [
      { name: '商品1' },
      { name: '商品2' },
      { name: '商品3' },
      { name: '商品4' },
    ],
    condition: Math.floor(Math.random() * 3 + 1),
    users: {
      name: 'wfb',
      phone: 18682253462,
      address: '深圳福田'
    }
  },

  /**
   * 生命周期函数--监听页面加载,只加载一次
   */
  onLoad: function (options) {
    console.log('onLoad', options)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady')
  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload')
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