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
// 也用于获得指定影院的热映电影
const movieGetHottheaterService = (id) => {
  return request.get('/api/v1/carousels', { id })
}
// 获得轮播图
const movieGetCarouselsService = () => {
  return request.get('/api/v1/carousels')
}
// 搜索电影
const movieSearchService = (info) => {
  return request.get('/api/v1/movies', { info })
}
// 新增电影
const movieAddService = (obj) => {
  return request.post('/api/v1/admin/add-movie', {
    chinese_name: obj.name,
    english_name: obj.engName,
    category_id: obj.category,
    area: obj.area,
    show_time: obj.date,
    duration: obj.duration,
    directors: obj.directors,
    actors: obj.actors,
    introduction: obj.intro,
    movie_img: obj.movie_img,
    director_img: obj.director_img,
    actor_img: obj.actor_img
  })
}

export {
  movieGetHotService,
  movieGetUnreleasedService,
  movieGetAllService,
  movieGetCarouselsService,
  movieAddService,
  movieGetHottheaterService,
  movieSearchService
}
