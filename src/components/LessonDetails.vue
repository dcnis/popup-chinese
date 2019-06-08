<template>
  <div>
    <h1><span class="level">{{currentLesson.level}}</span> - {{currentLesson.title}}</h1>
    <vuetify-audio :file="file" :ended="audioFinish"></vuetify-audio>
    {{ this.$route.params.id }}
    <router-view></router-view>
    <v-bottom-nav fixed :value="e31" absolute color="transparent">
        <v-btn flat color="teal" to="discussion">
          <span>Discussion</span>
          <v-icon>feedback</v-icon>
        </v-btn>
      <v-btn flat color="teal" to="transcript">
        <span>Transcript</span>
        <v-icon>clear_all</v-icon>
      </v-btn>
      <v-btn flat color="teal" to="vocabulary">
        <span>Vocabulary</span>
        <v-icon>translate</v-icon>
      </v-btn>
    </v-bottom-nav>
  </div>
</template>

<script>
import VuetifyAudio from "vuetify-audio";

export default {
  data() {
    return {
      e3: 0,
      e31: true,
      file: "http://popupchinese.com/data/1390/audio.mp3"
    };
  },
  components: {
    VuetifyAudio
  },
  methods: {
    audioFinish() {
      console.log("You see this means audio finish.");
    }
  },
  created (){
      //Update the timeStamp, in order to always sort the lesson list to the most recently opened lesson
  },
  computed: {
    currentLesson(){
     return this.$store.state.lessons.find(item => item.id == this.$route.params.id);
    }
  }
};
</script>

<style scoped>
.level {
  color: #00695C;
}
</style>