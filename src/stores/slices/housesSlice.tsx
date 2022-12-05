import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { HousesState, RootState } from '../../types'
import { API_URL_HOUSES } from '../../utils/constants'

const initialState: HousesState = {
  list: [],
  status: 'idle',
  error: undefined,
}

export const booksSlice = createSlice({
  name: 'houses',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchHouses.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchHouses.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.list = action.payload
      })
      .addCase(fetchHouses.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const fetchHouses = createAsyncThunk(
  'houses/fetchHouses',
  async () => (await axios(API_URL_HOUSES)).data,
)

export const selectAllHouses = (state: RootState) => state.houses.list

export const selectBooksStatus = (state: RootState) => state.houses.status

export const selectBooksError = (state: RootState) => state.houses.error

export const selectBookByUrl = (state: RootState, houseUrl: string) =>
  state.houses.list.find((house) => house.url === houseUrl)

export default booksSlice.reducer
