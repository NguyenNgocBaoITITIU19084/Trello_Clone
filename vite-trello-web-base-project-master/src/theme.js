import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const APP_BAR_HEIGHT = '50px'
const BOARD_BAR_HEIGHT = '60px'
const BOARD_CONTENT_HEIGHT = `100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT}`
const HEADER_COLUMN_HEIGHT = '40px'
const FOOTER_COLUMN_HEIGHT = '40px'

const theme = extendTheme({
  trello: {
    appBardHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT,
    headerColumnHeight: HEADER_COLUMN_HEIGHT,
    footerColumnHeight: FOOTER_COLUMN_HEIGHT
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#2980b9'
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#2c3e50'
        }
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
    // MuiOutlinedInput: {
    //   styleOverrides: {
    //     root: ({ theme }) => {
    //       return {
    //         color: `${theme.palette.primary.main}`,
    //         '& .MuiOutlinedInput-notchedOutline': {
    //           borderColor: `${theme.palette.primary.main}`
    //         },
    //         '&:hover .MuiOutlinedInput-notchedOutline': {
    //           borderColor: `${theme.palette.primary.light}`
    //         }
    //       }
    //     }
    //   }
    // },
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