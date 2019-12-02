<template>
  <el-form :inline="true" label-width="80px" >
    <ul>
      <el-col v-for="item in testItems" :key="item.id" :span="6" style="text-align:left;padding:0px;">
        <div style="width: 100%;max-width: 100%;">{{ item.label }}</div>
        <li style="padding-right: 20px;text-decoration:underline;list-style-type:none;float:left;width: 100%;max-width: 100%;">
          <el-select
            v-model="value"
            multiple
            filterable
            allow-create
            default-first-option
            placeholder="全部"
            style="width: 100%;max-width: 100%;"
          >
            <el-option
              v-for="option in item.options"
              :key="option.id"
              :label="item.label"
              :value="option.value"
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
export default {
  name: 'Selectlist',
  props: {
    'data': {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      testItems: [{
        apicode: 'school',
        label: '校区',
        options: [
          { id: 1, value: '选项1' },
          { id: 2, value: '选项2' },
          { id: 3, value: '选项3' },
          { id: 4, value: '选项4' }
        ]
      },
      {
        apicode: 'school',
        label: '用户名',
        options: [
          { id: 1, value: '选项1' },
          { id: 2, value: '选项2' },
          { id: 3, value: '选项3' },
          { id: 4, value: '选项4' }
        ]
      },
      {
        apicode: 'school',
        label: '课程',
        options: [
          { id: 1, value: '选项1' },
          { id: 2, value: '选项2' },
          { id: 3, value: '选项3' },
          { id: 4, value: '选项4' }
        ]
      },
      {
        apicode: 'school',
        label: '课次',
        options: [
          { id: 1, value: '选项1' },
          { id: 2, value: '选项2' },
          { id: 3, value: '选项3' },
          { id: 4, value: '选项4' }
        ]
      }, {
        apicode: 'school',
        label: '专题',
        options: [
          { id: 1, value: '选项1' },
          { id: 2, value: '选项2' },
          { id: 3, value: '选项3' },
          { id: 4, value: '选项4' }
        ]
      }
      ],
      value: []
    }
  }
}
</script>

<style scoped>

</style>
