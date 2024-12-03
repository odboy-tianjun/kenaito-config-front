import request from '@/utils/requestDevops'

export function queryList(data) {
  return request({
    url: 'kenaito-config/user/pageList',
    method: 'post',
    data: data
  })
}
