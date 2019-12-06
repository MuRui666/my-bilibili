Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 0,
    navScrollLeft:0,
    clientHeight:0,
    contentList:[],
    navList: [],
    swiperList: [],
    vedioList: []
  },
  activeNav(e) {
    this.setData({
      currentIndex: e.currentTarget.dataset.index,
      navScrollLeft: e.detail.current >= 5 ? ((e.detail.current) * 80) : 0
    })
  },
  getHeight(){
    let that = this
    let num = Math.ceil(this.data.vedioList.length / 2)*200
    // wx.getSystemInfo({ 
    //   success:function(res){
        that.setData({
          clientHeight: num
        })
    //   }
    // })
  },
  changeTab(e){
    this.setData({
      currentIndex: e.detail.current,
      navScrollLeft: e.detail.current>=5?((e.detail.current) * 80):0
    })
  },
  // 获取nav
  getNavList() {
    let _this = this
    wx.request({
      url: "https://mockapi.eolinker.com/7b7NMB9c75d613bc39c8f16e4e03a3d4a8f951750079dc5/navList",
      success(res) {
        if (res.data.code === 0) {
          _this.setData({
            navList: res.data.data.navList,
          })
        }
        let newList = _this.data.navList.filter(i=>{
          return i.id!==0
        })
        _this.setData({
          contentList:newList
        })
      }
    })
  },
  // 获取轮播图
  getNavImg() {
    let _this = this
    wx.request({
      url: "https://mockapi.eolinker.com/7b7NMB9c75d613bc39c8f16e4e03a3d4a8f951750079dc5/Swiper",
      success(res) {
        if (res.data.code === 0) {
          _this.setData({
            swiperList: res.data.data.swiperList
          })
        }
      }
    })
  },
  // 获取视屏列表
  getVideo() {
    let _this = this
    wx.request({
      url: 'http://mock-api.com/ZgYvyYnN.mock/api/videoList ',
      success(res) {
        _this.setData({
          vedioList: res.data
        })
        _this.getHeight()
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getNavList()
    this.getNavImg()
    this.getVideo()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    wx.startPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    wx.startPullDownRefresh()

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})