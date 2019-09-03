import React, {ComponentType, Fragment} from 'react'
import {compose} from 'recompose'
import {makeStyles, Theme, createStyles} from '@material-ui/core'

interface TimelineProps {

}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    timeline: {
      borderLeft: `2px solid ${theme.palette.primary.main}`,
      marginBlockStart: 0,
      marginBlockEnd: 0,
      listStyleType: 'none',
      paddingInlineStart: '0.75rem',
      position: 'relative',
    },
    event: {
      '&:after': {
        position: 'absolute',
        display: 'block',
        content: '\'\'',
        left: -6.48,
        top: 4,
        width: 10,
        height: 10,
        borderRadius: 50,
        // display: 'inline-block',
        border: `2px solid ${theme.palette.primary.main}`,
        backgroundColor: 'white',
      },
    },
  }),
)

const Timeline: ComponentType<TimelineProps> = (props) => {
  const classes = useStyles(props)
  return (
    <Fragment>
      <ul className = {classes.timeline}>
        <li className = {classes.event}>abc</li>
        <li className = {classes.event}>abc</li>
      </ul>
    </Fragment>
  )
}

export default compose<TimelineProps, any>(

)(Timeline)
