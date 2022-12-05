import Typography from '@mui/material/Typography'

const ERROR_MSG = "Sorry, we couldn't found this page"

const NoPage = () => (
  <Typography variant='body1' component='span'>
    {ERROR_MSG}
  </Typography>
)

export default NoPage
