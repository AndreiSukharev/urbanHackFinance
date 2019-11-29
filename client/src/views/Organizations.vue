<template>
  <v-container fluid>
    <v-row justify="center">
      <h1 class="display-1">Организации</h1>
    </v-row>
    <v-row align-content="stretch" justify="center">
      <v-col cols="12">
        <table-with-organizations></table-with-organizations>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TableWithOrganizations from "../components/TableWithOrganizations.vue";
export default {
  name: "Organizations",
  components: { TableWithOrganizations }
};
</script>

<style scoped></style>
