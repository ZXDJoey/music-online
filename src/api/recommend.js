import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

// export function getDiscList() {
//   const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'

//   const data = Object.assign({}, commonParams, {
//     platform: 'yqq',
//     sin: 0,
//     ein: 0,
//     sortId: 5,
//     needNewCode: 0,
//     categotyId: 10000000,
//     rnd: Math.random()
//   })

//   return jsonp(url, data, options)
// }