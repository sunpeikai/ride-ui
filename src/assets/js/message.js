import ElementUI from 'element-ui'
export function errorMsg (message) { // 输出错误信息
  ElementUI.MessageBox.alert(message, '错误', { // 第一个参数是内容，第二个参数是标题
    confirmButtonText: '确定',
    type: 'error',
    closeOnPressEscape: true
  })
}
export function warnMsg (message) {
  ElementUI.MessageBox.alert(message, '警告', { // 第一个参数是内容，第二个参数是标题
    confirmButtonText: '确定',
    type: 'warning',
    closeOnPressEscape: true
  })
}
export function infoMsg (message) {
  ElementUI.MessageBox.alert(message, '信息', { // 第一个参数是内容，第二个参数是标题
    confirmButtonText: '确定',
    type: 'info',
    closeOnPressEscape: true
  })
}
export function successMsg (message) {
  ElementUI.MessageBox.alert(message, '成功', { // 第一个参数是内容，第二个参数是标题
    confirmButtonText: '确定',
    type: 'success',
    closeOnPressEscape: true
  })
}
export default {
  successMsg,
  infoMsg,
  warnMsg,
  errorMsg
}
