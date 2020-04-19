import request from '@/utils/request' //模板提供的组件，axios的封装

export default {
  //分页条件查询的方法
  //三个参数：当前页，每页记录数，条件封装对象
  getTeacherPageList(page, limit, searchObj) {
    return request({
      //后端controller的路径
      url: '/edu/teacher/' + page + '/' + limit, //看接口中定义的路径url
      method: 'post',
      //传递条件对象,如果传递json数据，使用data，如果不是json使用parms
      data: searchObj
    })

  },
  //删除讲师信息
  removeById(teacherId) {
    return request({
      url: 'edu/teacher/' + teacherId, //看接口中定义的路径url
      method: 'delete'
    })
  },

  //添加讲师信息
  save(teacher) {
    return request({
      url: '/edu/teacher/',
      method: 'post',
      data: teacher
    })
  }


}
