
/**
 * @param {String} num 手机号
 * 13901234567 => 139****4567
 */
let telHide = num => {
  let data = num.replace(/(\d{3})\d{4}(\d*)/, '$1****$2')
  return data
}

export {
  telHide
}
