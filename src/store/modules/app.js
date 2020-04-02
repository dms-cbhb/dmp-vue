const app = {
  state: {
    sidebar: {
      opened: true,
    }
  },
  mutations: {
    //slider切换
    TOGGLE_SIDEBAR: state => {
      state.sidebar.opened = !state.sidebar.opened;
    }
  },
  getters: {
    getsidebar: state => state.sidebar
  },
  actions: {
    ToggleSideBar: ({
      commit
    }) => {
      commit("TOGGLE_SIDEBAR");
    }
  }
};
export default app;
