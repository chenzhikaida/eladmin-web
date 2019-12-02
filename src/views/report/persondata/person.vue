<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="学习数据概览">
        <div>
          <selectlist/>
          <div style="clear: both"/>
        </div>
        <div class="chartContainer" style="margin-top:20px;">
          <el-row>
            <indexlist :data="testItems"/>
          </el-row>
          <el-row>
            <el-col id="container" :span="12" width="100%">
              <div id="myChart" style="width: 700px;height:400px;"/>
            </el-col>
            <el-col :span="12" width="100%">
              <div id="myChart2" style="width: 700px;height:400px;"/>
            </el-col>
          </el-row>
        </div>
      </el-tab-pane>
      <el-tab-pane label="知识点数据概览">知识点数据概览</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import indexlist from '@/components/stureport/indexlist'
import selectlist from '@/components/stureport/selectlist'

export default {
  name: 'Person',
  components: { indexlist, selectlist },
  data() {
    return {
      activeName: 'first',
      testItems: [
        { code: '', desc: '课程数', content: '958' },
        { code: '', desc: '课次数', content: '7775' },
        { code: '', desc: '累计天数', content: '297' },
        { code: '', desc: '做题知识点数', content: '5417' },
        { code: '', desc: '累计做题题量', content: '37,685,870' },
        { code: '', desc: '做题知识点数', content: '5417' },
        { code: '', desc: '课程数', content: ' 2,370,299' },
        { code: '', desc: '课程数', content: '958' },
        { code: '', desc: '课次数', content: '7775' },
        { code: '', desc: '累计天数', content: '297' },
        { code: '', desc: '做题知识点数', content: '5417' },
        { code: '', desc: '累计做题题量', content: '37,685,870' },
        { code: '', desc: '做题知识点数', content: '5417' },
        { code: '', desc: '课程数', content: ' 2,370,299' }
      ]
    }
  },
  mounted() {
    this.draw('myChart')
    this.draw('myChart2')
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    draw(domElement) {
      console.log(domElement)
      var container = document.getElementById(domElement)
      this.resizeWorldMapContainer(container)
      this.initData(container)
    },
    initData(container) {
      // 基于准备好的dom，初始化echarts实例
      const myChart = this.$echarts.init(container, { width: '750px' })
      // 绘制图表
      myChart.setOption({
        title: { text: '在Vue中使用echarts' },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
      myChart.resize()
    },
    resizeWorldMapContainer(container) {
    }
  }
}

</script>

<style scoped>

</style>
