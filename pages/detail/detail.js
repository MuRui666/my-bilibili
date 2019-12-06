// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex:0,
    clientHeight:null,
    videoInfo:{},
    othersList:[],
    commentData:{}
  },
  changeTab(e){
    this.setData({
      currentIndex: e.detail.current
    })
  },
  getHeight(){
    let that = this
    let num = this.data.othersList.length*92
        that.setData({
          clientHeight: num
        })
  },
  getVideo(vedioId){
    let _this = this
    wx.request({
      url: `http://mock-api.com/ZgYvyYnN.mock/api/videoDetail?id=${vedioId}`,
      success(res){
        if (res.statusCode===200){
          _this.setData({
            videoInfo:res.data
          })
        }
      }
    })
  },
  active(e){
    this.setData({
      currentIndex:parseInt(e.currentTarget.dataset.index)
    })
  },
  getOtherVideo(vedioId){
    let  _this = this
    wx.request({
      url:`http://mock-api.com/ZgYvyYnN.mock/api/otherList?id=${vedioId}`,
      success(res){
        if(res.statusCode===200){
          _this.setData({
            othersList:res.data
          })
        }
        _this.getHeight()
      }
    })
  },
  getCommentData(vedioId) {
    let _this = this
    wx.request({
      url: `http://mock-api.com/ZgYvyYnN.mock/api/commentData?id=${vedioId}`,
      success(res) {
        if (res.statusCode === 200) {
          _this.setData({
            commentData: res.data
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      let vedioId = options.id
    this.getVideo(vedioId)
    this.getOtherVideo(vedioId)
    this.getCommentData(vedioId)
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