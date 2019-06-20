<template>
  <div>
    <h1>
      <span class="level">Welcome</span> to Chinese Podcast
    </h1>
    <p>Congratulations on finding the world's best community for learning Chinese. If you're just getting started, check out our collection of Chinese podcasts first. These are broken down by difficulty and can be covered in any order: important words and concepts will repeat. Once you understand the basics move on to our collection of Chinese videos, or test yourself with our collection of sample hsk tests. More advanced students are encouraged to check out our archive of manually annotated Chinese short stories.</p>

    <h2>Latest lessons</h2>
    <v-list two-line>
      <template v-for="(lesson) in lastLessons">
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
  computed: {
    lastLessons() {
      return this.$store.state.lessons
        .sort(function(a, b) {
          return new Date(b.lastTimeWatched) - new Date(a.lastTimeWatched);
        })
        .slice(0, 4);
    }
  }
};
</script>

<style scoped>
.level {
  color: #75baa7;
}
</style>