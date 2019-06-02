<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list dense>
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-group prepend-icon="layers" value="true">
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>Chinese Lessons</v-list-tile-title>
            </v-list-tile>
          </template>

          <v-list-tile to="/lessons-absolute-beginners">
            <v-list-tile-action></v-list-tile-action>
            <v-list-tile-title>Absolute Beginners</v-list-tile-title>
            <v-icon>child_care</v-icon>
          </v-list-tile>

          <v-list-tile to="/lessons-elementary">
            <v-list-tile-action></v-list-tile-action>
            <v-list-tile-title>Elementary</v-list-tile-title>
            <v-icon>spa</v-icon>
          </v-list-tile>

          <v-list-tile to="/lessons-intermediate">
            <v-list-tile-action></v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Intermediate</v-list-tile-title>
            </v-list-tile-content>
            <v-icon>star</v-icon>
          </v-list-tile>

          <v-list-tile to="/lessons-advanced">
            <v-list-tile-action></v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Advanced</v-list-tile-title>
            </v-list-tile-content>
            <v-icon>school</v-icon>
          </v-list-tile>
        </v-list-group>

        <v-list-tile to="/about">
          <v-list-tile-action>
            <v-icon>info</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>About</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="light-blue" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>POPUP CHINESE</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer color="cyan darken-4" app>
      <span class="white--text">Copyright Dennis Schmidt 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  props: {
    source: String
  },
  data() {
    return {
      drawer: null
    };
  }
};
</script>
