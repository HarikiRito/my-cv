import {ThemeOptions} from '@material-ui/core/es/styles/createMuiTheme'
import {createMuiTheme} from '@material-ui/core/styles'
import {PaletteOptions} from '@material-ui/core/styles/createPalette'
import {FontStyleOptions, TypographyOptions} from '@material-ui/core/styles/createTypography'
import Red from '@material-ui/core/colors/red'
import Gray from '@material-ui/core/colors/grey'

interface PaletteExtra extends PaletteOptions {

}

export interface ThemeCustom extends ThemeOptions {
  palette?: PaletteExtra;
  typography?: TypographyOptions | FontStyleOptions
}

const options: ThemeCustom = {
  palette: {
    primary: {
      main: Gray[100],
    },
    secondary: {
      main: Gray[900],
    },
    error: {
      main: Red[600],
    },
  },
};

export const theme = createMuiTheme(options);
