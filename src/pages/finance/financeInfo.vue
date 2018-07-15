<template>
    <div class="finance-pages">
        <tablelist ref="tableList"
                   :form="form"
                   :data="[{orderID:'20180715222',nickname:'奥特曼',id:'13338',name:'张张',phone:'15263521452',type:'送礼',account:'-88',unit:'迷豆',time:'2018-07-15'},{orderID:'20180715233',nickname:'小怪兽',id:'13338',name:'王王',phone:'15263521452',type:'收礼',account:'88',unit:'球币',time:'2018-07-15'}]"
                   :search-param="[{label:'昵称',prop:'nickname'},
                                   {label:'手机号码',prop:'phone'},
                                   {label:'真实姓名',prop:'name'},
                                   {label:'ID',prop:'id'},
                                   {label:'订单号',prop:'orderID'},
                                   {label:'交易类型',prop:'type',type:'select',options:[{value:1,name:'全部'}]},
                                   {label:'货币单位',prop:'unit',type:'select',options:[{value:1,name:'全部'}]}]"
                   :button-group="[{label:'查询',methods:'search'},
                                   {label:'重置',methods:'reset'},
                                   {label:'下载报表',methods:'download'}]"
                   :table-type="[{label:'订单号',prop:'orderID'},
                                 {label:'昵称',prop:'nickname'},
                                 { label:'ID',prop:'id'},
                                 {label:'姓名',prop:'name'},
                                 {label:'手机',prop:'phone'},
                                 {label:'交易类型',prop:'type'},
                                 {label:'账户变动',prop:'account'},
                                 {label:'货币单位',prop:'unit'},
                                 {label:'交易时间',prop:'time'}]"/> 
    </div>
</template>
<script>
import tablelist from '../../components/tableList.vue'
export default{
    components:{
        tablelist
    },
    data(){
        return{
            form:{
                nickname:'',
                phone:'',
                name:'',
                id:'',
                orderID:'',
                type:'',
                unit:''
            }
        }
    }
}
</script>
