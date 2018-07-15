export function sex(val){
    return val === 1?'男':'女'
}
export function accountType(val){
    return val === 0 ?'普通用户':val === 1?'管理员':'超级管理员'
}
export function timestampTransform(val){
    let date=new Date(val);
    let month=date.getMonth()+1<10?'0'+(date.getMonth()+1):date.getMonth()+1;
    let day=date.getDate()<10?'0'+date.getDate():date.getDate();
    let hour=date.getHours()<10?'0'+date.getHours():date.getHours();
    let minute=date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes();
    let second=date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds();
    return date.getFullYear()+'-'+month+'-'+day+' '+hour+':'+minute+':'+second
}
