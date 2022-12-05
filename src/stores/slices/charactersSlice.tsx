import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { CharactersState, RootState } from '../../types'
import { API_URL_CHARACTERS } from '../../utils/constants'

const initialState: CharactersState = {
  list: [],
  status: 'idle',
  error: undefined,
}

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.list = action.payload
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(fetchCharacterByUrl.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchCharacterByUrl.fulfilled, (state, action) => {
        state.status = 'succeeded'
        if (!state.list.includes(action.payload)) {
          state.list.push(action.payload)
        }
      })
      .addCase(fetchCharacterByUrl.rejected, (state, action) => {
        // FIXME: add a separate error for fetchCharacterByUrl
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async () => (await axios(API_URL_CHARACTERS)).data,
)

export const fetchCharacterByUrl = createAsyncThunk(
  'characters/fetchCharacterByUrl',
  async (url: string) => (await axios(url)).data,
)

export const selectAllCharacters = (state: RootState) => state.characters.list

export const selectCharactersByUrl = (state: RootState) =>
  state.characters.list.reduce(
    (charactersByUrl, currentCharacter) => ({
      ...charactersByUrl,
      [currentCharacter.url]: currentCharacter,
    }),
    {},
  )

export const selectCharactersStatus = (state: RootState) => state.characters.status

export const selectCharactersError = (state: RootState) => state.characters.error

export const selectCharacterByUrl = (state: RootState, characterUrl: string) =>
  state.characters.list.find((character) => character.url === characterUrl)

export default charactersSlice.reducer
