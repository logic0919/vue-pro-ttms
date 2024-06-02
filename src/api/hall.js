import request from '@/utils/request'
// 添加演出厅
const hallAddService = (obj) => {
  return request.post('/hall/create', obj)
}
// 查找某个影院的影厅列表
const hallGetListService = (id) => {
  return request.post('/halls', id)
}
// 查找某个演出厅的信息
const hallGetService = (id) => {
  return request.get('/hall', id)
}
// 修改某个影厅的信息
const hallChangeService = (obj) => {
  return request.post('/hall/update', obj)
}
// 删除影厅
const hallDelService = (id) => {
  return request.delete('/hall/delete', id)
}
export {
  hallAddService,
  hallGetListService,
  hallGetService,
  hallChangeService,
  hallDelService
}
