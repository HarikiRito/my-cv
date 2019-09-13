import React, {ComponentType, Fragment} from 'react'
import {compose} from 'recompose'
import {makeStyles, Theme, createStyles, Typography, Box} from '@material-ui/core'
import timelineCss from '@/styles/timeline.scss'
import {CSSProperties} from '@material-ui/styles'
import {grey} from '@material-ui/core/colors'
import {Moment, MomentInput} from 'moment'
import {useTranslation} from 'react-i18next'
import moment from 'moment'

interface TimelineProps {
  items: TimelineItem[]
}

export interface TimelineItem {
  index?: number
  title: string
  caption?: string
  start?: MomentInput
  end?: MomentInput
  body?: string
  lines: string[]
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
      // borderBottom: '1px dashed',
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
    bodyLine: {
      color: grey[700],
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
        {items.map(item => {
          let lines = item.lines || []
          return (
            (
              <li className = {classes.event} key = {item.index}>
                <h3 className = {classes.h3}>{t(item.title)}</h3>
                {item.company && (
                  <Typography component = 'p' variant = 'caption'>
                    {t(item.company)}
                  </Typography>
                )}
                {(item.start || item.end) && (
                  <Typography component = 'span' variant = 'caption' classes = {{
                    root: classes.timeColor,
                  }}>
                    {moment(item.start, defaultTimelineFormat).format(monthYearFormat)} -&nbsp;
                    {item.end
                      ? moment(item.end, defaultTimelineFormat).format(monthYearFormat)
                      : moment().format(monthYearFormat)}
                  </Typography>
                )}
                <Box mt = {2}>
                  <Typography component = 'p' variant = 'body1'>
                    {t(item.body)}
                  </Typography>
                  <Box mt = {2} />
                  {lines.map(line => (
                    <Typography component = 'p' variant = 'body2' key = {line} classes = {{
                      root: classes.bodyLine,
                    }}>
                      {line}
                    </Typography>
                  ))}
                </Box>
              </li>
            )
          )
        })}
      </ul>
    </Fragment>
  )
}

Timeline.defaultProps = {
  items: [],
}

export default compose<TimelineProps, any>(

)(Timeline)
