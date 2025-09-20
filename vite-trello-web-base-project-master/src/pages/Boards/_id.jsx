import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import AppBoard from '~/components/AppBoard'
import BoardBar from './AppBoard'
import BoardContent from './BoardContent'

function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBoard />
      <BoardBar />
      <BoardContent />
    </Container>
  )
}

export default Board