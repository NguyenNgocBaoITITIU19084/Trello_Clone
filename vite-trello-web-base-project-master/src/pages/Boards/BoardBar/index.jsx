import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import FilterListIcon from '@mui/icons-material/FilterList'
import BoltIcon from '@mui/icons-material/Bolt'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'

const MENU_STYLE = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', paddingX: 2, height: (theme) => `${ theme.trello.boardBarHeight }`, backgroundColor: (theme) => `${theme.palette.primary.main}`, justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Chip sx={MENU_STYLE} icon={<DashboardIcon />} label="Bao Nguyen Dashboard" clickable />
        <Chip sx={MENU_STYLE} icon={<VpnLockIcon />} label="Public/Private" clickable />
        <Chip sx={MENU_STYLE} icon={<BoltIcon />} label="Automation" clickable/>
        <Chip sx={MENU_STYLE} icon={<AddToDriveIcon />} label="Add To Drive" clickable/>
        <Chip sx={MENU_STYLE} icon={<FilterListIcon />} label="Filter" clickable/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'space-between' }}>
        <Button variant="outlined" startIcon={<PersonAddIcon/>} sx={{ color: 'white', borderColor: 'white' }}>Invite</Button>
        <AvatarGroup max={4} sx={{ '& :first-of-type': { height: '30px', width: '30px' } }} >
          <Avatar sx={{ height: '30px', width: '30px' }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar sx={{ height: '30px', width: '30px' }} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar sx={{ height: '30px', width: '30px' }} alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar sx={{ height: '30px', width: '30px' }} alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar sx={{ height: '30px', width: '30px' }} alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
