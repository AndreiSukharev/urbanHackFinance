<template>
  <v-container class="" fluid>
    <v-row justify="center" no-gutters>
      <h1 class="display-1">
        Бюджетный процесс
      </h1>
    </v-row>
    <v-row align-content="stretch" justify="center">
      <v-col cols="12" sm="8" md="3">
        <card-with-bar-charts>Закрытие</card-with-bar-charts>
      </v-col>
      <v-col cols="12" sm="8" md="3">
        <card-with-bar-charts>Выполнение</card-with-bar-charts>
      </v-col>
      <v-col cols="12" sm="8" md="3">
        <card-with-bar-charts>Планирование</card-with-bar-charts>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardWithBarCharts from "../components/CardWithBarCharts.vue";
export default {
  name: "Home",
  components: { CardWithBarCharts }
};
</script>

<style scoped></style>
