<template>
  <div>
    <h1>Your favorite lessons</h1>

    <v-list two-line>
      <template v-for="(fav) in favoriteLessons">
        <v-list-tile :key="fav.id" thumbnail :to="'/lesson/' + fav.lessonId">
          <v-list-tile-avatar>
  
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
  computed: {
    favoriteLessons() {
      return this.$store.state.favoriteLessons
      .sort(function(a, b) {
        return new Date(b.timeAdded) - new Date(a.timeAdded);
      });
    }
  }
};
</script>
