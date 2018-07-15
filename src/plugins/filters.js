export function sex(val){
    return val === 1?'男':'女'
}
export function accountType(val){
    return val === 0 ?'普通用户':val === 1?'管理员':'超级管理员'
}
export function timestampTransform(val){
    let date=new Date(val);
    return date.getFullYear()+'-'+checkTen(date.getMonth()+1)+'-'+checkTen(date.getDate())+' '+checkTen(date.getHours())+':'+checkTen(date.getMinutes())+':'+checkTen(date.getSeconds())
}
function checkTen(val){
    return val<10?'0'+val:val
}
