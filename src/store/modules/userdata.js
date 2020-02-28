import Vue from 'vue';

const state = {
  userData: {}
};

const getters = {
  allUserdata: (state) => state.userData
};

const mutations = {
  setUserData(state, response) {
    this.state.userData = response;
  }
};

const actions = {
  getUserData(context) {
    return new Promise((resolve, reject) => {
      Vue.prototype.$auth.getUser()
        .then(response => {
          context.commit('setUserData', response);
          resolve(response);
        }, error => {
          reject(error);
        });
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
