<template>
    <div>
        <div v-if="$apollo.queries.lessons.loading">Loading..</div>
        <div v-else>
        <p>{{currentLesson.discussion}}</p>
        </div>
    </div>
</template>

<script>
import getLessonById from '../apollo/queries/getLessonById.gql'

export default {
    data(){
        return {
            lessons: []
        }
    },
    apollo: {
        lessons: {
           query: getLessonById,
            variables() {
                return {
                    lessonId: this.$route.params.id
                }
            },
            error(error){
                console.error("Error fetching Lesson " + error.message);
            }
        }
    },
    computed: {
        currentLesson(){
            return this.lessons[0];
        }
    }
    
}
</script>