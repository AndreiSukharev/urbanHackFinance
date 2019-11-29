<template>
  <v-container fluid>
    <v-row no-gutters justify="center">
      <h1 class="display-1">Календарь событий</h1>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="12" md="10">
        <calendar-month></calendar-month>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CalendarMonth from "../components/CalendarMonth.vue";
export default {
  name: "Calendar",
  components: { CalendarMonth }
};
</script>

<style scoped></style>
