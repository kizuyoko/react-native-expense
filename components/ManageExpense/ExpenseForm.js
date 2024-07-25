import { View, StyleSheet, Text } from "react-native";
import Input from "./Input";
import { GlobalStyles } from "../../constans/styles";

function ExpenseForm() {
  function amountChangeHandler() {

  }

  function dateChangeHandler() {

  }

  function descriptionChangeHandler() {

  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input 
          style={styles.rowInput}
          label="Amount" 
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: amountChangeHandler,
          }} 
        />
        <Input 
          style={styles.rowInput}
          label="Date" 
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: dateChangeHandler,
          }} 
        />
      </View>
      <Input label="Description" textInputConfig={{
        multiline: true,
        autoCorrect: false,
        onChangeText: descriptionChangeHandler
      }} />
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 80,
  },
  title: {
    fontSize: 24,
    fontWeight:'bold',
    color: GlobalStyles.colors.baseText,
    marginVertical: 24,
    textAlign: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  }
});