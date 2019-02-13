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
      const budgetPerOneDay = budget / daysInMonth;
      let daysInDateRange;
      let monthLists = this.getMonthsInDateRange(startDate, endDate);

      if (monthLists.length === 1) {
        daysInDateRange = this.getDaysInDateRange(startDate, endDate);
      } else {
        let currentMonthStart;
        let currentMonthEnd;
        let currentMonthRemainDays;

        for (let i = 0; i < monthLists.length; i++) {
          if (moment(budgetDate).get('month') + 1 == moment(monthLists[i]).get('month') + 1) {
            currentMonthStart = moment(startDate);
            currentMonthEnd = moment(startDate).endOf('month');
            currentMonthRemainDays = this.getDaysInDateRange(currentMonthStart, currentMonthEnd);
          }
        }
        return budgetPerOneDay * currentMonthRemainDays;
      }

      return budgetPerOneDay * daysInDateRange;
    },
    getDaysInDateRange(startDate, endDate) {
      const a = moment(startDate);
      const b = moment(endDate);
      return Math.abs(a.diff(b, 'days')) + 1;
    },
    getMonthsInDateRange(startDate, endDate) {
      var dateStart = moment(startDate);
      var dateEnd = moment(endDate);
      var monthValues = [];

      while (dateEnd > dateStart || dateStart.format('M') === dateEnd.format('M')) {
        monthValues.push(dateStart.format('YYYY-MM'));
        dateStart.add(1,'month');
      }

      return monthValues;
    },
    isSameMonth(startDate, endDate) {
      return moment(startDate).isSame(endDate, 'month');
    }
  },
};
</script>

<style scoped>

</style>
