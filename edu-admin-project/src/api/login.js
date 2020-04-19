import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/auth/login', //看接口方法中定义的路径url
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/auth/info', //看接口方法中定义的路径url
    method: 'get',
    params: {
      token
    }
  })
}

export function logout() {
  return request({
    url: '/auth/logout', //看接口方法中定义的路径url
    method: 'post'
  })
}
