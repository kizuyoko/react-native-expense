import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constans/styles";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'Shoes',
    amount: 30.11,
    date: new Date('2023-01-23'),
  }, {
    id: 'e2',
    description: 'Cucumbers',
    amount: 2.25,
    date: new Date('2023-04-23'),
  }, {
    id: 'e3',
    description: 'Tablet',
    amount: 2365.88,
    date: new Date('2023-06-20'),
  }, {
    id: 'e4',
    description: 'Pen',
    amount: 1.23,
    date: new Date('2023-11-20'),
  }, {
    id: 'e5',
    description: 'T-shirt',
    amount: 30.11,
    date: new Date('2024-05-23'),
  }, {
    id: 'e6',
    description: 'Apples',
    amount: 10.25,
    date: new Date('2024-07-23'),
  }, {
    id: 'e7',
    description: 'Notebook',
    amount: 5.88,
    date: new Date('2024-01-20'),
  }, {
    id: 'e8',
    description: 'Cup',
    amount: 10.23,
    date: new Date('2024-01-10'),
  }

];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary 
        expenses={DUMMY_EXPENSES}
        periodName={expensesPeriod} 
      />
      <ExpensesList expenses={DUMMY_EXPENSES}/>
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  }
});