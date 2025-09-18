import { useAppDispatch, useAppSelector } from "store/hooks"
import { feedbackSliceActions, feedbackSliceSelectors } from "store/redux/feedback/feedbackSlise"
import Button from "components/Button/Button"

import {
  FeedbackWrapper,
  FeedbackControl,
  Count,
  ButtonwithcountContainer,
} from "./styles"

function Feedback(){
const dispatch = useAppDispatch()

const onLike = () => {
  dispatch(feedbackSliceActions.addLike())
}
const onDislike = () => {
  dispatch(feedbackSliceActions.addDislike())
}
const resetResults = () => {
  dispatch(feedbackSliceActions.resetFeedback())
}
 const like = useAppSelector(feedbackSliceSelectors.like);
 const dislike = useAppSelector(feedbackSliceSelectors.dislike);
return (
  <FeedbackWrapper>
    <FeedbackControl>
      <ButtonwithcountContainer>
        <Button name="Like" onClick={onLike} />
        <Count>{like}</Count>
      </ButtonwithcountContainer>
      <ButtonwithcountContainer>
        <Button name="Dislike" onClick={onDislike} />
        <Count>{dislike}</Count>
      </ButtonwithcountContainer>
    </FeedbackControl>
    <Button name="Reset Results" onClick={resetResults} />
  </FeedbackWrapper>
)
}
export default Feedback
