<template>
    <div class="authority-management-pages">
        <list :page-title="'权限管理'" 
              :search-title="'权限管理搜索条件'"
              :form="form"
              :table-selection="true"
              :data="[{userId:'138',realName:'BWW',age:'29',sex:1,mobile:'13823185776',address:'上海宝山艺康苑88弄99号601',idCard:'320381198902142119',accountType:1,registTime:'2018-06-18'},
                      {userId:'138',realName:'BWW',age:'29',sex:1,mobile:'13823185776',address:'上海宝山艺康苑88弄99号601',idCard:'320381198902142119',accountType:1,registTime:'2018-06-18'},
                      {userId:'138',realName:'BWW',age:'29',sex:1,mobile:'13823185776',address:'上海宝山艺康苑88弄99号601',idCard:'320381198902142119',accountType:1,registTime:'2018-06-18'},
                      {userId:'138',realName:'BWW',age:'29',sex:1,mobile:'13823185776',address:'上海宝山艺康苑88弄99号601',idCard:'320381198902142119',accountType:1,registTime:'2018-06-18'},
                      {userId:'138',realName:'BWW',age:'29',sex:1,mobile:'13823185776',address:'上海宝山艺康苑88弄99号601',idCard:'320381198902142119',accountType:1,registTime:'2018-06-18'},
                      {userId:'138',realName:'BWW',age:'29',sex:1,mobile:'13823185776',address:'上海宝山艺康苑88弄99号601',idCard:'320381198902142119',accountType:1,registTime:'2018-06-18'},
                      {userId:'138',realName:'BWW',age:'29',sex:1,mobile:'13823185776',address:'上海宝山艺康苑88弄99号601',idCard:'320381198902142119',accountType:1,registTime:'2018-06-18'},
                      {userId:'138',realName:'BWW',age:'29',sex:1,mobile:'13823185776',address:'上海宝山艺康苑88弄99号601',idCard:'320381198902142119',accountType:1,registTime:'2018-06-18'},]"
              :search-param="[{label:'用户ID',prop:'userId'},
                              {label:'身份',prop:'userIdentity',type:'select'}]" 
              :button-group="[{label:'搜索',methods:'search'},
                              {label:'重置',methods:'reset'}]" 
              :table-type="[{label:'用户ID',prop:'userId',minWidth:70},
                            {label:'真实姓名',prop:'realName',minWidth:70},
                            {label:'年龄',prop:'age',minWidth:70},
                            {label:'性别',prop:'sex',minWidth:70,filter:'sex'},
                            {label:'手机号',prop:'mobile',minWidth:120},
                            {label:'住址',prop:'address',minWidth:180},
                            {label:'身份证号',prop:'idCard',minWidth:150},
                            {label:'账号类型',prop:'accountType',minWidth:110},
                            {label:'注册时间',prop:'registTime',minWidth:130}]" 
              :table-option="[{label:'设置管理员',methods:'setManage',span:6},
                              {label:'设置超级管理员',methods:'setSuperManage',span:6},
                              {label:'取消管理员',methods:'dropManage',type:'danger',span:6}]" 
              :table-option-width="350"/>
    </div>
</template>
<script>
import list from '../../components/tableList.vue'
export default{
    components:{
        list
    },
    data(){
        return{
            form:{
                
            }
        }
    }
}
</script>
