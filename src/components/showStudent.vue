<template>
  <el-table
    :data="student.filter(data => !search || (data.studentName+='').toLowerCase().includes(search.toLowerCase()))">
    <el-table-column label="班级Id" prop="clazzId" ></el-table-column>
    <el-table-column prop="studentId" label="学号"></el-table-column>
    <el-table-column prop="studentName" label="姓名"></el-table-column>
    <el-table-column prop="studentSex" label="性别"></el-table-column>
    <el-table-column prop="studentEnrollment" label="入学年份"></el-table-column>
    <el-table-column align="right">
    <template slot="header" slot-scope="scope">
      <el-input v-model="search" size="mini" placeholder="输入关键字搜索"/>
    </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    props:["row"],
    name: "showStudent",
    created(){
      const clazzId = this.row.clazzId;
      const _this = this;
      $.ajax({
        url:'http://localhost:8081/selectStudent',
        async:false,
        data:{clazzId:clazzId},
        success:function (resp) {
          _this.student = resp;
        },
        dataType:'json'
      });
    },
    data(){
      return {
        student:[{
          clazzId:[],
          studentEnrollment:[],
          studentId:[],
          studentName:[],
          studentSex:[]
        }],
        search:''
      }
    }
  }
</script>

<style scoped>

</style>
