import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lessons: [],
    isAuthenticated: false,
    userData: null
  },
  mutations: {
    updateTimestamp(state, lessonId) {
      state.lessons
        .filter(item => item.id === lessonId)
        .map(lesson => (lesson.lastTimeWatched = new Date().toISOString()));
    },
    addLesson(state, lesson) {
      state.lessons.push(lesson);
    },
    isAuthenticated(state, isAuth) {
      state.isAuthenticated = isAuth;
      Vue.nextTick();
    },
    setUserData(state, userData) {
      state.userData = userData;
      Vue.nextTick();
    },
    deleteUserData(state) {
      state.userData = null;
    }
  },
  actions: {
    updateTimestamp(context, lessonId) {
      context.commit('updateTimestamp', lessonId);
    },
    addLesson(context, lesson) {
      var found = this.state.lessons.includes(item => item.id == lesson.id);
      if (found === false) {
        context.commit('addLesson', lesson);
      }
    },
    auth_request(context, user) {

    },
    async isAuthenticated(context, isAuth) {
      context.commit('isAuthenticated', isAuth);
    },
    getUserData(context, userData) {
      return new Promise((resolve, reject) => {
        Vue.prototype.$auth.getUser()
          .then(response => {
            context.commit('setUserData', response);
            resolve(response);
          }, error => {
            reject(error);
          });
      });
    },
    deleteUserData(context) {
      context.commit('deleteUserData');
    }
  }
});
