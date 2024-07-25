import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Input from "./Input";
import { GlobalStyles } from "../../constans/styles";
import Button from "../UI/Button";
import { getFormattedDate } from "../../util/date";

function ExpenseForm({ submitButtonLabel, onCancel, onSubmit, defaultValues }) {
  const [inputValues, setInputValues] = useState({
    amount: defaultValues ? defaultValues.amount.toString() : '',
    date: defaultValues ? getFormattedDate(defaultValues.date) : '',
    description: defaultValues ? defaultValues.description : '',
  });
  
  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputValues((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: enteredValue
      }
    });
  }

  function submitHandler() {
    const expenseData = {
      // '+' is to convert it from string to number
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description,
    };

    onSubmit(expenseData);
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
            onChangeText: inputChangeHandler.bind(this, 'amount'),
            value: inputValues.amount,
          }} 
        />
        <Input 
          style={styles.rowInput}
          label="Date" 
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, 'date'),
            value: inputValues.date,
          }} 
        />
      </View>
      <Input label="Description" textInputConfig={{
        multiline: true,
        autoCorrect: false,
        onChangeText: inputChangeHandler.bind(this, 'description'),
            value: inputValues.description,
      }} />
      <View style={styles.buttons}>
        <Button 
          mode='flat'
          onPress={onCancel} 
          style={styles.button}
        >Cancel</Button>
        <Button 
          onPress={submitHandler}
          style={styles.button} 
        >
          {submitButtonLabel}
        </Button>
      </View>
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
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});