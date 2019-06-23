import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lessons: []
  },
  mutations: {
    updateTimestamp(state, lessonId){
      state.lessons
      .filter(item => item.id == lessonId)
      .map(lesson => lesson.lastTimeWatched = new Date().toISOString());
    }
  },
  actions: {
    updateTimestamp(context, lessonId) {
      
      context.commit('updateTimestamp', lessonId);
    }
  }
})
