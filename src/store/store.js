import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import userdata from './modules/userdata';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userdata
  },
  state: {
    lessons: [],
    latestLessons: [],
    authenticated: false
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
      state.userData = null;
    },
    setLatestLessonsOfUser(state, latestLessons) {
      state.latestLessons = latestLessons;
      Vue.nextTick();
    },
    fetchAuthentication(state, authStatus) {
      state.authenticated = authStatus;
    }
  },
  actions: {
    updateTimestamp(context, lessonId) {
      context.commit('updateTimestamp', lessonId);
    },
    getLatestLessonsOfUser(context) {
      return new Promise((resolve, reject) => {
        var requestBody = { 'email': this.state.userData.email };
        axios.post('https://heroku-popup-chinese-backend.herokuapp.com/getUserLessonsByUserEmail', requestBody)
          .then(response => {
            context.commit('setLatestLessonsOfUser', response);
            resolve(response);
          })
          .catch(error => {
            console.error('Error getting latest lessons ' + error);
            reject(error);
          });
      });
    },
    deleteUserData(context) {
      context.commit('deleteUserData');
    },
    fetchAuthentication(context, authStatus) {
      context.commit('fetchAuthentication', authStatus);
    }
  }
});
