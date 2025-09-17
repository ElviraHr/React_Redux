import { createAppSlice } from "store/createAppSlice"
import { CounterSliceSate } from "./types"

const counterInitialState = {
  count: 0,
}
export const counterSlice = createAppSlice({
  // name - это имя для slice, имя используется для нахождения событий слайса в redux devtools
  name: "COUNTER",
  // initialState - state, в котором мы прописываем значения по умолчанию
  initialState: counterInitialState,
  // reducers - это функция, которая возвращает обьект содержащий функции, которые будут изменять стейт
  reducers: create => ({
    plus: create.reducer((state: CounterSliceSate) => {
      state.count = state.count + 1
    }),
  }),
  //selectors - прописываем какие именно данные мы хотим отдать копонентам (необязательные данные:) (обязательные три выше)
  selectors: {
    count: (state: CounterSliceSate) => {
        return state.count
    }
  }
})

//counterSlice  сам создает actions для каждого отдельного reduser'a
export const counterSliceActions = counterSlice.actions;

//selectors - данные, которые мы будем отдавать компонентам, то есть позволять компонентам подписываться на redux store
export const counterSliceSelectors = counterSlice.selectors;