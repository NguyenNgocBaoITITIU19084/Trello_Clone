import Box from '@mui/material/Box'

function BoardContent() {
  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', height: (theme) => `calc(100vh - ${theme.trello.appBardHeight} - ${theme.trello.boardBarHeight })` }}>
        Board Content
    </Box>
  )
}

export default BoardContent
