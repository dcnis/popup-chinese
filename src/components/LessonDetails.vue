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
          <v-icon v-bind:disabled="!liked">mdi-heart</v-icon>
        </v-btn>
    </v-layout>
    </v-container>
    <router-view></router-view>
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

export default {
  data() {
    return {
      e3: 0,
      e31: true,
      file: 'http://popupchinese.com/data/1390/audio.mp3',
      currentLesson: null,
      liked: false,
      loading: true
    };
  },
  components: {
    VuetifyAudio
  },
  methods: {
    toggleLike() {
      if (this.liked) {
        this.unlikeLesson();
      } else {
        this.likeLesson();
      }
    },
    likeLesson() {
      this.liked = true;
    },
    unlikeLesson() {
      this.liked = false;
    },
    audioFinish() {
    }
  },
  created() {
    axios.get('https://heroku-popup-chinese-backend.herokuapp.com/getLesson/' + this.$route.params.id)
      .then(response => {
        this.currentLesson = response.data;
        this.$store.dispatch('addLesson', this.currentLesson);
      })
      .catch(err => console.log('Error: ' + err))
      .finally(() => (this.loading = false));
  }
};
</script>

<style scoped>
.level {
  color: #75BAA7;
}
</style>
