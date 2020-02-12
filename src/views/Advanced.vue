<template>
    <div>
        <p>Advanced</p>
        <lesson-list v-bind:level="'Advanced'"></lesson-list>
    </div>
</template>

<script>
import LessonList from '../components/LessonList.vue';

export default {
  components: {
    LessonList
  }
};
</script>
