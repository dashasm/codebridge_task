import { createSlice } from '@reduxjs/toolkit'
import { IArtice } from './types/article'

export interface CounterState {
  article: IArtice[]
  selectedArticle: IArtice | null
}

const initialState: CounterState = {
  article: [],
  selectedArticle: null
}

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setArticles: (state, action) => {
      state.article = action.payload
    },
    setSelectedArticle: (state, action) => {
      state.selectedArticle = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setArticles, setSelectedArticle } = articleSlice.actions

export default articleSlice.reducer