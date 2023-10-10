import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const incomesSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addIncome: (state, action) => {
      const newIncome = {
        id: 1,
        userId: action.payload.userId,
        amount: action.payload.amount,
        cashboxId: action.payload.cashboxId,
        date: action.payload.date,
      };
      state.push(newIncome);
    },
    editIncome: (state, action) => {
      const index = state.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        state[index] = {
          id: action.payload.id,
          userId: action.payload.userId,
          amount: action.payload.amount,
          cashboxId: action.payload.cashboxId,
          date: action.payload.date,
        };
      }
    },
    deleteIncome: (state, action) => {
      return state.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addIncome, editIncome, deleteIncome } = incomesSlice.actions;

export default incomesSlice.reducer;
