import booksReducer, { fetchBooks } from './slices/booksSlice'
import charactersReducer, { fetchCharacters } from './slices/charactersSlice'
import housesReducer, { fetchHouses } from './slices/housesSlice'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    books: booksReducer,
    characters: charactersReducer,
    houses: housesReducer,
  },
})

store.dispatch(fetchBooks())
store.dispatch(fetchCharacters())
store.dispatch(fetchHouses())

export default store
