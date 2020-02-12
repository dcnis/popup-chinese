<template>
  <div>
    <div v-if="$apollo.queries.lessons.loading">Lesson loading..</div>
    <div v-else>
    <h1><span class="level">{{currentLesson.level}}</span> - {{currentLesson.title}}</h1>
    <vuetify-audio :file="file" :ended="audioFinish"></vuetify-audio>
    {{ this.$route.params.id }}
    <router-view></router-view>
    <br><br>
    <v-bottom-nav fixed :value="e31" absolute color="transparent">
        <v-btn flat color="#00C48F" to="discussion">
          <span>Discussion</span>
          <v-icon>feedback</v-icon>
        </v-btn>
      <v-btn flat color="#00C48F" to="transcript">
        <span>Transcript</span>
        <v-icon>clear_all</v-icon>
      </v-btn>
      <v-btn flat color="#00C48F" to="vocabulary">
        <span>Vocabulary</span>
        <v-icon>translate</v-icon>
      </v-btn>
    </v-bottom-nav>
  </div>
  </div>
</template>

<script>
import VuetifyAudio from 'vuetify-audio';
import getLessonById from './../apollo/queries/getLessonById.gql';

export default {
  data() {
    return {
      e3: 0,
      e31: true,
      file: 'http://popupchinese.com/data/1390/audio.mp3',
      lessons: []
    };
  },
  components: {
    VuetifyAudio
  },
  methods: {
    audioFinish() {
      console.log('You see this means audio finish.');
    }
  },
  created() {
    // this.$store.dispatch('updateTimestamp', this.$route.params.id);
  },
  apollo: {
    lessons: {
      query: getLessonById,
      variables() {
        return {
          lessonId: this.$route.params.id
        };
      },
      error(error) {
        console.log('Error ' + error.message);
      }
    }
  },
  computed: {
    currentLesson() {
      return this.lessons[0];
    }
  }
};
</script>

<style scoped>
.level {
  color: #75BAA7;
}
</style>
