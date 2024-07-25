import { createContext, useReducer } from "react";

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


export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch(action.type) {
    case 'ADD':
      const id = new Date().toISOString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case 'UPPDATE':
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data }
      const updatedExpenses  = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload);
    default: 
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expenseState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type:'ADD', payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type:'DELETE', payload: id })
  }

  function updateExpense(id, expenseData) {
    dispatch({ type:'UPPDATE', payload: { id: id, data: expenseData } })
  }

  const value = {
    expenses: expenseState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense, 
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;