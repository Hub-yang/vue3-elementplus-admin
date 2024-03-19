import type { ReqUserParams, ResDepartment, ResGender, ResPage, ResRole, ResStatus, ResUserList } from '@/api/interface/index'
import { PORT1 } from '@/api/config/servicePort'
import http from '@/api'

/**
 * @name 用户管理模块
 */
// 获取用户列表
export function getUserList(params: ReqUserParams) {
  return http.post<ResPage<ResUserList>>(`${PORT1}/user/list`, params)
}

// 获取树形用户列表
export function getUserTreeList(params: ReqUserParams) {
  return http.post<ResPage<ResUserList>>(`${PORT1}/user/tree/list`, params)
}

// 新增用户
export function addUser(params: { id: string }) {
  return http.post(`${PORT1}/user/add`, params)
}

// 批量添加用户
export function BatchAddUser(params: FormData) {
  return http.post(`${PORT1}/user/import`, params)
}

// 编辑用户
export function editUser(params: { id: string }) {
  return http.post(`${PORT1}/user/edit`, params)
}

// 删除用户
export function deleteUser(params: { id: string[] }) {
  return http.post(`${PORT1}/user/delete`, params)
}

// 切换用户状态
export function changeUserStatus(params: { id: string, status: number }) {
  return http.post(`${PORT1}/user/change`, params)
}

// 重置用户密码
export function resetUserPassWord(params: { id: string }) {
  return http.post(`${PORT1}/user/rest_password`, params)
}

// 导出用户数据
export function exportUserInfo(params: ReqUserParams) {
  return http.download(`${PORT1}/user/export`, params)
}

// 获取用户状态字典
export function getUserStatus() {
  return http.get<ResStatus[]>(`${PORT1}/user/status`)
}

// 获取用户性别字典
export function getUserGender() {
  return http.get<ResGender[]>(`${PORT1}/user/gender`)
}

// 获取用户部门列表
export function getUserDepartment() {
  return http.get<ResDepartment[]>(`${PORT1}/user/department`, {}, { cancel: false })
}

// 获取用户角色字典
export function getUserRole() {
  return http.get<ResRole[]>(`${PORT1}/user/role`)
}
