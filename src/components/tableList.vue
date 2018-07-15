<template>
    <div class="table-list-pages">
        <div class="list-title">{{ pageTitle }}</div>
        <div class="list-search-form">{{ searchTitle }}</div>
        <el-form v-if="searchParam"
                 label-width="90px">
            <el-row>
                <el-col v-for="(item,index) in searchParam" 
                        :key="index" 
                        :label="item.label"
                        :lg="6"
                        :md="12"
                        :sm="12"
                        :xs="23">
                    <el-form-item :label="item.label">
                        <el-input v-if="item.type === undefined || item.type === 'input'" 
                                  v-model="searchForm[item.prop]" 
                                  size="mini"/>
                        <el-select v-if="item.type === 'select'" 
                                   v-model="searchForm[item.prop]"
                                   size="mini" 
                                   @change="searchChange" >
                            <el-option v-for="(items,indexs) in item.options" 
                                       :key="indexs"
                                       :label="items.name"
                                       :value="items.value"></el-option>
                        </el-select>
                        <el-date-picker v-else-if="item.type === 'dataPicker'" 
                                        type="daterange" 
                                        size="mini"></el-date-picker>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <div v-if="buttonGroup"
             class="button-group">
            <el-button v-for="(item,index) in buttonGroup" 
                       :key="index" 
                       :type="item.type?item.type:'primary'"
                       size="mini">{{ item.label }}</el-button>
        </div>
        <div v-if="tableType"
             class="table-body">
            <el-table :data="data" 
                      :highlight-current-row="true"
                      :stripe="true"
                      style="width:100%"
                      size="mini" 
                      border 
                      @selection-change="handleSelectionChange">
                <el-table-column v-if="tableSelection" 
                                 type="selection" 
                                 width="55"></el-table-column>
                <el-table-column v-for="(item,index) in tableType" 
                                 :key="index"
                                 :prop="item.prop"
                                 :label="item.label" 
                                 :min-width="item.minWidth">
                    <template slot-scope="scope">
                        <span v-if="item.filter">
                            {{ scope.row[item.prop] | sex }}
                        </span>
                        <img v-else-if="item.type === 'img'"
                             style="width:100px;height:50px;"
                             src="../assets/images/056f814a17e86151a306028bee30add4.png">
                        <el-select v-if="item.type === 'select'">
                            <el-option value="1">1</el-option>
                            <el-option value="2">2</el-option>
                        </el-select>
                        <el-input v-if="item.type === 'input'"/>
                        <el-checkbox v-if="item.type === 'checkbox'"></el-checkbox>
                        <el-input v-else-if="item.type === 'input'"/>
                        <span v-else>{{ scope.row[item.prop] }}</span>
                    </template>
                </el-table-column>
                <el-table-column v-if="tableOption"
                                 :width="tableOptionWidth"
                                 fixed="right" 
                                 label="操作">
                    <template slot-scope="scope">
                        <el-button v-for="item in tableOption"
                                   :key="item.label"
                                   :type="item.type?item.type:'primary'"
                                   :span="item.span?item.span:6" 
                                   size="mini">{{ item.label }}</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="list-pagination flex-center-center">
            <el-pagination
                :total="totalCount"
                :current-page="1"
                :page-sizes="[10, 30, 50, 100]"
                :page-size="10"
                layout="total, sizes, prev, pager, next, jumper"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange">
            </el-pagination>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'

export default {
    props: {
        tableSelection:{
            type:Boolean,
            default:()=>false
        },
        form:{
            type:Object,
            default:()=>{}
        },
        searchParam: {
            type: Array,
            default: () => []
        },
        buttonGroup:{
            type:Array,
            default:()=>[]
        },
        data:{
            type:Array,
            default:()=>[]
        },
        tableType:{
            type:Array,
            default:()=>[]
        },
        totalCount:{
            type:Number,
            default:()=>0
        },
        pageTitle:{
            type:String,
            default:()=>''
        },
        searchTitle:{
            type:String,
            default:()=>''
        },
        tableOption:{
            type:Array,
            default:()=>[]
        },
        tableOptionWidth:{
            type:Number,
            default:()=>0
        }
    },
    data() {
        return {
            searchForm: this.form
        }
    },
    methods:{
        searchChange(val){
            console.log(this.searchForm)
        },
        handleSizeChange(val){
            console.log(val)
        },
        handleCurrentChange(val){
            console.log(val)
        },
        handleSelectionChange(val){
            console.log(val)
        },
    }
}

</script>
<style lang="less">
.table-list-pages{
    .list-title{
        color:#212d45;
        font-size: 22px;
        padding-bottom: 8px;
        border-bottom: 1px solid #afb9ca;
        margin-bottom:20px;
    }
    .list-search-form{
        height:30px;
        background:#f0f2f7;
        color:#212d45;
        line-height: 30px;
        font-size: 16px;
        padding-left:16px;
        margin-bottom:20px;
    }
    .button-group{
        padding-bottom:15px;
        border-bottom: 1px solid #f0f2f7;
    }
    .table-body{
        margin-top:15px;
    }
    .list-pagination{
        margin-top:15px;
    }
}
.el-select{
    width: 100% !important;
}
.el-range-editor,.el-input__inner{
    width: 100% !important;
}
</style>
