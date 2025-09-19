import { createAppSlice } from "store/createAppSlice"
import { FeedbackSliceSate } from "./types"

const feedbackInitialState = {
  likes: 0,
  dislikes: 0,
}

export const feedbackSlice = createAppSlice({
  name: "FEEDBACK", 
  initialState: feedbackInitialState,
  reducers: create => ({
    addLike: create.reducer(state => {
      state.likes += 1
    }),
    addDislike: create.reducer(state => {
      state.dislikes += 1
    }),
    resetFeedback: create.reducer(state => {
     feedbackInitialState
    }),
  }),
  selectors: {
      like: (state: FeedbackSliceSate) => {
        return state.likes
      },
      dislike: (state: FeedbackSliceSate) => {
        return state.dislikes
      },
    },
})

export const feedbackSliceActions= feedbackSlice.actions;
export const feedbackSliceSelectors = feedbackSlice.selectors;