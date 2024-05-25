import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  students: [],
};

const formSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      const student = {
        id: nanoid(),
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
        option: action.payload.option,
        dropoption: action.payload.dropoption,
        date: action.payload.date,
        time: action.payload.time,
        amount: action.payload.amount,
        duration: action.payload.amount,
      };
      state.students.push(student);
    },
    removeStudent: (state, action) => {
      state.students = state.students.filter(
        (student) => student.id !== action.payload
      );
    },
  },
});

export const { addStudent, removeStudent } = formSlice.actions;

export default formSlice.reducer;
