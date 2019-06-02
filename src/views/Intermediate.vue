<template>
    <div>
        <p>Intermediate</p>
                <lesson-list v-bind:level="'Intermediate'"></lesson-list>
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