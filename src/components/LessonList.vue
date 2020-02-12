<template>
  <div>
    <div v-if="$apollo.queries.lessons.loading">Loading..</div>
    <v-list two-line>
      <template v-for="lesson in lessons">
        <v-list-item :key="lesson.id" thumbnail :to="'/lesson/' + lesson.id">
          <v-list-item-avatar>
            <img :src="lesson.thumbnail">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="lesson.title"></v-list-item-title>
            <v-list-item-subtitle v-html="lesson.level"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </div>
</template>

<script>
import getLessonsByLevel from '../apollo/queries/getLessonsByLevel.gql';

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
  apollo: {
    lessons: {
      query: getLessonsByLevel,
      variables() {
        return {
          level: this.level
        };
      },
      error(error) {
        console.log(error.message);
      }

    }
  }
};
</script>
