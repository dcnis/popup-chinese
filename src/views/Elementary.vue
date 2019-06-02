<template>
    <div>
        <p>Elementary</p>
        <lesson-list v-bind:level="'Elementary'"></lesson-list>
    </div>
</template>

<script>
import LessonList from '../components/LessonList.vue';

export default {
    components: {
        LessonList,
    }
}
</script>
