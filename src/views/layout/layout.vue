<template>
  <div>
    <el-container class="layout">
      <el-header><h3>数据运营处理中心</h3></el-header>
      <el-main>
        <div :class="classObj" class="app-wrapper">
          <sidebar class="sidebar-container"></sidebar>
          <div class="main-container">
            <my-header></my-header>
            <router-view></router-view>
          </div></div
      ></el-main>
    </el-container>
  </div>
</template>

<script>
import sidebar from "./sidebar/";
import MyHeader from "./header/";
import { mapGetters } from "vuex";

export default {
  components: { sidebar, MyHeader },
  computed: {
    ...mapGetters(["getsidebar"]),
    classObj() {
      return {
        hideSidebar: !this.getsidebar.opened,
        openSidebar: this.getsidebar.opened
      };
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";
/deep/.el-main {
  padding: 0px;
}
.app-wrapper {
  height: 100%;
  width: 100%;
}
.layout {
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  overflow: hidden;
}
</style>
