<template>
  <div class="Sider_Bar">
        <el-row style="height: 100%,top:60px;">
          <el-menu background-color="#545c64" text-color="#ffffff" 
          active-text-color="#ffd04b" default-active="1" class="side_bar" router>
            <el-menu-item index="这里写组件名"><i class="el-icon-document"></i>帖子浏览</el-menu-item>
            <el-menu-item index="2"><i class="el-icon-document"></i>我要发帖</el-menu-item>
            <!-- <el-menu-item></el-menu-item> -->
        </el-menu>
        <el-col :span="20" style="height: 100%;overflow: auto;">
				<keep-alive>
				    <router-view></router-view>
				</keep-alive>
			</el-col>
        </el-row>
   </div>
</template>

<script>
export default {
  name: "SideBar",
  
}
</script>

<style scoped>
.side-bar {
   height: 100%;
}
</style>