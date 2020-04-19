<template>
  <div class="app-container">
    <el-form label-width="120px">
      <!-- <el-form-item label="讲师id">
        <el-input v-model="teacher.id" />
      </el-form-item>-->
      <el-form-item label="讲师名称">
        <el-input v-model="teacher.name" />
      </el-form-item>
      <el-form-item label="讲师排序">
        <el-input-number v-model="teacher.sort" controls-position="right" min="0" />
      </el-form-item>
      <el-form-item label="讲师头衔">
        <el-select v-model="teacher.level" clearable placeholder="请选择">
          <!--
            数据类型一定要和取出的json中的一致，否则没法回填
            因此，这里value使用动态绑定的值，保证其数据类型是number
          -->
          <el-option :value="1" label="高级讲师" />
          <el-option :value="2" label="首席讲师" />
        </el-select>
      </el-form-item>
      <el-form-item label="讲师资历">
        <el-input v-model="teacher.career" />
      </el-form-item>
      <el-form-item label="讲师简介">
        <el-input v-model="teacher.intro" :rows="10" type="textarea" />
      </el-form-item>

      <!-- 讲师头像：TODO -->

      <el-form-item>
        <el-button :disabled="saveBtnDisabled" type="primary" @click="saveOrUpdate">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
//首先按钮触发的事件是methods里面定义的方法，而methods定义的方法里面会调用接口api里面的方法，接口api里面的方法是后端提供的，采用url映射的方式
import teacher from "@/api/teacher";
export default {
  data() {
    return {
      teacher: {
        name: "",
        sort: 0,
        level: 1,
        career: "",
        intro: "",
        avatar: ""
        // isDeleted: false,
        // gmtCreate: "",
        // gmtModified: ""
      }
    };
  },
  created() {
    saveOrUpdate();
  },
  methods: {
    //添加讲师更新讲师用一个表单
    saveOrUpdate() {
      this.saveTeacher();
      // this.updateTeacher();
    },

    //添加讲师
    saveTeacher() {
      //调用后台接口的方法实现添加
      teacher
        .save(teacher)
        .then(() => {
          return this.$message({
            type: "success",

            message: "添加成功!"
          });
        })
        .then(() => {
          //回到列表页面,通过路由跳转
          this.$router.push({ path: "/teacher" });
        })
        .catch(() => {
          return this.$message({
            type: "error",

            message: "添加失败"
          });
        });
    },
    //更新讲师
    updateTeacher() {}
  }
};
</script>