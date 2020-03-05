<template>
    <div>
        <div v-if="loading">Loading..</div>
        <div v-else>
        <v-simple-table :light="false">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Speaker</th>
              <th class="text-left">Dialog</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in dialogs" :key="item.dialogId">
              <td>{{item.speaker}}</td>
              <td>{{item.chinese}}<br>
                  {{item.pinyin}}<br>
                  {{item.english}}<br>
              </td>
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
      loading: true,
      dialogs: [],
      headers: [
        {
          text: 'Speaker',
          align: 'left',
          sortable: false,
          value: 'speaker'
        },
        { text: 'Dialog', value: 'chinese' },
        { value: 'pinyin' },
        { value: 'english' }
      ]
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
  background-color: #F5F5F5;
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
