<template>
    <div>
        <p>{{lesson.discussion}}</p>
    </div>
</template>

<script>

export default {
  props: ['lesson'],
  data() {
    return {
      currentLesson: null
    };
  },
  created() {
    console.log('lesson ' + JSON.stringify(this.lesson));
  }
};
</script>
