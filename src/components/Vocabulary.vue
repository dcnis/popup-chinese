<template>
    <div>
        <div v-if="$apollo.queries.lessons.loading">Loading..</div>
        <div v-else>
        <table>
            <tbody>
                <tr v-for="word in currentLesson.vocabulary" :key="word.id">
                    <td class="chinese" >{{word.chinese}}</td>
                    <td class="english">{{word.pinyin}}</td>
                    <td class="english">{{word.english}}</td>
                    <td class="english">{{word.type}}</td>
                </tr>
            </tbody>
        </table>
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


<style scoped>
table{
    font-size: 20px;
}
th {
  background-color: #42b983;
  color: rgba(255,255,255,0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  vertical-align: top;
}

th, td {
  min-width: 120px;
  padding: 10px 20px;
}

.chinese {
    font-size: 30px;
}
.english {
    color: #757575;
}
.speaker{
    size: 20%
}
</style>
