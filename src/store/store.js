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
    lessonsByDifficulty: [],
    latestLessons: [],
    authenticated: false,
    user: null
  },
  getters: {
    getAuthenticationState: state => state.isAuthenticated
  },
  mutations: {
    updateTimestamp(state, lessonId) {
      state.lessons
        .filter(item => item.id === lessonId)
        .map(lesson => (lesson.lastTimeWatched = new Date().toISOString()));
    },
    deleteUserData(state) {
      state.user = {};
      state.latestLessons = [];
    },
    setLatestLessonsOfUser(state, latestLessons) {
      state.latestLessons = latestLessons;
    },
    addNewLessonToLatestLessonsOfUser(state, lessonId) {

    },
    setAuthentication(state, authStatus) {
      state.authenticated = authStatus;
    },
    setUserData(state, user) {
      state.user = user;
    },
    setLessonsByDiffculty(state, lessons) {
      state.lessonsByDifficulty = lessons;
    },
    setLessonTimestamp(state, lessonId, newTimestamp) {
      if (state.latestLessons.data) {
        state.latestLessons.data
          .filter(lesson => lesson.id === lessonId)
          .map(lesson => (lesson.lastSeen = newTimestamp));
      }
    }
  },
  actions: {
    async getLatestLessonsOfUser(context) {
      var requestBody = { email: this.state.user.email };
      axios.defaults.headers.common['Authorization'] = `Bearer ${await Vue.prototype.$auth.getAccessToken()}`;
      var response = await axios.post(
        'https://heroku-popup-chinese-backend.herokuapp.com/getUserLessonsByUserEmail',
        requestBody
      );
      context.commit('setLatestLessonsOfUser', response);
    },
    addLatestLessonsOfUser(context, lessonId) {
      // make POST request to DB
      var newDate = new Date().toISOString();

      var url = 'https://heroku-popup-chinese-backend.herokuapp.com/addLatestLessonsOfUser?' +
        'email=' + this.state.user.email +
        '&lessonId=' + lessonId +
        '&lastSeen=' + newDate;

      axios.post(url).catch(error => console.log(error));

      // add lesson to state (I think I dont need it because it will get fetched anyways)
    },
    updateLessonTimestamp(context, lessonId) {
      // set new Date
      var newTimestamp = new Date().toISOString();

      // make post request to DB
      var body = {
        lessonId: lessonId,
        lastSeen: newTimestamp,
        email: this.state.user.email
      };

      return new Promise((resolve, reject) => {
        axios.post('https://heroku-popup-chinese-backend.herokuapp.com/updateLessonTimestamp', body)
          .then(response => {
            // update state if there was a DB UPDATE row
            if (response === 1) {
              context.commit('setLessonTimestamp', lessonId, newTimestamp);
            }
            resolve(response);
          })
          .catch(error => {
            console.log(error);
            reject(error);
          });
      });
    },
    deleteUserData(context) {
      context.commit('deleteUserData');
    },
    fetchAuthentication(context, authStatus) {
      context.commit('setAuthentication', authStatus);
      if (authStatus && !this.state.user) {
        store.dispatch('getUserdata');
      }
    },
    async getUserdata(context) {
      var response = await Vue.prototype.$auth.getUser();
      context.commit('setUserData', response);
      store.dispatch('getLatestLessonsOfUser');
    },
    async fetchLessonsByDiffculty(context, level) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${await Vue.prototype.$auth.getAccessToken()}`;
      const searchedLevel = {
        difficulty: level
      };
      axios.post('https://heroku-popup-chinese-backend.herokuapp.com/findLessonsByDifficulty', searchedLevel)
        .then(res => {
          context.commit('setLessonsByDiffculty', res.data);
        })
        .catch(err => console.log(err));
    }
  }
});

export default store;
