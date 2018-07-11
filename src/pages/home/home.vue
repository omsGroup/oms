<template>
    <div class="home-pages">
        <div id="homeEchart" 
             style="width:100%;height:400px"></div>
    </div>
</template>
<script>
import echart from 'echarts'
export default{
    data(){
        return{
            form:{},
            option:{
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
            }
        }
    },
    mounted(){
        let myCharts=echart.init(document.getElementById('homeEchart'))
        myCharts.setOption(this.option)
    }
}
</script>
<style lang="less">

</style>
