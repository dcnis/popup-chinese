<template>
  <div>
    <h1>
      <span class="level">Welcome </span> {{allUserdata.name}}
    </h1>
    <p>Congratulations on finding the world's best community for learning Chinese. If you're just getting started, check out our collection of Chinese podcasts first. These are broken down by difficulty and can be covered in any order: important words and concepts will repeat. Once you understand the basics move on to our collection of Chinese videos, or test yourself with our collection of sample hsk tests. More advanced students are encouraged to check out our archive of manually annotated Chinese short stories.</p>

    <div v-if="isLoggedIn">
    <h2>Latest lessons</h2>
    <v-list two-line>
      <template v-for="entry in latestLessons">
        <v-list-item :key="entry.id" thumbnail :to="'/lesson/' + entry.lessonId">
          <v-list-item-avatar>
            <!-- <img :src="entry.lesson.thumbnail"> -->
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>LessonId: {{entry.lessonId}}<br>
            Last seen: {{entry.lastSeen}}</v-list-item-title>
            <!-- <v-list-item-title v-html="entry.lesson.title"></!--> -->
            <!-- <v-list-item-sub-title v-html="entry.lesson.level"></v-list-item-sub-title> -->
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  data() {
    return {
      myId: '1'
    };
  },
  created() {
    console.log('I created Home.vue');
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isAuthenticated;
    },
    ...mapState(['latestLessons']),
    ...mapGetters(['allUserdata'])
  }
};
</script>

<style scoped>
.level {
  color: #75baa7;
}
</style>
