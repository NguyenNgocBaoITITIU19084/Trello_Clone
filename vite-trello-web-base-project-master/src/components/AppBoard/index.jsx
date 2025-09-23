import Box from '@mui/material/Box'
import AppsIcon from '@mui/icons-material/Apps'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import NotificationsIcon from '@mui/icons-material/Notifications'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'


import DarkLightToggle from '../DarkLightToggle/DarkLightToggle'
import WorkSpace from './Menu/WorkSpace'
import Recent from './Menu/Recent'
import Start from './Menu/Start'
import Template from './Menu/Template'
import { ReactComponent as StarIcon } from '../../assets/trello-svgrepo-com.svg'
import PersonalProfile from './Menu/PersonalProfile'
import styled from '@emotion/styled'

const StyledTextField = styled(TextField)(({ theme }) => ({
  minWidth: '150px',
  maxWidth: '170px',
  '.MuiInputBase-input': { color: 'white' },
  '.MuiInputLabel-root': { color: 'white' },
  '& label.Mui-focused': { color: 'white' },
  '& .MuiOutlinedInput-root': {
    '& fieldset': { borderColor: 'white' },
    '&:hover fieldset': { borderColor: 'white' },
    '&.Mui-focused fieldset': { borderColor: 'white' }
  }
}))

function AppBoard() {
  return (
    <Box sx={{ width: '100%', display: 'flex', paddingX: 2, justifyContent: 'space-between', alignItems: 'center', height: (theme) => `${ theme.trello.appBardHeight }`, backgroundColor: (theme) => `${theme.palette.primary.main}` }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'space-between' }}>
        <AppsIcon sx={{ color: 'white' }}/>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SvgIcon component={StarIcon} inheritViewBox sx={{ color: 'white' }}/>
          <Typography variant="span" sx={{ fontWeight: 'bold', color: 'white' }}>Treello</Typography>
        </Box>
        <WorkSpace />
        <Recent />
        <Start />
        <Template />
        <Button variant="outlined" sx={{ color: 'white' }}>Create</Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'space-between' }}>
        <StyledTextField id="outlined-search" label="Search" type="text" size='small'/>
        <DarkLightToggle />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Tooltip title="Notifications">
            <Badge badgeContent={4} color="error">
              <NotificationsIcon sx={{ color: 'white' }} />
            </Badge>
          </Tooltip>

          <Tooltip title="Help">
            <HelpOutlineIcon sx={{ color: 'white' }} />
          </Tooltip>

          <PersonalProfile />
        </Box>
      </Box>
    </Box>
  )
}

export default AppBoard
