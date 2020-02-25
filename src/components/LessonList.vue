<template>
  <div>
    <div v-if="loading">Loading..</div>
    <v-list two-line>
      <template v-for="lesson in lessons">
        <v-list-item :key="lesson.id" thumbnail :to="'/lesson/' + lesson.id">
          <v-list-item-avatar>
            <img :src="lesson.thumbnail">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="lesson.title"></v-list-item-title>
            <v-list-item-subtitle v-html="lesson.difficulty.description"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    level: Number
  },
  data() {
    return {
      lessons: [],
      loading: true
    };
  },
  methods: {
    openLesson() {
      console.log('Lesson opened');
    }
  },
  async created() {
    axios.defaults.headers.common['Authorization'] = `Bearer ${await this.$auth.getAccessToken()}`;
    const searchedLevel = {
      difficulty: this.level
    };
    axios.post('https://heroku-popup-chinese-backend.herokuapp.com/findLessonsByDifficulty', searchedLevel)
      .then(res => {
        console.log('Response' + res);
        this.lessons = res.data;
      })
      .catch(err => console.log(err))
      .finally(() => (this.loading = false));
  }
};
</script>
