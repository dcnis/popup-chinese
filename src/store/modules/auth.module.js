import axios from 'axios';

export default {

  state: {
    token: localStorage.getItem('user-token') || '',
    status: ''
  },

  getters: {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status
  },

  actions: {
    auth_request({ commit, dispatch }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request');
        axios({ url: 'auth', data: user, method: 'POST' })
          .then(response => {
            const token = response.data.token;
            localStorage.setItem('user-token', token);
            commit('auth_success', token);
            dispatch('user_request');
            resolve(response);
          })
          .catch(err => {
            commit('auth_error', err);
            localStorage.removeItem('user-token');
            reject(err);
          });
      });
    },
    auth_logout: ({ commit, dispatch }) => {
      return new Promise((resolve, reject) => {
        commit('auth_logout');
        localStorage.removeItem('user-token');
        resolve();
      });
    }
  },

  mutations: {
    auth_request: (state) => {
      state.status = 'loading';
    },
    auth_success: (state, token) => {
      state.status = 'success';
      state.token = token;
    },
    auth_error: (state) => {
      state.status = 'error';
    },
    auth_logout: (state) => {
      state.status = '';
      state.token = '';
    }
  }
};
