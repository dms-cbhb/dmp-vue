import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Layout from "@/views/layout/layout";


export const commontRouterMap = [
  
   {
    path: "/login",
    hidden: true, //不在slider显示
    component: () =>
      import("@/views/login/index")
  },
  {
    path: "/",
    component: Layout,
    redirect: "/SystemManagement",
    hidden: true,
    children: [{
      path: "SystemManagement",
      component: () =>
        import("@/views/system-management/index")
    }]
  },
  // 
  {
    path: "/SystemManagement",
    component: Layout,
    redirect: "/SystemManagement/UserManagement",
    name: "SystemManagement",
    meta: {
      title: "系统管理",
      icon: "el-icon-tickets",
    },
    children: [{
        path: "UserManagement",
        name: "UserManagement",
        component: () =>
          import("@/views/system-management/user-management"),
        meta: {
          title: "用户管理",
        },
      },
      {
        path: "RoleManagement",
        name: "RoleManagement",
        component: () =>
          import("@/views/system-management/role-management"),
        meta: {
          title: "角色管理",
        },
      },
      {
        path: "MenuManagement",
        name: "MenuManagement",
        component: () =>
          import("@/views/system-management/menu-management"),
        meta: {
          title: "菜单管理",
        },
      },
      {
        path: "DepartmentManagement",
        name: "DepartmentManagement",
        component: () =>
          import("@/views/system-management/department-management"),
        meta: {
          title: "部门管理",
        },
      }
    ]
  },
  {
    path: "/SystemMonitoring",
    component: Layout,
    redirect: "/SystemMonitoring/1-1",
    name: "SystemMonitoring",
    meta: {
      title: "系统监控",
      icon: "el-icon-tickets",
    },
    children: [{
        path: "1-1",
        name: "1-1",
        component: () =>
          import("@/views/system-monitoring/1-1"),
        meta: {
          title: "1-1",
        },
      },
      {
        path: "1-2",
        name: "1-2",
        component: () =>
          import("@/views/system-monitoring/1-2"),
        meta: {
          title: "1-2",
        }
      },
      {
        path: "1-3",
        name: "1-3",
        component: () =>
          import("@/views/system-monitoring/1-3"),
        meta: {
          title: "1-3",
        }
      }

    ]
  },
  {
    path: "/TaskScheduling",
    component: Layout,
    redirect: "/TaskScheduling/2-1",
    name: "TaskScheduling",
    meta: {
      title: "权限测试2",
      icon: "el-icon-tickets",
      role: ['0', '1']
    },
    children: [{
        path: "2-1",
        name: "2-1",
        component: () =>
          import("@/views/task-scheduling/2-1"),
        meta: {
          title: "2-1",
          role: ['0']
        }
      },
      {
        path: "2-2",
        name: "2-2",
        component: () =>
          import("@/views/task-scheduling/2-2"),
        meta: {
          title: "2-2",
        }
      }
    ]
  },


  {
    path: "/nested",
    component: Layout,
    redirect: "/nested/menu1",
    name: "Nested",
    meta: {
      title: "多级菜单",
      icon: "el-icon-news"
    },
    children: [{
        path: "menu1",
        component: () =>
          import("@/views/nested/menu1/index"), // Parent router-view
        name: "Menu1",
        meta: {
          title: "Menu1"
        },
        children: [{
            path: "menu1-1",
            component: () =>
              import("@/views/nested/menu1/menu1-1/index"),
            name: "Menu1-1",
            meta: {
              title: "Menu1-1"
            }
          },
          {
            path: "menu1-2",
            component: () =>
              import("@/views/nested/menu1/menu1-2/index"),
            name: "Menu1-2",
            meta: {
              title: "Menu1-2"
            },
          },
          {
            path: "menu1-3",
            component: () =>
              import("@/views/nested/menu1/menu1-3/index"),
            name: "Menu1-3",
            meta: {
              title: "Menu1-3"
            }
          }
        ]

      },
      {
        path: "menu2",
        component: () =>
          import("@/views/nested/menu2/index"),
        meta: {
          title: "menu2"
        }
      }
    ]
  }
];

const createRouter = () => new Router({
  // mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: commontRouterMap
})

const router = createRouter()

export default router;
