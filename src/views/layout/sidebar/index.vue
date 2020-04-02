<template>
  <div>
    <el-menu
      :default-active="$route.path"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :active-text-color="variables.menuActiveText"
      mode="vertical"
      router
      :collapse="isCollapse"
      :unique-opened="false"
      :collapse-transition="false"
    >
      <sidebar-item :menu="getrouters" />
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SidebarItem from "./SidebarItem";
import variables from "@/styles/variables.scss";

export default {
  data() {
    return {
      getrouters: [
        {
          path: "/SystemManagement",
          meta: {
            title: "系统管理",
            icon: "el-icon-menu"
          },
          children: [
            {
              path: "UserManagement",
              meta: {
                title: "用户管理"
              }
            },
            {
              path: "RoleManagement",
              meta: {
                title: "角色管理"
              }
            },
            {
              path: "MenuManagement",
              meta: {
                title: "菜单管理"
              }
            },
            {
              path: "DepartmentManagement",
              meta: {
                title: "部门管理"
              }
            }
          ]
        },
        {
          path: "/SystemMonitoring",
          name: "SystemMonitoring",
          meta: {
            title: "系统监控",
            icon: "el-icon-tickets"
          },
          children: [
            {
              path: "1-1",
              name: "1-1",
              meta: {
                title: "1-1"
              }
            },
            {
              path: "1-2",
              name: "1-2",
              meta: {
                title: "1-2"
              }
            },
            {
              path: "1-3",
              name: "1-3",
              meta: {
                title: "1-1"
              },
              meta: {
                title: "1-3"
              }
            }
          ]
        },
        {
          path: "/TaskScheduling",
          name: "TaskScheduling",
          meta: {
            title: "任务调度",
            icon: "el-icon-tickets"
          },
          children: [
            {
              path: "2-1",
              name: "2-1",
              meta: {
                title: "2-1",
                role: ["0"]
              }
            },
            {
              path: "2-2",
              name: "2-2",
              meta: {
                title: "2-2"
              }
            }
          ]
        },

        {
          path: "/nested",
          name: "Nested",
          meta: {
            title: "多级菜单",
            icon: "el-icon-news"
          },
          children: [
            {
              path: "menu1",
              name: "Menu1",
              meta: {
                title: "Menu1"
              },
              children: [
                {
                  path: "menu1-1",
                  name: "Menu1-1",
                  meta: {
                    title: "Menu1-1"
                  }
                },
                {
                  path: "menu1-2",
                  name: "Menu1-2",
                  meta: {
                    title: "Menu1-2"
                  }
                },
                {
                  path: "menu1-3",
                  name: "Menu1-3",
                  meta: {
                    title: "Menu1-3"
                  }
                }
              ]
            },
            {
              path: "menu2",
              meta: {
                title: "menu2"
              }
            }
          ]
        }
      ]
    };
  },
  created() {
    console.log(this.getrouters);
  },
  components: { SidebarItem },
  computed: {
    ...mapGetters(["getsidebar"]),
    isCollapse() {
      return !this.getsidebar.opened;
    },
    variables() {
      return variables;
    }
  }
};
</script>
<style></style>
