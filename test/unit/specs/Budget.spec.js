import { mount } from '@vue/test-utils';
import Budget from '@/components/Budget';

describe('Budget Calculator', () => {
  it('give "$31" for "2019-03" and date-range from "2019-03-01" to "2019-03-31"，should get "31"', () => {
    // arrange
    const wrapper = mount(Budget);
    const budget = 31;
    const budgetDate = '2019-03';
    const startDate = '2019-03-01';
    const endDate = '2019-03-31';

    // act
    const result = wrapper.vm.budgetCalculator(budget, budgetDate, startDate, endDate);

    // assert
    expect(result).toBe(31);
  });

  it('give "$28" for "2019-02" and date-range from "2019-02-01" to "2019-02-28"，should get "28" ', () => {
    // arrange
    const wrapper = mount(Budget);
    const budget = 28;
    const budgetDate = '2019-02';
    const startDate = '2019-02-01';
    const endDate = '2019-02-28';

    // act
    const result = wrapper.vm.budgetCalculator(budget, budgetDate, startDate, endDate);

    // assert
    expect(result).toBe(28);
  });
});
