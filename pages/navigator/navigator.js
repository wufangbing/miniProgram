Page({
  data:{
    latitude: 22.540822,
    longitude: 113.934457,
    scale: 16,
    markers: [{
      latitude: 22.540822,
      longitude: 113.934457,
      name: '腾讯大厦',
      callout: {
        content: '气泡气泡气泡',
        color: '#fff',
        fontSize: 15,
        borderRadius: 10,
        bgColor: '#000',
        display: 'ALWAYS'
      },
      label: {
        content: '这是腾讯大厦',
        color: '#333',
        x: 4, 
        y: 0,
        borderWidth: 1,
        borderColor: '#000',
        borderRaddius: 5,
        bgColor: '#fff',
        padding: 2,
        textAlign: 'center'
      }
    }]
  },
  loadImage(e) {
    console.log(e)
  },
  regionchange(e) {
    // console.log(e)
  }, 
  clickmap(e) {
    console.log(e)
  },
})