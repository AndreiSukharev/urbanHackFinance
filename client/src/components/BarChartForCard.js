import { Bar, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extend: Bar,
  mixins: [reactiveProp],
  props: ["options"],
  mounted() {
    this.renderChart(this.props.chartData, this.props.options);
  }
};
