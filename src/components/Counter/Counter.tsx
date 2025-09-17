import { useAppDispatch, useAppSelector} from "store/hooks"
import { counterSliceActions, 
  counterSliceSelectors,
} from "store/redux/counter/counterSlice"

import Button from "components/Button/Button"

import { CounterWrapper, Count, ButtonControl } from "./styles"


function Counter() {

  //хук юз апп диспатч не принимает в себя аргументы, он просто возвращает нам функцию диспатч,
  //  которая передает акстьео нв редюс стор. Потом на переданный экшен запускается нужный нам reducer
const dispatch = useAppDispatch();

//получаем значения из Redux store, затем передаем значения в нужные места в JSX 
// и т.о. подписываемся на изменения в redux store
const count = useAppSelector(counterSliceSelectors.count)
  const onPlus = () => {
    dispatch(counterSliceActions.plus())
  };
const onMinus = () => {};


  return (
    <CounterWrapper>
      <ButtonControl>
        <Button name="-" onClick={onMinus} />
      </ButtonControl>
      <Count className="count">{count}</Count>
      <ButtonControl>
        <Button name="+" onClick={onPlus} />
      </ButtonControl>
    </CounterWrapper>
  )
}

export default Counter;