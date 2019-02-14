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
    budgetCalculator(budgetSettings, startDate, endDate) {
      let resultBudget = 0;
      for (let i = 0; i < budgetSettings.length; i++) {
        resultBudget += this.getBudgetOfMonth(budgetSettings[i].budget, budgetSettings[i].budgetDate, startDate, endDate);
      }
      return resultBudget;
    },
    getBudgetOfMonth(budget, budgetDate, startDate, endDate) {
      const daysInMonth = moment(budgetDate, 'YYYY-MM').daysInMonth();
      const budgetPerOneDay = budget / daysInMonth;
      const monthLists = this.getMonthsInDateRange(startDate, endDate);
      let daysInDateRange;

      if (monthLists.length === 1) {
        daysInDateRange = this.getDaysInDateRange(startDate, endDate);
      } else {
        let currentMonthStart;
        let currentMonthEnd;
        let currentMonthRemainDays;

        for (let i = 0; i < monthLists.length; i++) {
          if (
            moment(budgetDate).get('month') + 1 === moment(monthLists[i]).get('month') + 1 &&
            moment(budgetDate).get('year') === moment(monthLists[i]).get('year')
          ) {
            if (moment(monthLists[i]).get('month') + 1 === moment(startDate).get('month') + 1) {
              currentMonthStart = moment(startDate);
              currentMonthEnd = moment(startDate).endOf('month');
              currentMonthRemainDays = this.getDaysInDateRange(currentMonthStart, currentMonthEnd);
            } else if (moment(monthLists[i]).get('month') + 1 === moment(endDate).get('month') + 1) {
              currentMonthStart = moment(endDate);
              currentMonthEnd = moment(endDate).startOf('month');
              currentMonthRemainDays = this.getDaysInDateRange(currentMonthStart, currentMonthEnd);
            } else {
              currentMonthStart = moment(monthLists[i]);
              currentMonthEnd = moment(monthLists[i]).endOf('month');
              currentMonthRemainDays = this.getDaysInDateRange(currentMonthStart, currentMonthEnd);
            }
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
      const dateStart = moment(startDate);
      const dateEnd = moment(endDate);
      const monthValues = [];

      while (dateEnd > dateStart || dateStart.format('M') === dateEnd.format('M')) {
        monthValues.push(dateStart.format('YYYY-MM'));
        dateStart.add(1, 'month');
      }

      return monthValues;
    },
    isSameMonth(startDate, endDate) {
      return moment(startDate).isSame(endDate, 'month');
    },
  },
};
</script>

<style scoped>

</style>
