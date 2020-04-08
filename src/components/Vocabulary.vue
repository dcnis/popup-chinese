<template>
    <div>
        <div v-if="loading">Loading..</div>
        <div v-else>
          <v-data-table
                :headers="headers"
                :items="vocabulary"
                :items-per-page="100"
                :mobile-breakpoint="NaN"
                :disable-pagination="true"
                :hide-default-footer="true"
                class="elevation-2 myStyle"
          ></v-data-table>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      currentLesson: null,
      loading: true,
      vocabulary: [],
      headers: [
        {
          text: 'Chinese',
          align: 'left',
          sortable: false,
          value: 'chinese'
        },
        { text: 'Pinyin', sortable: false, value: 'pinyin' },
        { text: 'English', sortable: false, value: 'english' }
      ]
    };
  },
  created() {
    axios.get('https://heroku-popup-chinese-backend.herokuapp.com/getVocabularyByLessonId/' +
          this.$route.params.id)
      .then((response) => {
        this.vocabulary = response.data;
      })
      .finally(() => (this.loading = false));
  }
};
</script>

<style scoped>
table{
    font-size: 20px;
}
th {
  background-color: #F5F5F5;;
  color: rgba(255,255,255,0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  vertical-align: top;
  line-height: 30px;
}

.english {
    color: #757575;
    font-size: 18px;
}
.speaker{
    size: 20%
}

.chinese{
    font-size: 2em;
    font-family: Tahoma, Arial, Helvetica, "Microsoft YaHei New", "Microsoft Yahei", "微软雅黑", 宋体, SimSun, STXihei, "华文细黑", sans-serif;
}

</style>
