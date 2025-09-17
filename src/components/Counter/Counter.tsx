import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  counterSliceActions,
  counterSliceSelectors,
} from "store/redux/counter/counterSlice"

import Button from "components/Button/Button"

import { CounterWrapper, Count, ButtonControl } from "./styles"

function Counter() {
  //хук юз апп диспатч не принимает в себя аргументы, он просто возвращает нам функцию диспатч,
  //  которая передает акстьео нв редюс стор. Потом на переданный экшен запускается нужный нам reducer
  const dispatch = useAppDispatch()

  //получаем значения из Redux store, затем передаем значения в нужные места в JSX
  // и т.о. подписываемся на изменения в redux store
  const count = useAppSelector(counterSliceSelectors.count)
  const onPlus = () => {
    //counterSliceActions.plus() - action creator - возаращает нам Экшен (это объект, состоящий из двух пар ключ/значение:
    // 1. type - cтрока, тип экшена, ко которому у на вызывается редьюсер. Например "VOUNTER/plus")
    //2. payload - неопределено. Может содержать данные которые мы можем передать в редьюсер

    dispatch(counterSliceActions.plus())
  }
  const onMinus = () => {
    dispatch(counterSliceActions.minus()) // counterSliceActions.minus() = actionCreator
  }

  const onMultiply = () => {
    dispatch(counterSliceActions.multiply(3))
  }
  const onDivide = () => {
    dispatch(counterSliceActions.divide(5))
  }

  return (
    <CounterWrapper>
      <ButtonControl>
        <Button name="/" onClick={onDivide} />
      </ButtonControl>
      <ButtonControl>
        <Button name="-" onClick={onMinus} />
      </ButtonControl>
      <Count className="count">{count}</Count>
      <ButtonControl>
        <Button name="+" onClick={onPlus} />
      </ButtonControl>
      <ButtonControl>
        <Button name="*" onClick={onMultiply} />
      </ButtonControl>
    </CounterWrapper>
  )
}

export default Counter
