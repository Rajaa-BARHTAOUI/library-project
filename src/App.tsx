import Box from '@mui/material/Box'
import { Route, Routes } from 'react-router-dom'

import Header from './components/header'
import Home from './components/home'
import BookDetails from './components/book/bookDetails'
import NoPage from './components/no-page'

const BOX_CONTAINER_SX = {
  color: '#1a1b38',
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '150%',
}

const HEADER_SX = { mb: 9 }

function App() {
  return (
    <Box sx={BOX_CONTAINER_SX}>
      <Box sx={HEADER_SX}>
        <Header />
      </Box>
      <Box>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books/:isbn/details' element={<BookDetails />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </Box>
    </Box>
  )
}

export default App
