<template>
  <el-table
    :data="clazz.filter(data => !search || (data.clazzName+='').toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column label="编号" prop="clazzId"></el-table-column>
    <el-table-column label="名字" prop="clazzName"></el-table-column>
    <el-table-column align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
        <el-button type="text" @click="dialogTableVisible = true" center>添加班级</el-button>
        <el-dialog title="添加班级" :visible.sync="dialogTableVisible" center
                   :append-to-body='true' :lock-scroll="false" width="30%">
          <add-clazz></add-clazz>
        </el-dialog>
      </template>
      <template slot-scope="scope">
        <el-button type="text" @click="dialogTableVisible1 = true" center>查看</el-button>
        <el-dialog title="班级信息"
                   :visible.sync="dialogTableVisible1"
                   v-if="dialogTableVisible1"
                   :append-to-body='true' :lock-scroll="false" width="80%" center>
          <show-student v-bind:row="scope.row"></show-student>
        </el-dialog>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">开除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  import addClazz from '../components/addClazz';
  import showStudent from '../components/showStudent';
  export default {
    components:{showStudent, addClazz},
    data() {
      return {
        clazz:[{
          clazzId:[],
          clazzName:[]
        }],
        search: '',
        dialogTableVisible:false,
        dialogTableVisible1:[false]
      }
    },
    watch:{
      '$route':'changeData'
    },
    methods: {
      handleDelete(index, row) {
        const _this = this;
        $.ajax({
          url: 'http://localhost:8081/deleteByClazzId',
          data:{clazzId:row.clazzId},
          success:function(resp){
            if (resp == 1) {
              _this.changeData();
              _this.$message({
                message: '删除成功',
                type: 'success'
              });
            }
            else
              alert("必须先把该班级下所有学生开除");
          },
          error:function () {
            alert("请重新输入");
          }
        })
      },
      changeData(){
        const _this = this;
        $.ajax({
          url:'http://localhost:8081/selectAllClazz',
          type:'get',
          data:{professionalId:_this.$route.path.replace('/', '')},
          dataType:'json',
          success:function (resp) {
            _this.clazz = resp;
          }
        })
      }
    },
  }
</script>
