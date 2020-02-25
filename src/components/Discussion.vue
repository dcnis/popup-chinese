<template>
    <div>
        <p>{{currentLesson[0].discussion}}</p>
    </div>
</template>

<script>

export default {
  data() {
    return {
      currentLesson: null
    };
  },
  created() {
    this.currentLesson = this.$store.state.lessons
      .filter(item => item.id == this.$route.params.id);
  }
};
</script>
