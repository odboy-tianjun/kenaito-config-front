import request from '@/utils/requestDevops'

export function queryPage(data) {
  return request({
    url: 'kenaito-config/app/queryPage',
    method: 'post',
    data: data
  })
}
