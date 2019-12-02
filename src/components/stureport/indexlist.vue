<template>
  <el-form :inline="true" label-width="80px" >
    <ul style="padding: 0px">
      <li v-for="item in items" :key="item.id" style="padding: 0px;text-decoration:underline;list-style-type:none;">
        <el-col :span="4" style="text-align:center;width:15%;padding:0px;">
          <div>{{ item.desc }}</div>
          <el-tag type="info" style="width:80%;">{{ item.content }}</el-tag>
        </el-col>
      </li>
    </ul>
  </el-form>
</template>

<script>
export default {
  name: 'Indexlist',
  props: { 'data': {
    type: Array,
    default: []
  }},
  data() {
    return {
      left: 0,
      loading: false,
      items: this.data,
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
    this.init()
  },
  methods: {
    init() {
      this.loading = true
      this.items = this.testItems
      this.loading = false
    },
    sleep(sleepTime) {
      for (var start = new Date(); new Date() - start <= sleepTime;) {
        console.log('')
      }
    }
  }
}
</script>
<style scoped>

</style>
