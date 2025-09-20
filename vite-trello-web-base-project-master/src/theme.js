import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({
  trello: {
    appBardHeight: '50px',
    boardBarHeight: '60px'
  },
  colorSchemes: {
    light: {
      palette: {
        // primary: {
        //   main: '#ff5252'
        // }
      }
    },
    dark: {
      palette: {
        // primary: {
        //   main: '#000'
        // }
      }
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            textTransform: 'none',
            '&:hover': {
              borderColor: `${theme.palette.primary.light}`
            }
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            color: `${theme.palette.primary.main}`,
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: `${theme.palette.primary.main}`
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: `${theme.palette.primary.light}`
            }
          }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            color: `${theme.palette.primary.main}`
          }
        }
      }
    }
  }
})

export default theme