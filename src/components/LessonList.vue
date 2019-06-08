<template>
  <div>
    <v-list two-line>
      <template v-for="(lesson) in lessonsFilteredAndSorted">
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
export default {
  props: {
    level: String
  },
  computed: {
    lessonsFilteredAndSorted() {
      return this.$store.state.lessons
        .filter(item => item.level == this.level)
        .sort(function(a, b) {
          return new Date(b.lastTimeWatched) - new Date(a.lastTimeWatched);
        });
    }
  },
  data() {
    return {};
  },
  methods: {
    openLesson() {
          console.log('Lesson opened');
    }
  }
} ;
</script>
