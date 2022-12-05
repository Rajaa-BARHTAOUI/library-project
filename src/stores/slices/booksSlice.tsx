import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { BooksState, RootState } from '../../types'
import { API_URL_BOOKS } from '../../utils/constants'

// TODO: add test file
const initialState: BooksState = {
  list: [],
  status: 'idle',
  error: undefined,
}

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.list = action.payload
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => (await axios(API_URL_BOOKS)).data,
)

export const selectAllBooks = (state: RootState) => state.books.list

export const selectBooksStatus = (state: RootState) => state.books.status

export const selectBooksError = (state: RootState) => state.books.error

export const selectBookByUrl = (state: RootState, bookUrl: string) =>
  state.books.list.find((book) => book.url === bookUrl)

export const selectBookByIsbn = (state: RootState, bookIsbn: string) =>
  state.books.list.find((book) => book.isbn === bookIsbn)

export default booksSlice.reducer