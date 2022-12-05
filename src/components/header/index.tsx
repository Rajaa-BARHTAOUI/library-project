import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const NAV_ITEMS = [{ name: 'Home', path: '/' }]

const TITLE_SX = { flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: '#282465' }
const BOX_ITEMS_SX = { display: { xs: 'none', sm: 'block' } }
const BUTTON_SX = { color: '#282465' }
const APP_BAR_SX = { backgroundColor: '#f6f6f7' }

const Header = () => {
  const navigate = useNavigate()

  return (
    <Box>
      <AppBar component='nav' sx={APP_BAR_SX}>
        <Toolbar>
          <Typography variant='h5' component='div' sx={TITLE_SX}>
            LIBRARY
          </Typography>
          <Box sx={BOX_ITEMS_SX}>
            {NAV_ITEMS.map((item) => (
              <Button key={item.name} sx={BUTTON_SX} onClick={() => navigate(item.path)}>
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
