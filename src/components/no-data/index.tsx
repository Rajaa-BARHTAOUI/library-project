import Typography from '@mui/material/Typography'

const ERROR_MSG = "Error, can't collect data"
const ERROR_SX = { color: '#BE1621' }

const NoData = () => (
  <Typography variant='body1' component='span' sx={ERROR_SX}>
    {ERROR_MSG}
  </Typography>
)

export default NoData
