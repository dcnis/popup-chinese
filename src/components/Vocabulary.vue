<template>
    <div>
        <div v-if="loading">Loading..</div>
        <div v-else>
          <v-simple-table :light="false">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Chinese</th>
              <th class="text-left">Pinyin</th>
              <th class="text-left">English</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in vocabulary" :key="item.vocabularyId">
              <td><span class="chineseFont">{{item.chinese}}</span></td>
              <td><span>{{item.pinyin}}</span></td>
              <td><span>{{item.english}}</span></td>
            </tr>
          </tbody>
        </template>
        </v-simple-table>
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
      vocabulary: []
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

.chineseFont{
    font-family: Tahoma, Arial, Helvetica, "Microsoft YaHei New", "Microsoft Yahei", "微软雅黑", 宋体, SimSun, STXihei, "华文细黑", sans-serif;
    font-size: 1.8em;
}

table tr:hover td {
   background-color: white;
   opacity: 1.0;
}

</style>
