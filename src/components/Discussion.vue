<template>
    <div>
        <p>{{currentLesson.discussion}}</p>
    </div>
</template>

<script>
export default {
    computed: {
        currentLesson () {
            return this.$store.state.lessons.find(item => item.id == this.$route.params.id);
        }
    }
    
}
</script>
