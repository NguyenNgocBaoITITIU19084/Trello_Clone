import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import FilterListIcon from '@mui/icons-material/FilterList'
import BoltIcon from '@mui/icons-material/Bolt'

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
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', height: (theme) => `${ theme.trello.boardBarHeight }`, backgroundColor: (theme) => `${theme.palette.primary.main}`, justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, paddingX: 2 }}>
        <Chip sx={MENU_STYLE} icon={<DashboardIcon />} label="Bao Nguyen Dashboard" clickable />
        <Chip sx={MENU_STYLE} icon={<VpnLockIcon />} label="Public/Private" clickable />
        <Chip sx={MENU_STYLE} icon={<BoltIcon />} label="Automation" clickable/>
        <Chip sx={MENU_STYLE} icon={<AddToDriveIcon />} label="Add To Drive" clickable/>
        <Chip sx={MENU_STYLE} icon={<FilterListIcon />} label="Filter" clickable/>
      </Box>
      <Box></Box>
    </Box>
  )
}

export default BoardBar
