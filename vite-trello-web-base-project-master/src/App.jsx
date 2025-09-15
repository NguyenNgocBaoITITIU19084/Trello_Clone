import { useColorScheme } from '@mui/material/styles'
import Button from '@mui/material/Button'
import DarkLightToggle from './components/DarkLightToggle/DarkLightToggle'

function ModeToggle() {

  const { mode, setMode } = useColorScheme()


  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}

function App() {

  return (
    <>
      <ModeToggle/>
      <DarkLightToggle />
    </>
  )
}

export default App
