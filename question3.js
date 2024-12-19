let budget = {
    income:1000,
    expenses:700
};
budget.sevings = budget.income - budget.expenses;

 budget.income = 1200;
 budget.sevings = budget.income - budget.expenses;
 
console.log(budget);