import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constans/styles";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'T-shirt',
    amount: 30.11,
    date: new Date('2024-05-23'),
  }, {
    id: 'e2',
    description: 'Apples',
    amount: 10.25,
    date: new Date('2024-07-23'),
  }, {
    id: 'e3',
    description: 'Notebook',
    amount: 5.88,
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
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  }
});