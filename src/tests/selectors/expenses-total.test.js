import getTotalExpenses from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should return 0 if no expenses', () => {
    const totalExpenses = getTotalExpenses(expenses);
    expect(totalExpenses).toBe(157902);
});