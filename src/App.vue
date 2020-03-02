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
      <v-btn outlined right fixed v-if="isLoggedIn" v-on:click="logout" id="logout-button"> Logout </v-btn>
      <v-btn outlined right fixed v-else v-on:click="login" id="login-button"> Login </v-btn>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

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
    this.isAuthenticated();
  },
  methods: {
    login() {
      this.$auth.loginRedirect('/');
    },
    async isAuthenticated() {
      this.$store.dispatch('fetchAuthentication', await this.$auth.isAuthenticated());
    },
    async logout() {
      await this.$auth.logout();
      await this.isAuthenticated();
      this.$router.push({ path: './' });
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.authenticated;
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
