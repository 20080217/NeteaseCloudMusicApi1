// 歌曲链接 - v1
// 此版本不再采用 br 作为音质区分的标准
// 而是采用 standard, exhigh, lossless, hires, jyeffect(高清环绕声), sky(沉浸环绕声), jymaster(超清母带) 进行音质判断

const crypto = require('crypto')
module.exports = (query, request) => {
  query.cookie.os = 'android'
  query.cookie.appver = '8.10.05'
  query.cookie.custom = '_ga=GA1.1.2118325875.1688024288; MUSIC_U=00BDC34861C05A3A4F44814D8721A8A5C083835FBE0AF99654131A0356F7CBAB04A37E75390877F6384D5F91E43A1BA3CE8180C24C9714E535026C357E5995E3C3732F3FC02062E6755644BAC9ADC9461D01C3134599FCDCA99C17E6C088E5B5B094416CF7C36CA185A0BB330D8A520DF71B03CDE9B657E33A5292A23745D1C8136C3ECC034986C1E72FB9DE29914157565620F604EA0D5D2233E221CFC50BC810D9771DA2EC8D887107049AAA563561FEF6FF34D3849486E9691421AE1E3438AD29BA739F753A5CBF9ACCFF80D8FA708B; __csrf=7610a20f9bbe63ac33a532e83b61bf32;_ga_KMJJCFZDKF=GS1.1.1692711353.132.1.1692711354.0.0.0; NMTID=00O2Vw9_BcqGVKZ-U1GsusJSvUhZdMAAAGKHXtT-w';
  const data = {
    ids: '[' + query.id + ']',
    level: query.level,
    encodeType: 'flac',
  }
  if (data.level == 'sky') {
    data.immerseType = 'c51'
  }
  console.log(data)
  return request(
    'POST',
    `https://interface.music.163.com/eapi/song/enhance/player/url/v1`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: '/api/song/enhance/player/url/v1',
    },
  )
}
