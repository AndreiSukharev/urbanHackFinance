<template>
  <v-card class="elevation-12">
    <v-toolbar color="primary" dark flat>
      <v-toolbar-title>Форма авторизации</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form @submit="submitLogin">
        <v-text-field
          label="Логин"
          name="login"
          prepend-icon="person"
          type="text"
          v-model="login"
        />
        <v-text-field
          id="password"
          label="Пароль"
          name="password"
          prepend-icon="lock"
          type="password"
          v-model="password"
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn @click="submitLogin" color="primary">Войти</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "LoginForm",
  computed: {
    login: {
      get() {
        return this.getLogin;
      },
      set(value) {
        this.$store.commit("setLogin", value);
      }
    },
    password: {
      get() {
        return this.getPassword;
      },
      set(value) {
        this.$store.commit("setPassword", value);
      }
    },
    ...mapGetters(["getLogin", "getPassword"])
  },
  methods: {
    submitLogin(event) {
      event.preventDefault();
      this.$apiClient
        .login(this.getLogin, this.getPassword)
        .then(
          function(response) {
            if (response.data.id !== undefined) {
              this.$session.start();
              this.$session.set("login", this.getLogin);
              this.$session.set("userId", response.data.id);

              this.$store.commit("setLogin", this.$session.get("login"));
              this.$store.commit("setUserId", this.$session.get("userId"));

              this.$router.push("/");
            } else {
              this.$toasted.error("Неверные данные");
            }
          }.bind(this)
        )
        .catch(() => {
          this.$toasted.error("Ошибка авторизаци");
        });
    }
  }
};
</script>

<style scoped></style>
