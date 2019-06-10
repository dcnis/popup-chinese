<template>
    <div>
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
</template>

<script>
export default {
    computed: {
        currentLesson(){
            return this.$store.state.lessons.find(item => item.id == this.$route.params.id);
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
