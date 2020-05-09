export function correctEmail (email) { // email校验，正确的email返回true，否则返回false
  var emailRegex = '^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$'
  if (email.search(emailRegex)) {
    return false
  }
  return true
}
export function correctMobile (email) { // mobile校验，正确的mobile返回true，否则返回false
  var emailRegex = '/^((13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8})$/'
  if (email.search(emailRegex)) {
    return false
  }
  return true
}

export default {
  correctEmail,
  correctMobile
}
