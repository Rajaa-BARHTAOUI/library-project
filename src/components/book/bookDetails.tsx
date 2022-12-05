import { Box, Grid, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

import Character from '../character'
import NoData from '../no-data'
import { selectBookByIsbn } from '../../stores/slices/booksSlice'
import { useAppSelector } from '../../hooks'

const BookDetails = () => {
  const { isbn } = useParams()

  const book = useAppSelector((state) => selectBookByIsbn(state, isbn ?? ''))

  return book === undefined ? (
    <NoData />
  ) : (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Typography gutterBottom variant='h5' component='span'>
            {book.name}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography gutterBottom variant='body1' component='span'>
            Author(s):
          </Typography>
        </Grid>
        <Grid item xs={10}>
          {book.authors.map((author) => (
            <Typography key={author} gutterBottom variant='body1' component='span'>
              {author}
            </Typography>
          ))}
        </Grid>
        <Grid item md={2} xs={12}>
          <Typography gutterBottom variant='body1' component='span'>
            ISBN:
          </Typography>
        </Grid>
        <Grid item md={10} xs={12}>
          <Typography gutterBottom variant='body1' component='span'>
            {book.isbn}
          </Typography>
        </Grid>
        <Grid item md={2} xs={12}>
          <Typography gutterBottom variant='body1' component='span'>
            Released:
          </Typography>
        </Grid>
        <Grid item md={10} xs={12}>
          <Typography gutterBottom variant='body1' component='span'>
            {new Date(book.released).toLocaleDateString()}
          </Typography>
        </Grid>
        <Grid item md={2} xs={12}>
          <Typography gutterBottom variant='body1' component='span'>
            Characters:
          </Typography>
        </Grid>
        <Grid item md={10} xs={12}>
          {book.characters.map((characterUrl) => (
            <Box key={characterUrl}>
              <Character key={book.isbn + characterUrl} url={characterUrl} />
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  )
}

export default BookDetails
