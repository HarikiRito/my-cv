import {createMuiTheme} from '@material-ui/core/styles'
import {red, blue} from '@material-ui/core/colors'

// Create a theme instance.
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue['400'],
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
})
