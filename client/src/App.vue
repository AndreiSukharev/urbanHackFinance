<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" app temporary>
        <v-list dense>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-contact-mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Contact</v-list-item-title>
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

<style></style>

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
