import { mount } from '@vue/test-utils';
import Budget from '@/components/Budget';

describe('Budget Calculator', () => {
  it('give "$31" for "2019-03" and date-range from "2019-03-01" to "2019-03-31"，should get "31"', () => {
    // arrange
    const wrapper = mount(Budget);
    const budgetSettings = [
      {
        budget: 31,
        budgetDate: '2019-03',
      },
    ];
    const startDate = '2019-03-01';
    const endDate = '2019-03-31';

    // act
    const result = wrapper.vm.budgetCalculator(budgetSettings, startDate, endDate);

    // assert
    expect(result).toBe(31);
  });

  it('give "$28" for "2019-02" and date-range from "2019-02-01" to "2019-02-28"，should get "28"', () => {
    // arrange
    const wrapper = mount(Budget);
    const budgetSettings = [
      {
        budget: 28,
        budgetDate: '2019-02',
      },
    ];
    const startDate = '2019-02-01';
    const endDate = '2019-02-28';

    // act
    const result = wrapper.vm.budgetCalculator(budgetSettings, startDate, endDate);

    // assert
    expect(result).toBe(28);
  });

  it('give "$31" for "2019-03" and date-range from "2019-03-01" to "2019-03-01"，should get "1"', () => {
    // arrange
    const wrapper = mount(Budget);
    const budgetSettings = [
      {
        budget: 31,
        budgetDate: '2019-03',
      },
    ];
    const startDate = '2019-03-01';
    const endDate = '2019-03-01';

    // act
    const result = wrapper.vm.budgetCalculator(budgetSettings, startDate, endDate);

    // assert
    expect(result).toBe(1);
  });

  it('give "$28" for "2019-02" and date-range from "2019-02-15" to "2019-03-15"，should get "14"', () => {
    // arrange
    const wrapper = mount(Budget);
    const budgetSettings = [
      {
        budget: 28,
        budgetDate: '2019-02',
      },
    ];
    const startDate = '2019-02-15';
    const endDate = '2019-03-15';

    // act
    const result = wrapper.vm.budgetCalculator(budgetSettings, startDate, endDate);

    // assert
    expect(result).toBe(14);
  });

  it('give "$28" for "2019-02" and "$93" for "2019-03" and date-range from "2019-02-28" to "2019-03-01"，should get "4"', () => {
    // arrange
    const wrapper = mount(Budget);
    const budgetSettings = [
      {
        budget: 28,
        budgetDate: '2019-02',
      },
      {
        budget: 93,
        budgetDate: '2019-03',
      },
    ];
    const startDate = '2019-02-28';
    const endDate = '2019-03-01';

    // act
    const result = wrapper.vm.budgetCalculator(budgetSettings, startDate, endDate);

    // assert
    expect(result).toBe(4);
  });

  it('give "$60" for "2019-04" and "$120" for "2019-06" and date-range from "2019-04-30" to "2019-07-15"，should get "122"', () => {
    // arrange
    const wrapper = mount(Budget);
    const budgetSettings = [
      {
        budget: 60,
        budgetDate: '2019-04',
      },
      {
        budget: 120,
        budgetDate: '2019-06',
      },
    ];
    const startDate = '2019-04-30';
    const endDate = '2019-07-15';

    // act
    const result = wrapper.vm.budgetCalculator(budgetSettings, startDate, endDate);

    // assert
    expect(result).toBe(122);
  });

  it('give "$31" for "2019-01" and "$31" for "2020-01" and date-range from "2019-01-31" to "2020-01-01"，should get "2"', () => {
    // arrange
    const wrapper = mount(Budget);
    const budgetSettings = [
      {
        budget: 31,
        budgetDate: '2019-01',
      },
      {
        budget: 31,
        budgetDate: '2020-01',
      },
    ];
    const startDate = '2019-01-31';
    const endDate = '2020-01-01';

    // act
    const result = wrapper.vm.budgetCalculator(budgetSettings, startDate, endDate);

    // assert
    expect(result).toBe(2);
  });
});
