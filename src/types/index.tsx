import { ThunkAction, Action } from '@reduxjs/toolkit'

import store from '../stores/store'

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

interface ListState {
  status: 'idle' | 'succeeded' | 'loading' | 'failed'
  error?: string
}

interface BookList {
  list: Book[]
}

export type BooksState = BookList & ListState

interface CharacterList {
  list: Character[]
}

export type CharactersState = CharacterList & ListState

interface HouseList {
  list: House[]
}

export type HousesState = HouseList & ListState

export type Book = {
  url: string
  name: string
  isbn: string
  authors: string[]
  numberOfPages: number
  publisher: string
  country: string
  mediaType: string
  released: string
  characters: string[]
  povCharacters: string[]
}

export type Character = {
  url: string
  name: string
  gender: string
  culture: string
  born: string
  died: string
  titles: string[]
  aliases: string[]
  father: string
  mother: string
  spouse: string
  allegiances: string[]
  books: string[]
  povBooks: string[]
  tvSeries: string[]
  playedBy: string[]
}

export type House = {
  url: string
  name: string
  region: string
  coatOfArms: string
  words: string
  titles: string[]
  seats: string[]
  currentLord: string
  heir: string
  overlord: string
  founded: string
  founder: string
  diedOut: string
  ancestralWeapons: string[]
  cadetBranches: string[]
  swornMembers: string[]
}
