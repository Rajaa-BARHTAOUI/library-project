import { Box, Typography } from '@mui/material'
import { useMemo } from 'react'

import NoData from '../no-data'
import store from '../../stores/store'
import { fetchCharacterByUrl, selectCharacterByUrl } from '../../stores/slices/charactersSlice'
import { useAppSelector } from '../../hooks'

// TODO: improve view
const Character = ({ url }: { url: string }) => {
  const character = useAppSelector((state) => selectCharacterByUrl(state, url))

  if (character === undefined) {
    // try to fetch it
    store.dispatch(fetchCharacterByUrl(url))
  }

  const actors = useMemo(
    () => character?.playedBy.filter((actor) => actor !== '') ?? [],
    [character],
  )

  return character === undefined ? (
    <NoData />
  ) : (
    <Box>
      <Typography variant='body1' component='span'>
        {character.name} - {character.gender}
      </Typography>
      {actors.length > 0 && <span> - Actors: </span>}
      {actors.map((actor) => (
        <Typography variant='body1' component='span' key={actor + character.url}>
          {actor}
        </Typography>
      ))}
    </Box>
  )
}

export default Character
