<template>
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      chartData: {
        labels: [ 'Nur lox', 'John', 'Marie', 'Sasha', 'Aboba' ],
        datasets: [
        {
          label: 'Working hours',
          backgroundColor: '#FFA500',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        }
      ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
  // ,
  // created() {
  //   //axis 
  //   this.chartData.labels = [];
  //   this.chartData.datasets[0].data = [];
  //   //create grouping loop ...

  //   //loop for results
  //   this.chartData.labels.push("1");
  //   this.chartData.datasets[0].data.push(5);
  // }
}
</script>