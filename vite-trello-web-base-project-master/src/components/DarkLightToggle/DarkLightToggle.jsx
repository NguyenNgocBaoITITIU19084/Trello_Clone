import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import NightsStayIcon from '@mui/icons-material/NightsStay'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useColorScheme } from '@mui/material'

function DarkLightToggle() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event) => {
    setMode(event.target.value)
  }

  return (
    <Box sx={{ maxWidth: 120 }}>
      <FormControl fullWidth size='small'>
        <InputLabel sx={{ color: 'white', '&.Mui-focused': { color: 'white' } }} id="label-select-dark-light-mode">Mode</InputLabel>
        <Select
          labelId="label-select-dark-light-mode"
          id="select-dark-light-mode"
          value={mode}
          label="Age"
          onChange={handleChange}
          sx={{
            color: 'white',
            '.MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
            '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
            '.MuiSvgIcon-root': { color: 'white' }
          }}
        >
          <MenuItem value={'light'}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LightModeIcon fontSize='small'/>
              <Typography variant="span">Light</Typography>
            </Box>
          </MenuItem>
          <MenuItem value={'dark'}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <NightsStayIcon fontSize='small'/>
              <Typography variant='span'>Dark</Typography>
            </Box>
          </MenuItem>
          <MenuItem value={'system'}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Brightness7Icon fontSize='small'/>
              <Typography>System</Typography>
            </Box>
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default DarkLightToggle