import request from '@/utils/request'
// 创建订单
const orderSetService = (obj) => {
  return request.get('/api/v1/submit-order', {
    user_id: obj.user,
    movie_id: obj.movie,
    session_id: obj.session,
    seat_id: obj.seat,
    num: obj.num,
    type: obj.type
  })
}
// 获取某个订单
const orderGetService = (order_id) => {
  return request.get('/api/v1/order', {
    order_id
  })
}
// 获取所有订单
export { orderSetService, orderGetService }
