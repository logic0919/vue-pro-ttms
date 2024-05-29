import request from '@/utils/request'
// 获得热映电影
const movieGetHotService = (obj) => {
  return request.get('/api/v1/hot-movies', {
    // 默认全部，第一页，十个
    page_size: obj.page + '' || '30',
    page_num: obj.num + '' || '1',
    category_id: obj.id + '' || '0'
  })
}
// 获得即将上映电影
const movieGetUnreleasedService = (obj) => {
  return request.get('/api/v1/unreleased-movies', {
    // 默认全部，第一页，十个
    page_size: obj.page + '' || '30',
    page_num: obj.num + '' || '1',
    category_id: obj.id + '' || '0'
  })
}
// 获得全部电影
const movieGetAllService = (obj) => {
  return request.get('/api/v1/all-movies', {
    // 默认全部，第一页，十个
    page_size: obj.page + '' || '30',
    page_num: obj.num + '' || '1',
    category_id: obj.id + '' || '0'
  })
}

export { movieGetHotService, movieGetUnreleasedService, movieGetAllService }
