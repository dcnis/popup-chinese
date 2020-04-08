<template>
    <div>
        <div v-if="loading">Loading..</div>
        <div v-else>
        <v-simple-table :light="false">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Speaker</th>
              <th class="text-left">
                <span class="nobreak padding-right">
                  <input type="checkbox" id="checkboxPinyin" v-model="hidePinyin">
                  <label for="checkboxPinyin"> hide pinyin</label>
                </span>
                <span class="nobreak">
                  <input type="checkbox" id="checkboxTranslation" v-model="hideTranslation">
                  <label for="checkboxTranslation"> hide translation</label>
                </span>
            </th>
            </tr>
          </thead>
          <tbody>

            <tr v-for="item in dialogs" :key="item.dialogId">
              <td>{{item.speaker}}</td>
              <td>{{item.chinese}}<br>
                  <span v-if="!hidePinyin">
                    {{item.pinyin}}<br>
                  </span>
                  <span v-if="!hideTranslation">
                    {{item.english}}<br>
                  </span>
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
      ],
      hidePinyin: false,
      hideTranslation: false
    };
  },
  mounted() {
    if (localStorage.hidePinyin === 'true') {
      this.hidePinyin = localStorage.hidePinyin;
    }
    if (localStorage.hideTranslation === 'true') {
      this.hideTranslation = localStorage.hideTranslation;
    }
  },
  watch: {
    hidePinyin(value) {
      localStorage.hidePinyin = value;
      this.hidePinyin = value;
    },
    hideTranslation(value) {
      localStorage.hideTranslation = value;
      this.hideTranslation = value;
    }
  },
  created() {
    axios.get('https://heroku-popup-chinese-backend.herokuapp.com/getDialogsByLessonId/' +
            this.$route.params.id)
      .then((response) => {
        this.dialogs = response.data;
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

.padding-right{
    padding-right: 30px;
}

.nobreak{
    white-space:  nowrap;
}

</style>
