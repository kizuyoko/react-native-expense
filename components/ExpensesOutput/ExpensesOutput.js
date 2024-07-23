import { View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'T-shirt',
    amount: 30,
    date: new Date('2024-05-23'),
  }, {
    id: 'e2',
    description: 'Apples',
    amount: 10,
    date: new Date('2024-07-23'),
  }, {
    id: 'e3',
    description: 'Notebook',
    amount: 5.8,
    date: new Date('2024-01-20'),
  }, {
    id: 'e4',
    description: 'Cup',
    amount: 10.23,
    date: new Date('2024-01-10'),
  }

];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary 
        expenses={DUMMY_EXPENSES}
        periodName={expensesPeriod} 
      />
      <ExpensesList expenses={DUMMY_EXPENSES}/>
    </View>
  );
}

export default ExpensesOutput;