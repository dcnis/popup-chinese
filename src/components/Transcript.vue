<template>
    <div>
        <div v-if="loading">Loading..</div>
        <div v-else>
        <v-container>
            <v-layout>
        <table>
            <tbody>
                <tr v-for="dialogLine in dialogs" :key="dialogLine.dialogId">
                    <td class="speaker">{{dialogLine.speaker}}</td>
                    <td>
                        <span class="chinese">{{dialogLine.chinese}}</span> <br>
                        <span class="english">
                        {{dialogLine.pinyin}} <br>
                        {{dialogLine.english}}
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
        </v-layout>
        </v-container>
    </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      loading: true,
      dialogs: []
    };
  },
  created() {
    axios.get('https://heroku-popup-chinese-backend.herokuapp.com/getDialogsByLessonId/' +
            this.$route.params.id)
      .then((response) => {
        this.dialogs = response.data;
      })
      .catch((err) => console.error(err))
      .finally(() => (this.loading = false));
  }

};
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
