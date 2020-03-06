import axios from 'axios';
import constants from '../../config/constants';
import store from '../../store/store';

export default {
  methods: {
    updateUserLessonInDatabase(lessonId, liked) {
      let bodyWithLike = {
        email: store.state.user.email,
        lessonId: lessonId,
        liked: liked
      };

      axios.post(constants.UPDATE_USER_LESSON, bodyWithLike)
        .then(response => {
          console.log('affectedRows: ' + response.data);
        })
        .catch(error => console.log(error));
    }
  }
};
