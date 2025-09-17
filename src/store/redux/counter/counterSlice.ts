import { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "store/createAppSlice"
import { CounterSliceSate } from "./types"

const counterInitialState = {
  count: 0,
}
export const counterSlice = createAppSlice({
  // name - это имя для slice, имя используется для нахождения событий слайса в redux devtools и создании type в action
  name: "COUNTER",
  // initialState - state, в котором мы прописываем значения по умолчанию
  initialState: counterInitialState,
  // reducers - это функция, которая возвращает обьект содержащий функции-редьюсеры, которые в свою очередь будут изменять стейт
  reducers: create => ({
    plus: create.reducer((state: CounterSliceSate) => {
      state.count = state.count + 1
    }),
    minus: create.reducer((state: CounterSliceSate) => {
      state.count = state.count - 1
    }),

    multiply: create.reducer(
      (state: CounterSliceSate, action: PayloadAction<number>) => {
        //через дженерик передаем тип
        //payload - данные которые мы хотим передать из компонента в Редьюсер
        console.log(action.payload)
        state.count = Number((state.count * action.payload).toFixed(2)) //т.к. toFixed возвращает строку, а нам надо передать обратно число, приводим к типу Number
      },
    ),
    divide: create.reducer((state: CounterSliceSate, action: PayloadAction<number>) => {
      state.count = Number((state.count / action.payload).toFixed(2))
    }),
  }),
  //selectors - прописываем какие именно данные мы хотим отдать копонентам (необязательные данные:) (обязательные три выше)
  selectors: {
    count: (state: CounterSliceSate) => {
      return state.count
    },
  },
})

//counterSlice  сам создает actions для каждого отдельного reduser'a
export const counterSliceActions = counterSlice.actions

//selectors - данные, которые мы будем отдавать компонентам, то есть позволять компонентам подписываться на redux store
export const counterSliceSelectors = counterSlice.selectors
