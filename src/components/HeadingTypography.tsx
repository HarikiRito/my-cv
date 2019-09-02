import React, {ComponentType, Fragment} from 'react'
import {makeStyles, Theme, createStyles, Typography, Box} from '@material-ui/core'
import {compose} from 'recompose'
import {hexToRgb, fade} from '@material-ui/core/styles'

interface HeadingTypographyProps {

}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rootTypo: {
      display: 'inline-block',
      position: 'relative',
      '&::after': {
        width: '100%',
        transform: 'translateX(-100%)',
        bottom: 3,
        position: 'absolute',
        content: '\'\'',
        borderBottom: `8px solid ${fade(theme.palette.primary.main, .6)}`,
      },
    },
    body: {
      fontWeight: 500,
      fontSize: '1.175rem',
    },
  }),
)

const HeadingTypography: ComponentType<HeadingTypographyProps> = (props) => {
  const classes = useStyles(props)

  return (
    <Fragment>
      <Box mb = {4}>
        <Typography component = 'span' classes = {{
          root: classes.rootTypo,
          body1: classes.body,
        }}>
          {props.children}
        </Typography>
      </Box>
    </Fragment>
  )
}

export default compose(

)(HeadingTypography)
