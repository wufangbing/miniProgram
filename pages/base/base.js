Page({
  data: {
    nodes: [
      {
        name: 'h1',
        attrs: {
          style: 'color: red'
        },
        children: [{
          type: 'text',
          text: 'hello,richtext'
        }]
      }
    ],
    checkList: ['美国', '中国', '德国'],
    inputValue: 'hehe',
    isfocus: false,
    rangeList: ['美国', '中国', '巴西', '日本'],
  },
  bind(e) {
    console.log(e)
  },
  getContactInfo(e) {
    console.log(e)
  },
  getUserInfo(e) {
    console.log(e)
  },
  getUserPhone(e) {
    console.log(e)
  },
  changeCheck(e) {
    console.log(e)
  },
  submit(e) {
    console.log(e)
  },
  bindReplaceInput: function (e) {
    console.log(e)
    var value = e.detail.value
    var pos = e.detail.cursor
    var left
    if (pos !== -1) {
      // 光标在中间
      left = e.detail.value.slice(0, pos)
      // 计算光标的位置
      pos = left.replace(/11/g, '2').length
    }
    // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return {
      value: value.replace(/11/g, '2'),
      cursor: pos
    }
  },
  inputchange(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  clickfocus() {
    this.setData({
      isfocus:true
    })
  }
})