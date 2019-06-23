<template>
    <div>
        <p>{{currentLesson.discussion}}</p>
    </div>
</template>

<script>
import gql from 'graphql-tag'


export default {
    data(){
        return {
            lessons: []
        }
    },
    computed: {
        currentLesson () {
            return this.lessons.find(item => item.id == this.$route.params.id);
        }
    }
    
}
</script>
