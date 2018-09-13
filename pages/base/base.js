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
    ]
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
  }
})