<template>
  <div>
    <!--查询表单-->

    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-input v-model="searchObj.name" placeholder="讲师名" />
      </el-form-item>

      <el-form-item>
        <el-select v-model="searchObj.level" clearable placeholder="讲师头衔">
          <el-option :value="1" label="高级讲师" />

          <el-option :value="2" label="首席讲师" />
        </el-select>
      </el-form-item>

      <el-form-item label="添加时间">
        <el-date-picker
          v-model="searchObj.gmtCreate"
          type="datetime"
          placeholder="选择开始时间"
          value-format="yyyy-MM-dd HH:mm:ss"
          default-time="00:00:00"
        />
      </el-form-item>

      <el-form-item>
        <el-date-picker
          v-model="searchObj.gmtModified"
          type="datetime"
          placeholder="选择截止时间"
          value-format="yyyy-MM-dd HH:mm:ss"
          default-time="00:00:00"
        />
      </el-form-item>

      <el-button type="primary" icon="el-icon-search" @click="getListTeacher()">查询</el-button>

      <el-button type="default" @click="resetData()">清空</el-button>
    </el-form>

    <el-table v-loading="listloading" :data="list" border style="width: 100%">
      <el-table-column fixed prop="id" label="编号" width="150"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="career" label="资历" width="400"></el-table-column>
      <el-table-column label="头衔" width="120">
        <template slot-scope="scope">{{scope.row.level===1?'高级讲师':'首席讲师'}}</template>
      </el-table-column>
      <el-table-column prop="avatar" label="地址" width="200"></el-table-column>
      <el-table-column prop="sort" label="序号" width="120"></el-table-column>
      <el-table-column prop="isDeleted" label="邮编" width="120"></el-table-column>
      <el-table-column prop="gmtCreate" label="加入时间" width="200"></el-table-column>
      <el-table-column prop="gmtModified" label="结束时间" width="200"></el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <router-link :to="'/edu/teacher/edit/'+scope.row.id">
            <el-button type="primary" size="mini" icon="el-icon-edit">修改</el-button>
          </router-link>
          <el-button
            type="danger"
            size="mini"
            icon="el-icon-delete"
            @click="removeDataById(scope.row.id)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      :current-page="page"
      :page-size="limit"
      :total="total"
      style="padding: 30px 0; text-align: center;"
      layout="total, prev, pager, next, jumper"
      @current-change="getListTeacher"
    />
  </div>
</template>


<script>
import teacher from "@/api/teacher"; //引入接口
export default {
  //定义变量和初始值
  data() {
    return {
      listloading: true,
      list: null, //每页数据list的集合
      total: 0, //总记录数
      page: 1, //当前页
      limit: 10, //每页显示记录数
      searchObj: {} //条件封装对象
    };
  },
  //在页面渲染之前调用，调用具体的方法
  created() {
    this.getListTeacher();
  },
  //写具体方法的调用
  methods: {
    getListTeacher(page = 1) {
      this.listloading = false;
      this.page = page;
      teacher
        .getTeacherPageList(this.page, this.limit, this.searchObj)
        .then(response => {
          //如果请求成功，返回状态吗20000，执行then里面的操作
          // console.log(response);
          //每页数据
          this.list = response.data.pageData.records;
          //总记录数
          this.total = response.data.pageData.total;
          // console.log(this.list);
          // console.log(this.total);
        })
        .catch(response => {
          console.log(response);
        });
    },

    //清空
    resetData() {
      this.searchObj = {};
      this.getListTeacher();
    },
    //删除
    removeDataById(id) {
      // debugger

      // console.log(memberId)

      this.$confirm("此操作将永久删除该记录, 是否继续?", "提示", {
        confirmButtonText: "确定",

        cancelButtonText: "取消",

        type: "warning"
      })
        .then(() => {
          return teacher.removeById(id);
        })
        .then(() => {
          this.getListTeacher(); //刷新页面

          this.$message({
            type: "success",

            message: "删除成功!"
          });
        })
        .catch(response => {
          // 失败

          if (response === "cancel") {
            this.$message({
              type: "info",

              message: "已取消删除"
            });
          } else {
            this.$message({
              type: "error",

              message: "删除失败"
            });
          }
        });
    }
  }
};
</script>