<template>
  <v-card>
    <v-card-title>
      {{ title }}
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="organizations"
      :items-per-page="10"
      :search="search"
      class="elevation-1"
    ></v-data-table>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TableWithOrganizations",
  computed: {
    title() {
      const stage = this.$route.params.budgetStage;
      return this.getBudgetStage(stage) + " бюджета";
    },
    ...mapGetters(["getBudgetStage"])
  },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Название организации",
          align: "left",
          sortable: true,
          value: "name"
        },
        { text: "Тип", value: "type", sortable: true },
        { text: "Просрочено", value: "expired", sortable: true },
        { text: "В процессе", value: "inProcess", sortable: true },
        { text: "Выполнено", value: "done", sortable: true }
      ],
      organizations: [
        {
          name: "Школа 5",
          type: "Казенное",
          expired: 8,
          inProcess: 24,
          done: 43
        },
        {
          name: "Школа 5",
          type: "Казенное",
          expired: 10,
          inProcess: 24,
          done: 43
        },
        {
          name: "Школа 5",
          type: "Казенное",
          expired: 10,
          inProcess: 24,
          done: 31
        },
        {
          name: "Школа 1",
          type: "Казенное",
          expired: 10,
          inProcess: 4,
          done: 43
        },
        {
          name: "Школа 5",
          type: "Муниципальное",
          expired: 10,
          inProcess: 24,
          done: 43
        },
        {
          name: "Школа 3",
          type: "Автономное",
          expired: 10,
          inProcess: 24,
          done: 43
        },
        {
          name: "Школа 5",
          type: "Казенное",
          expired: 10,
          inProcess: 24,
          done: 43
        },
        {
          name: "Школа 5",
          type: "Казенное",
          expired: 10,
          inProcess: 24,
          done: 43
        },
        {
          name: "Школа 5",
          type: "Казенное",
          expired: 10,
          inProcess: 24,
          done: 43
        }
      ]
    };
  }
};
</script>

<style scoped></style>
