import React, {ComponentType, Fragment} from 'react'
import {compose} from 'recompose'
import {makeStyles, Theme, createStyles, Typography, Box} from '@material-ui/core'
import timelineCss from '@/styles/timeline.scss'
import {CSSProperties} from '@material-ui/styles'
import {grey} from '@material-ui/core/colors'
import {Moment} from 'moment'
import {useTranslation} from 'react-i18next'

interface TimelineProps {
  items: TimelineItems[]
}

export interface TimelineItems {
  title: string
  caption?: string
  start?: Moment
  end?: Moment
  body?: string
  company?: string
}

export const defaultTimelineFormat = 'Y-M'
const monthYearFormat              = 'MMM Y'
const useStyles                    = makeStyles((theme: Theme) => {
  let line           = 3
  let colorPrimary   = theme.palette.primary.main
  let radius         = 4
  let spacing        = 20
  let dot            = 10
  let dotBorder      = 2
  let afterAndBefore = {display: 'block', top: 0, position: 'absolute'} as CSSProperties
  return createStyles({
    timeColor: {
      color: grey[500],
    },
    timeline: {
      borderLeft: `${line}px solid ${grey[300]}`,
      borderBottomRightRadius: radius,
      borderTopRightRadius: radius,
      letterSpacing: '0.5px',
      position: 'relative',
      lineHeight: '1.4em',
      fontSize: '1.03em',
      paddingLeft: spacing,
      listStyle: 'none',
      textAlign: 'left',
      fontWeight: 100,
    },
    event: {
      borderBottom: '1px dashed',
      paddingBottom: spacing * 0.5,
      marginBottom: spacing,
      position: 'relative',
      '&:last-of-type': {
        paddingBottom: 0,
        marginBottom: 0,
        borderBottom: 'none',
      },
      '&:after': {
        ...afterAndBefore,
        left: `${(spacing + line + ((dot + dotBorder) * 0.35)) * -1}px`,
        background: 'white',
        border: `${dotBorder}px solid ${colorPrimary}`,
        borderRadius: '50%',
        height: dot,
        width: dot,
        content: '""',
        top: 5,
      },
    },
    h3: {
      marginBlockStart: 0,
      marginBlockEnd: 0,
    },
  })
})

const Timeline: ComponentType<TimelineProps> = (props) => {
  const classes = useStyles(props)
  const {items} = props
  const {t}     = useTranslation(['common', 'profile'])

  return (
    <Fragment>
      <ul className = {classes.timeline}>
        {items.map(item => (
          <li className = {classes.event} key = {item.title}>
            <h3 className = {classes.h3}>{t(item.title)}</h3>
            {item.company && (
              <Typography component = 'p' variant = 'caption'>
                {item.company}
              </Typography>
            )}
            {(item.start || item.end) && (
              <Typography component = 'span' variant = 'caption' classes = {{
                root: classes.timeColor,
              }}>
                {item.start.format(monthYearFormat)} - {item.end.format(monthYearFormat)}
              </Typography>
            )}
            <Box mt = {2}>
              <Typography component = 'p' variant = 'body2'>
                {t(item.body)}
              </Typography>
            </Box>
          </li>
        ))}
      </ul>
    </Fragment>
  )
}

Timeline.defaultProps = {
  items: [],
}

export default compose<TimelineProps, any>(

)(Timeline)
