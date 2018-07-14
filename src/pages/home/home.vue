<template>
    <div class="home-pages">
        <el-row type="flex" 
                justify="space-around">
            <el-col :span="10">
                <div id="homeBlockEchart" 
                     class="chart-wrap left-chart"></div>
            </el-col>
            <el-col :span="10">
                <div id="homeLineEchart" 
                     class="chart-wrap right-chart"></div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import echart from 'echarts'
export default{
    data(){
        return{
            form:{},
            blockOption:{
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                legend: {
                    data:['销量']
                },
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }
                ]
            },
            lineOption:{
                title: {
                    text: 'ECharts 折线图',
                    textStyle:{
                        color:'#666'
                    }
                },
                tooltip: {},
                legend: {
                    data:['销量']
                },
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line'
                }]
            }
        }
    },
    mounted(){
        let blockCharts=echart.init(document.getElementById('homeBlockEchart'))
        blockCharts.setOption(this.blockOption)
        let lineCharts=echart.init(document.getElementById('homeLineEchart'))
        lineCharts.setOption(this.lineOption)
    }
}
</script>
<style lang="less">
    .home-pages{
        width:100%;
        margin-top:20px;
        .chart-wrap{
            border:1px solid #ddd;
            height:400px;
        }
    }
</style>
