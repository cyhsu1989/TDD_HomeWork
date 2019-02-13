<template>
  <div>

  </div>
</template>

<script>
import moment from 'moment';

export default {
  data() {
    return {

    };
  },
  methods: {
    budgetCalculator(budget, budgetDate, startDate, endDate) {
      const daysInMonth = moment(budgetDate, 'YYYY-MM').daysInMonth();
      const daysInDateRange = this.getDaysInDateRange(startDate, endDate);
      const budgetPerOneDay = budget / daysInMonth;

      return budgetPerOneDay * daysInDateRange;
    },
    getDaysInDateRange(startDate, endDate) {
      const a = moment(startDate);
      const b = moment(endDate);
      return Math.abs(a.diff(b, 'days')) + 1;
    },
  },
};
</script>

<style scoped>

</style>
