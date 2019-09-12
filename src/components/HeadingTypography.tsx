import React, {ComponentType, Fragment} from 'react'
import {makeStyles, Theme, createStyles, Typography, Box, NoSsr} from '@material-ui/core'
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
        width: 'calc(100% + 6px)',
        transform: 'translateX(calc(-100% + 3px))',
        opacity: .6,
        bottom: 4,
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
      <NoSsr>
        <Box mb = {4}>
          <Typography component = 'span' classes = {{
            root: classes.rootTypo,
            body1: classes.body,
          }}>
            {props.children}
          </Typography>
        </Box>
      </NoSsr>
    </Fragment>
  )
}

export default compose(

)(HeadingTypography)
