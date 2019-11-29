<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" app temporary>
        <v-list dense>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title">
                Application
              </v-list-item-title>
              <v-list-item-subtitle>
                Москва
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item link to="/">
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link to="/calendar">
            <v-list-item-action>
              <v-icon>mdi-calendar</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Calendar</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar app color="primary" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title>Application</v-toolbar-title>
      </v-app-bar>

      <v-content>
        <router-view />
      </v-content>
      <v-footer color="primary" app>
        <span class="white--text">&copy; 2019</span>
      </v-footer>
    </v-app>
  </div>
</template>

<style>
h1 {
  margin: 16px auto;
}
</style>

<script>
export default {
  props: {
    source: String
  },
  mounted() {
    console.log(this.$session.exists());
    if (!this.$session.exists()) {
      this.$router.push("/login");
    } else {
      this.$store.commit("setLogin", this.$session.get("login"));
      this.$store.commit("setUserId", this.$session.get("userId"));
    }
  },
  data: () => ({
    drawer: null
  })
};
</script>
