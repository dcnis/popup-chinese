import store from '../../store/store';

export const latestLessons = {
  data() {

  },
  methods: {
    updateAll(lessonId) {
      if (store.state.authenticated) {
        store.dispatch('updateLessonTimestamp', lessonId)
          .then(response => {
            if (response.data === 0) {
              // there was no matching lesson in latestLessonsOfUser
              // therefore add lesson to latestLessonsOfUser
              store.dispatch('addLatestLessonsOfUser', lessonId);
            }
          })
          .catch(error => console.log(error));
      }
    }
  }
};
