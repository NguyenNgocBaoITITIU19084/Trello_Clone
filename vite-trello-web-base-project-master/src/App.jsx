import Container from '@mui/material/Container'
import DarkLightToggle from './components/DarkLightToggle/DarkLightToggle'
import Box from '@mui/material/Box'

function App() {

  return (
    <>
      <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', height: (theme) => `${ theme.trello.appBardHeight }`}}>
          <DarkLightToggle />
        </Box>
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', height: (theme) => `${ theme.trello.boardBarHeight }` }}>
          Board Bar
        </Box>
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', height: (theme) => `calc(100vh - ${theme.trello.appBardHeight} - ${theme.trello.boardBarHeight })` }}>
          Board Content
        </Box>
      </Container>
    </>
  )
}

export default App
