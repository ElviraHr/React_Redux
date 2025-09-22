import { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "store/createAppSlice"
import type { EmployeesSliceState } from "./types"

const employeesInitialState: EmployeesSliceState = {employees:[]}
export const employeesSlice = createAppSlice({
  name: "EMPLOYEES",
  initialState: employeesInitialState,
  reducers: create => ({
    add: create.reducer(
      (
        state: EmployeesSliceState,
        action: PayloadAction<EmployeesSliceState>,
      ) => {
        state.employees = [...state.employees, action.payload]
      },
    ),
    delete: create.reducer(
      (state: EmployeesSliceState[], action: PayloadAction<string>) => {
        state = state.filter(employee => employee.id !== action.payload)
      },
    ),
    deleteAll: create.reducer(() => employeesInitialState),
  }),
  //selectors:
  selectors: {
    employees: (state: EmployeesSliceState[]) => {
      return state
    },
  },
})

export const employeesSliceActions = employeesSlice.actions;
export const employeesSliceSelectors = employeesSlice.selectors;