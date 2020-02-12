<template>
  <div>
    <h1>Your favorite lessons</h1>

    <v-list two-line>
      <template v-for="(fav) in favoriteLessons">
        <v-list-item :key="fav.id" thumbnail :to="'/lesson/' + fav.lessonId">
          <v-list-item-avatar>

          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="lesson.title"></v-list-item-title>
            <v-list-item-sub-title v-html="lesson.level"></v-list-item-sub-title>
          </v-list-item-content>
        </v-list-item>
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
