export function sex(val){
    return val === 1?'男':'女'
}
export function accountType(val){
    return val === 0 ?'普通用户':val === 1?'管理员':'超级管理员'
}
