<template>
  <div>
    <div v-if="$apollo.queries.lessons.loading">Loading..</div>
    <v-list two-line>
      <template v-for="lesson in lessons">
        <v-list-tile :key="lesson.id" thumbnail :to="'/lesson/' + lesson.id">
          <v-list-tile-avatar>
            <img :src="lesson.thumbnail">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title v-html="lesson.title"></v-list-tile-title>
            <v-list-tile-sub-title v-html="lesson.level"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </div>
</template>

<script>
import getLessonsByLevel from '../apollo/queries/getLessonsByLevel.gql'

export default {
  props: {
    level: String
  },
  data() {
    return {
      lessons: []
    };
  },
  methods: {
    openLesson() {
          console.log('Lesson opened');
    }
  },
  apollo:{
    lessons: {
      query: getLessonsByLevel,
      variables() {
        return {
          level: this.level
        }
      },
      error(error){
        console.log(error.message);
      }
      
    }
  }
};
</script>
