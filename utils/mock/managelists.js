// 导入数据模块的包and导入随机数模块
import Mock from 'mockjs'

//创建自定义mock函数,这里大概就是通过函数返回值来实现数据的返回
Mock.Random.extend({
    //自定义函数名：food
    // food: function(){
    //     const arr = ['大辣鸡犬','小辣鸡犬','不大不小的辣鸡犬','70kg辣鸡犬','万能的辣鸡犬','搞事的辣鸡犬']
    //     return this.pick(arr)
    // }
})
// 通过Mock.mock函数模拟get请求
Mock.mock('/api/managelists', 'get', {
  status: 200,
  message: '获取商品列表成功',
  'data|5-10': [{ // 5-10随机生成5~10个数据
    'id|+1': 0,
    name: '@cword(2,3)', // 生成中文汉字，word生成英文汉字
    name2: '@cword(2,3)', // 生成中文汉字，word生成英文汉字
    ordernum:'OS2018090200001',
    time:'2019-2-15 10:30',
    state:'经理审核中',
    sex:'女',
    phone:'15021897306',
    attribute:'零售',
    desc:'蒙迪欧 插电混动2.0L E-CVT智尚版2018最新2018最新2018最新',
    number:3,
    img: 'https://raw.githubusercontent.com/moon-ice/Typora-source/master/typora202005/15/163649-643563.png'
  }]
})