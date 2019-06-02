<template>
  <div>
    <v-list two-line>
      <template v-for="(lesson) in lessonsFilteredAndSorted">
        <v-list-tile :key="lesson.id" thumbnail :to="'/lesson/' + lesson.id">
          <v-list-tile-avatar>
            <img :src="lesson.thumbnail">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title v-html="lesson.title"></v-list-tile-title>
            <v-list-tile-sub-title v-html="lesson.level"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </div>
</template>

<script>
export default {
  props: {
    level: String
  },
  computed: {
    lessonsFilteredAndSorted() {
      return this.lessons
            .filter(item => item.level == this.level)
            .sort(function(a,b){
              return new Date(b.lastTimeWatched) - new Date(a.lastTimeWatched)
          });
    }
  },
  data() {
    return {
      lessons: [
        {
          id: 1,
          thumbnail: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Let me do it, myself',
          level: 'Intermediate',
          lastTimeWatched: '2019-06-02T10:00:00Z'
        },
        {
          id: 2,
          thumbnail: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: '10 signs you may have an asshole for a husband',
          level: 'Absolute Beginners',
          lastTimeWatched: '2019-06-02T12:00:00Z'
        },
        {
          id: 3,
          thumbnail: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "The Public Security Alarm",
          level: 'Elementary',
          lastTimeWatched: "2019-06-02T11:00:00Z"
        },
        {
            id: 4,
          thumbnail: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          title: "Assault, Battery and the Future",
          level: "Elementary",
          lastTimeWatched: "2019-06-02T11:00:00Z"
        },
        {
            id: 5,
          thumbnail: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          title: "The Art of Email",
          level: "Absolute Beginners",
          lastTimeWatched: "2019-06-02T11:00:00Z"
        },
               {
                   id: 6,
          thumbnail: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "The Art of Email",
          level: "Absolute Beginners",
          lastTimeWatched: "2019-06-02T11:00:00Z"
        },
        {
            id: 7,
          thumbnail: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: "A good Scrubbing",
          level: "Advanced",
          lastTimeWatched: "2019-06-02T11:00:00Z"
        },
        {
            id: 8,
          thumbnail: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "A Fair Deal",
          level: "Advanced",
          lastTimeWatched: "2019-06-02T11:00:00Z"
        }
      ]
    };
  },
  methods: {
    openLesson() {
      console.log("Lesson opened");
    }
  }
};
</script>
