import { Box, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import NoData from '../no-data'
import { Book as BookType } from '../../types'

const RIGHT_ALIGN_SX = { textAlign: 'right' }

const Book = ({ book }: { book?: BookType }) => {
  if (book === undefined) {
    return <NoData />
  }

  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant='h5' component='span'>
            {book.name}
          </Typography>
        </Grid>
        <Grid item md={1} xs={12}>
          <Typography gutterBottom variant='body1' component='span'>
            Author(s):
          </Typography>
        </Grid>
        <Grid item md={5} xs={12}>
          {book.authors.map((author) => (
            <Typography key={author + book.isbn} gutterBottom variant='body1' component='span'>
              {author}
            </Typography>
          ))}
        </Grid>
        <Grid item md={3} xs={12}>
          <Typography gutterBottom variant='body1' component='span'>
            {new Date(book.released).toLocaleDateString()}
          </Typography>
        </Grid>
        <Grid item md={3} xs={12}>
          <Typography gutterBottom variant='body1' component='span'>
            {`${book.numberOfPages} pages`}
          </Typography>
        </Grid>
        <Grid item xs={12} sx={RIGHT_ALIGN_SX}>
          <Link to={`/books/${book.isbn}/details`}>
            <Typography>More details</Typography>
          </Link>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Book
