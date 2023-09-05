/* eslint-disable newline-per-chained-call */
// 获取对象类型
export const typeName = (val: any) => Object.prototype.toString.call(val).slice(8, -1).toLowerCase()
// 类型匹配
export const isType = (val: any, typeName: String) => Object.prototype.toString.call(val).slice(8, -1).toLowerCase() === typeName
// 控制判断
export const isEmpty = (val: any) => {
  if (isType(val, 'null')) return !0
  if (isType(val, 'function')) return !0
  if (isType(val, 'undefined')) return !0
  if (isType(val, 'string') && val.trim().length === 0) return !0
  if (isType(val, 'array') && val.length === 0) return !0
  if (isType(val, 'object') && Object.keys(val).length === 0) return !0
  if (isType(val, 'number') && isNaN(val)) return !0
  if (isType(val, 'string') && val.length === 0) return !0
  return !1
}