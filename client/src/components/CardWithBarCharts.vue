<template>
  <v-card>
    <v-card-title>
      <slot></slot>
    </v-card-title>
    <v-card-text>
      <bar-chart
        :chart-data="datacollection"
        :options="this.options"
      ></bar-chart>
      <!--            <v-btn @click="fillData()">Randomize</v-btn>-->
    </v-card-text>
  </v-card>
</template>

<script>
import BarChart from "../charts/BarChart.js";

export default {
  components: {
    BarChart
  },
  data() {
    return {
      datacollection: {},
      options: {
        scales: {
          xAxes: [
            {
              ticks: {
                min: 0
              }
            }
          ]
        }
      }
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        datasets: [
          {
            label: "Выполнено",
            backgroundColor: "#3cf84c",
            data: [this.getRandomInt()]
          },
          {
            label: "В процессе",
            backgroundColor: "#6c82f8",
            data: [this.getRandomInt()]
          },
          {
            label: "Просрочено",
            backgroundColor: "#f87979",
            data: [this.getRandomInt()]
          }
        ]
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    }
  }
};
</script>

<style></style>
