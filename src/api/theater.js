import request from '@/utils/request'
// 添加演出厅
const theaterAddService = (obj) => {
  return request.post('/api/v1/hot-movies', {
    name: obj.name,
    address: obj.place
  })
}
export { theaterAddService }
