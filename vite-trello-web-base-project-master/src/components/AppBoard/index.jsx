import Box from '@mui/material/Box'

import DarkLightToggle from '../DarkLightToggle/DarkLightToggle'

function AppBoard() {
  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', height: (theme) => `${ theme.trello.appBardHeight }` }}>
      <DarkLightToggle />
    </Box>
  )
}

export default AppBoard
