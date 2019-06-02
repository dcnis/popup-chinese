<template>
  <div>
    <p>LessonDetails</p>
    {{ this.$route.params.id }}
      <v-bottom-nav fixed :value="e31" absolute color="transparent">
        <v-btn flat color="teal">
          <span>Discussion</span>
          <v-icon>feedback</v-icon>
        </v-btn>
        <v-btn flat color="teal">
          <span>Transcript</span>
          <v-icon>clear_all</v-icon>
        </v-btn>
        <v-btn flat color="teal">
          <span>Vocabulary</span>
          <v-icon>translate</v-icon>
        </v-btn>
      </v-bottom-nav>
  </div>
</template>

<script>
export default {
    data () {
    return {
      e3: 0,
      e31: true
    }}
};
</script>
