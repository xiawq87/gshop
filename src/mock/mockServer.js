import Mock from 'mockjs'
import data from './data'

Mock.mock('/shopGoods', {code: 0, data: data.goods})

Mock.mock('/shopComment', {code: 0, data: data.ratings})

Mock.mock('/shopInfo', {code: 0, data: data.info})
