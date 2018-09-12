Page({
  data: {
    message: 'hello,wfb',
    flag: true,
    lists: [
      {name: '商品1'},
      { name: '商品2' },
      { name: '商品3' },
      { name: '商品4' },
    ],
    condition: Math.floor(Math.random()*3+1),
    users: {
      name: 'wfb',
      phone: 18682253462,
      address: '深圳福田'
    }
  }
})