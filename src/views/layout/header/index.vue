<template>
  <div class="header">
    <div id="header-sidebar-open-close">
      <i
        :class="[
          getsidebar.opened ? 'el-icon-caret-right' : 'el-icon-caret-left',
          'icon'
        ]"
        @click="toggleSideBar"
      ></i>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <transition-group>
          <el-breadcrumb-item
            v-for="(item, index) in crumbsList"
            :key="index"
            >{{ item.title }}</el-breadcrumb-item
          >
        </transition-group>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      crumbsList: []
    };
  },
  created() {
    this.getRouterCrumbs();
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("ToggleSideBar");
    },
    getRouterCrumbs() {
      let arr = this.$route.matched;
      let arr1 = [];
      arr.forEach(v => {
        if (v.path == "") {
          arr1.push({ title: "首页", path: "/SystemManagement" });
        } else {
          arr1.push({
            title: v.meta.title,
            path: v.path
          });
        }
      });
      this.crumbsList = arr1;
    }
  },
  computed: {
    ...mapGetters(["getsidebar", "getavatar"])
  },
  watch: {
    $route() {
      this.getRouterCrumbs();
    }
  }
};
</script>

<style scoped lang="scss">
/deep/.el-breadcrumb {
  line-height: 3;
  margin-left: 8px;
}
.header {
  width: 100%;
  background-color: #eaebec;
  height: 40px;
}
.icon {
  font-size: 30px;
  margin-top: 4px;
}
.avatar-container {
  height: 40px;
  display: fexd;
  position: absolute;
  right: 35px;
  margin-top: 10px;
}
.user-avatar {
  border-radius: 10px;
  cursor: pointer;
}
#header-sidebar-open-close {
  display: flex;
}
</style>
