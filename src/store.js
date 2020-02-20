import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lessons: []
  },
  mutations: {
    updateTimestamp(state, lessonId) {
      state.lessons
        .filter(item => item.id === lessonId)
        .map(lesson => (lesson.lastTimeWatched = new Date().toISOString()));
    },
    addLesson(state, lesson) {
      state.lessons.push(lesson);
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
    }
  }
});
