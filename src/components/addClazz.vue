<template>

  <el-form :model="form">
    <el-form-item label="班级名字" :label-width="formLabelWidth">
      <input type="text" id="clazzName" name="clazzName">
    </el-form-item>
    <el-form-item label="素导名字" :label-width="formLabelWidth">
      <input type="text" id="guideName" name="guideName">
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm">提交</el-button>
    </el-form-item>
  </el-form>

</template>

<script>
    export default {
      name: "addClazz",
      methods:{
        submitForm:function () {
          const clazzName = $("#clazzName").val();
          const guideName = $("#guideName").val();
          $.ajax({
            data:{clazzName:clazzName, guideName:guideName},
            url:'http://localhost:8081/addClazz',
            success:function (resp) {
              if (resp > 0)
                alert("添加成功")
              else
                alert("添加失败")
            }
          })
        }
      }
    }
</script>

<style scoped>

</style>
