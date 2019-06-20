<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu class="el-menu-vertical-demo"
               :default-active="defaultActive"
               router>
        <el-submenu :index="college.collegeId+''"
                    v-for="college in show.college">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{college.collegeName}}</span>
          </template>
            <el-menu-item :index="professional.professionalId"
                          v-for="professional in college.professionalList">
              {{professional.professionalName}}
            </el-menu-item>
        </el-submenu>

      </el-menu>
    </el-aside>
    <el-container>
      <el-main>
        <router-view name="page"></router-view>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    data() {
      let college;
      $.ajax({
        url: 'http://localhost:8081/selectCollege',
        type: 'get',
        async:false,
        success: function (resp) {
          college = resp;
        },
        error: function (e) {
          console.log(e);
        },
        dataType: 'json',
      });
      return {
        show: {
          college
        }
      }
    },
    computed: {
      defaultActive: function(){
        return this.$route.path.replace('/', '');
      }
    },
  }
</script>

<style scoped>

</style>
