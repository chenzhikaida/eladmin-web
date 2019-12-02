import request from '@/utils/request'

/**
 * 工厂方法，通过方法名称返回对应函数
 */
export function reportIndexfactory(methodName) {
  if (methodName === 'test') {
    return test
  }
  if (methodName === 'getSchoolName') {
    return getSchoolName
  }
  if (methodName === 'getUserName') {
    return getUserName
  }
  if (methodName === 'getCourseName') {
    return getCourseName
  }
  if (methodName === 'getLessonName') {
    return getLessonName
  }
  if (methodName === 'getTopticName') {
    return getTopticName
  }
}

export function test() {
  alert('hello world')
}

// 获取所有的校区
export function getSchoolName() {
  return request({
    url: 'http://localhost:8000/api/reportSelect/getSchoolName',
    method: 'get'
  })
}

// 获取所有的用户
export function getUserName() {
  return request({
    url: 'http://localhost:8000/api/reportSelect/getUserName',
    method: 'get'
  })
}

// 获取所有的课程
export function getCourseName() {
  return request({
    url: 'http://localhost:8000/api/reportSelect/getCourseName',
    method: 'get'
  })
}

// 获取所有的课次
export function getLessonName() {
  return request({
    url: 'http://localhost:8000/api/reportSelect/getLessonName',
    method: 'get'
  })
}

// 获取所有的专题
export function getTopticName() {
  return request({
    url: 'http://localhost:8000/api/reportSelect/getTopticName',
    method: 'get'
  })
}

