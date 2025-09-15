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
import styled from '@emotion/styled'

const StyledSelectBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px'
})

function DarkLightToggle() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event) => {
    setMode(event.target.value)
  }

  return (
    <Box sx={{ maxWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
        <Select
          labelId="label-select-dark-light-mode"
          id="select-dark-light-mode"
          value={mode}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={'light'}>
            <StyledSelectBox>
              <LightModeIcon fontSize='small'/>
              <Typography variant="span">Light</Typography>
            </StyledSelectBox>
          </MenuItem>
          <MenuItem value={'dark'}>
            <StyledSelectBox>
              <NightsStayIcon fontSize='small'/>
              <Typography variant='span'>Dark</Typography>
            </StyledSelectBox>
          </MenuItem>
          <MenuItem value={'system'}>
            <StyledSelectBox>
              <Brightness7Icon fontSize='small'/>
              <Typography>System</Typography>
            </StyledSelectBox>
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default DarkLightToggle