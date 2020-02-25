<template>
  <v-app light id="popup">
    <v-navigation-drawer
      v-model="drawer"
      app
      >
      <v-list dense nav>
        <v-list-item to="/">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-group prepend-icon="layers" value="true">
          <template v-slot:activator>
              <v-list-item-title >Chinese Lessons</v-list-item-title>
          </template>

          <v-list-item to="/lessons-absolute-beginners">
            <v-list-item-action></v-list-item-action>
            <v-list-item-title>Absolute Beginners</v-list-item-title>
            <v-icon>child_care</v-icon>
          </v-list-item>

          <v-list-item to="/lessons-elementary">
            <v-list-item-action></v-list-item-action>
            <v-list-item-title>Elementary</v-list-item-title>
            <v-icon>spa</v-icon>
          </v-list-item>

          <v-list-item to="/lessons-intermediate">
            <v-list-item-action></v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Intermediate</v-list-item-title>
            </v-list-item-content>
            <v-icon>star</v-icon>
          </v-list-item>

          <v-list-item to="/lessons-advanced">
            <v-list-item-action></v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Advanced</v-list-item-title>
            </v-list-item-content>
            <v-icon>school</v-icon>
          </v-list-item>
        </v-list-group>

        <v-list-item to="/favorites">
          <v-list-item-action>
            <v-icon>star</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Favorites</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/about">
          <v-list-item-action>
            <v-icon>info</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="#86E0C8" dark fixed app>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-btn outlined right fixed v-if="authenticated" v-on:click="logout" id="logout-button"> {{buttonText}} </v-btn>
      <v-btn outlined right fixed v-else v-on:click="login" id="login-button"> {{buttonText}} </v-btn>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  props: {
    source: String,
    lessons: []
  },
  data() {
    return {
      drawer: null,
      authenticated: false
    };
  },
  created() {
    // axios.get('https://dev-137527.okta.com')
    //   .then(response => {
    //     alert(this.response.data);
    //   });

    // var baseUrl = 'https://heroku-popup-chinese-backend.herokuapp.com/getDialogsByLessonId/1';
    // var xhr = new XMLHttpRequest();
    // if ('withCredentials' in xhr) {
    //   xhr.onerror = function() {
    //     alert('Invalid URL or Cross-Origin Request Blocked.  You must explicitly add this site (' + window.location.origin + ') to the list of allowed websites in the administrator UI');
    //   };
    //   xhr.onload = function() {
    //     alert(this.responseText);
    //   };
    //   xhr.open('GET', baseUrl, true);
    //   xhr.withCredentials = true;
    //   xhr.send();
    // } else {
    //   alert('CORS is not supported for this browser!');
    // }
  },
  updated() {
    this.isAuthenticated();
  },
  methods: {
    async isAuthenticated() {
      this.authenticated = await this.$auth.isAuthenticated();
    },
    login() {
      this.$auth.loginRedirect('/');
    },
    async logout() {
      await this.$auth.logout();
      await this.isAuthenticated();

      // Navigate back to home
      this.$router.push({ path: '/' });
    }
  },
  computed: {
    buttonText() {
      return (this.authenticated ? 'Logout' : 'Login');
    }
  }
};
</script>

<style>
.primary--text {
    color: #43E0B6 !important;
    caret-color: #43E0B6 !important;
}
</style>
