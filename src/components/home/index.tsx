import { Box, Divider } from '@mui/material'

import Book from '../book'
import { Book as BookType } from '../../types'
import { selectAllBooks } from '../../stores/slices/booksSlice'
import { useAppSelector } from '../../hooks'

const DIVIDER_SX = { m: 2 }

const Home = () => {
  const books = useAppSelector(selectAllBooks)

  return (
    <Box>
      {books.map((book: BookType) => (
        <Box key={book.isbn}>
          <Book book={book} />
          <Divider variant='middle' sx={DIVIDER_SX} />
        </Box>
      ))}
    </Box>
  )
}

export default Home
