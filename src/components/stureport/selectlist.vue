<template>
  <el-form :inline="true" label-width="80px" >
    <ul>
      <el-col v-for="item in items" :key="item.id" :span="6" style="text-align:left;padding:0px;">
        <div style="width: 100%;max-width: 100%;">{{ item.label }}</div>
        <li style="padding-right: 20px;text-decoration:underline;list-style-type:none;float:left;width: 100%;max-width: 100%;">
          <el-select
            v-model="value"
            :title="item.apicode"
            multiple
            filterable
            allow-create
            default-first-option
            placeholder="全部"
            style="width: 100%;max-width: 100%;"
            @click.native="callApi(item.apicode)"
          >
            <el-option
              v-for="option in item.options"
              :key="option.id"
              :label="option.value"
              :value="option.id"
              style="width: 100%;max-width: 100%;"
            />
          </el-select>
        </li>
      </el-col>
      <el-col :span="6">
        <div>时间段</div>
        <div class="block">
          <el-date-picker
            :picker-options="pickerOptions"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          />
        </div>
      </el-col>
    </ul>
  </el-form>
</template>
<script>
import { reportIndexfactory } from '@/api/stuReportIndex'
export default {
  name: 'Selectlist',
  props: {
    'datalist': {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      items: this.datalist,
      value: []
    }
  },
  mounted() {
    // 是否可以得到datalist?
  },
  methods: {
    callApi(id) {
      var api = reportIndexfactory(id)
      this.delLoading = true
      api().then(res => {
        // 将结果注入到具体下拉框的选项中
        for (var i = 0; i < this.$data.items.length; i++) {
          if (this.$data.items[i].apicode === id) {
            this.$data.items[i].options = JSON.parse(JSON.stringify(res.data.dataList))
            alert('替换成果：' + this.$data.items[i].options)
          }
        }
        console.log(this.$data.items[i].options)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
