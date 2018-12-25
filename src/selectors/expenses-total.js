
export const getExpensesTotal = (expenses) => {
    return  expenses.map( (expense) => expense.amount)
            .reduce( (accumulator, currentVal) => accumulator + currentVal, 0 );
}
export default getExpensesTotal;