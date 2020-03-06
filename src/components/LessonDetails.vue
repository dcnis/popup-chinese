<template>
  <div>
    <div v-if="loading">Lesson loading..</div>
    <div v-else>
    <h3>{{currentLesson.title}}</h3>
    <span class="level">{{currentLesson.difficulty.description}}</span><br><br>
    <vuetify-audio :file="file" :ended="audioFinish"></vuetify-audio>
    <v-container>
    <v-layout justify-end>
        <v-btn text icon color="pink" v-on:click="toggleLike">
          <v-icon v-bind:disabled="!(userLesson.liked)">mdi-heart</v-icon>
        </v-btn>
    </v-layout>
    </v-container>
    <router-view :lesson="currentLesson"></router-view>
    <br><br>
    <v-bottom-navigation fixed :value="e31" absolute grow color="teal">
        <v-btn to="discussion">
          <span>Discussion</span>
          <v-icon>feedback</v-icon>
        </v-btn>
      <v-btn to="transcript">
        <span>Transcript</span>
        <v-icon>clear_all</v-icon>
      </v-btn>
      <v-btn to="vocabulary">
        <span>Vocabulary</span>
        <v-icon>translate</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
  </div>
</template>

<script>
import VuetifyAudio from 'vuetify-audio';
import axios from 'axios';
import constants from '../config/constants';
import updateLikeMixin from './mixins/updateLikeMixin';

export default {
  mixins: [updateLikeMixin],
  props: ['id'],
  data() {
    return {
      e3: 0,
      e31: true,
      file: 'http://popupchinese.com/data/1390/audio.mp3',
      currentLesson: {},
      userLesson: {},
      loading: true
    };
  },
  components: {
    VuetifyAudio
  },
  methods: {
    toggleLike() {
      if (this.$store.state.authenticated) {
        if (this.userLesson.liked) {
          this.unlikeLesson();
        } else {
          this.likeLesson();
        }
      } else {
        // forward to login-page
      }
    },
    likeLesson() {
      this.userLesson.liked = true;
      updateLikeMixin.methods.updateUserLessonInDatabase(this.id, true);
    },
    unlikeLesson() {
      this.userLesson.liked = false;
      updateLikeMixin.methods.updateUserLessonInDatabase(this.id, false);
    },
    audioFinish() {
    },
    getLesson() {
      axios.get(constants.GET_LESSON + this.id)
        .then(response => {
          // set current lesson
          this.currentLesson = response.data;
          if (this.$store.state.authenticated) {
            this.getMatchingUserLesson();
          }
        })
        .catch(err => console.log('Error: ' + err))
        .finally(() => (this.loading = false));
    },
    getMatchingUserLesson() {
      var body = {
        email: this.$store.state.user.email,
        lessonId: this.id
      };
      axios.post(constants.GET_SINGLE_USER_LESSON, body)
        .then(response => {
          // set userLesson
          this.userLesson = response.data;
        })
        .catch(error => {
          // if no matching userLesson found (something is wrong)
          console.log(error);
        });
    }
  },
  created() {
    this.getLesson();
  }
};
</script>

<style scoped>
.level {
  color: #75BAA7;
}
</style>
