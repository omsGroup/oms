<template>
    <div class="finance-pages">
        <tablelist ref="tableList"
                   :page-title="'财务信息'"
                   :search-title="'财务信息搜索条件'"
                   :form="form"
                   :data="[{orderID:'20180715222',nickname:'奥特曼',id:'13338',name:'张张',phone:'15263521452',type:'送礼',account:'-88',unit:'迷豆',time:'2018-07-15'},
                           {orderID:'20180715233',nickname:'小怪兽',id:'13338',name:'王王',phone:'15263521452',type:'收礼',account:'88',unit:'球币',time:'2018-07-15'}]"
                   :search-param="[{label:'昵称',prop:'nickname'},
                                   {label:'手机号码',prop:'phone'},
                                   {label:'真实姓名',prop:'name'},
                                   {label:'ID',prop:'id'},
                                   {label:'订单号',prop:'orderID'},
                                   {label:'交易类型',prop:'type',type:'select',options:[{value:1,name:'全部'}]},
                                   {label:'货币单位',prop:'unit',type:'select',options:[{value:1,name:'全部'}]}]"
                   :button-group="buttons"
                   :table-type="[{label:'订单号',prop:'orderID',minWidth:120},
                                 {label:'昵称',prop:'nickname',minWidth:80},
                                 { label:'ID',prop:'id',minWidth:80},
                                 {label:'姓名',prop:'name',minWidth:80},
                                 {label:'手机',prop:'phone',minWidth:120},
                                 {label:'交易类型',prop:'type',minWidth:80},
                                 {label:'账户变动',prop:'account',minWidth:80},
                                 {label:'货币单位',prop:'unit',minWidth:80},
                                 {label:'交易时间',prop:'time',minWidth:80}]" 
                   @getData="getData" 
                   @handleButton="handleButton"/> 
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
            },
            buttons:[
                {label:'查询',methods:'search'},
                {label:'重置',methods:'reset'},
                {label:'下载报表',methods:'download'}
            ]
        }
    },
    methods:{
        getData(){
            this.$message.success('get data')
        },
        handleButton(){
            this.$message.success('handle button')
        }
    }
}
</script>
