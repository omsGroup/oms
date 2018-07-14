<template>
    <div class="user-info-pages">
        <tablelist ref="tableList"
                   :form="form"
                   :data="[{rank:1,realName:'奇侠绝情剑',mobile:'13823185776',bgPic:'../assets/images/056f814a17e86151a306028bee30add4.png',status:'正常',chargeTime:'2018-07-12'},
                           {rank:1,realName:'奇侠绝情剑',mobile:'13823185776',bgPic:'../assets/images/timg.jpeg',status:'正常',chargeTime:'2018-07-12'}]"
                   :search-param="[{label:'用户ID',prop:'id'},
                                   {label:'手机号',prop:'mobile'},
                                   {label:'真实姓名',prop:'realName'},
                                   {label:'用户状态',prop:'userStatus',type:'select',options:[{value:1,name:'正常'},{value:2,name:'禁言'}]},
                                   {label:'查询日期',prop:'pickTime',type:'dataPicker'}]"
                   :button-group="[{label:'搜索',methods:'search'},{label:'重置',methods:'reset'}]"
                   :table-type="[{label:'排名',prop:'rank'},
                                 {label:'姓名',prop:'realName'},
                                 {label:'手机号',prop:'mobile'},
                                 {label:'背景图',prop:'bgPic',type:'img'},
                                 {label:'状态',prop:'status'},
                                 {label:'充值时间',prop:'chargeTime'}]"/>
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
                id:'',
                mobile:'',
                realName:'',
                userStatus:'',
                pickTime:''
            }
        }
    },
    mounted(){

    },
    methods:{

    }
}
</script>   
