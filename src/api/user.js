import request from '@/utils/request'

// 这里是关于注册登录
const userRegisterService = (obj) => {
  console.log('注册api')
  console.log(obj)
  return request.post('/api/v1/user/register', {
    nick_name: obj.name,
    password: obj.pwd,
    email: obj.email
  })
}
const userLoginService = (obj) => {
  console.log('登录api')
  console.log(obj.pwd)
  return request.post('/api/v1/user/login', {
    user_id: obj.id,
    password: obj.pwd
  })
}
// 修改昵称
const userUpdateService = (name, token) => {
  console.log('修改昵称api')
  return request.put(
    '/api/v1/user',
    { nick_name: name },
    {
      headers: {
        Authorization: token
      }
    }
  )
}
// 修改图像
const userUpdateAvatarService = (file, token) => {
  console.log('修改图像api')
  console.log(file)
  console.log(token)
  return request.post(
    '/api/v1/avatar',
    { file: file },
    {
      headers: {
        Authorization: token,
        'Content-Type': 'multipart/form-data'
      }
    }
  )
}
// 发送验证码
const userSendEmailService = (obj) => {
  console.log('发送邮箱api')
  return request.post('/api/v1/user/sending-email', {
    email: obj.email,
    operation_type: obj.opea
  })
}
// 验证验证码
const userVerifyEmailService = (token) => {
  console.log('验证邮箱api' + token)
  return request.post('/api/v1/user/valid-email', null, {
    headers: {
      Authorization: token
    }
  })
}
const userTestService = () => {
  console.log('get请求')
  return request.get('/api/v1/carousels')
}
export {
  userRegisterService,
  userLoginService,
  userUpdateService,
  userUpdateAvatarService,
  userSendEmailService,
  userVerifyEmailService,
  userTestService
}
