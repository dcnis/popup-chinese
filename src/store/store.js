import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import userdata from './modules/userdata';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    userdata
  },
  state: {
    lessons: [],
    latestLessons: [],
    authenticated: false,
    user: {}
  },
  getters: {
    getAuthenticationState: (state) => state.isAuthenticated
  },
  mutations: {
    updateTimestamp(state, lessonId) {
      state.lessons
        .filter(item => item.id === lessonId)
        .map(lesson => (lesson.lastTimeWatched = new Date().toISOString()));
    },
    deleteUserData(state) {
      state.user = {};
      state.latestLessons = {};
    },
    setLatestLessonsOfUser(state, latestLessons) {
      state.latestLessons = latestLessons;
    },
    fetchAuthentication(state, authStatus) {
      state.authenticated = authStatus;
    },
    setUserData(state, user) {
      state.user = user;
    }
  },
  actions: {
    updateTimestamp(context, lessonId) {
      context.commit('updateTimestamp', lessonId);
    },
    async getLatestLessonsOfUser(context) {
      var requestBody = { 'email': this.state.user.email };
      axios.defaults.headers.common['Authorization'] = `Bearer ${await Vue.prototype.$auth.getAccessToken()}`;
      var response = await axios.post('https://heroku-popup-chinese-backend.herokuapp.com/getUserLessonsByUserEmail', requestBody);
      context.commit('setLatestLessonsOfUser', response);
    },
    deleteUserData(context) {
      context.commit('deleteUserData');
    },
    async fetchAuthentication(context, authStatus) {
      context.commit('fetchAuthentication', authStatus);
      if (authStatus) {
        var response = await Vue.prototype.$auth.getUser();
        context.commit('setUserData', response);
        store.dispatch('getLatestLessonsOfUser');
      } else {
        context.commit('deleteUserData');
      }
    }
  }
});

export default store;
