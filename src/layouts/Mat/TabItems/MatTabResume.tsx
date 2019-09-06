import React, {ComponentType} from 'react'
import {makeStyles, Theme, createStyles, Grid} from '@material-ui/core'
import {compose} from 'recompose'
import HeadingTypography from '@/components/HeadingTypography'
import {useTranslation} from 'react-i18next'
import Timeline, {TimelineItems, defaultTimelineFormat} from '@/components/Timeline'
import moment from 'moment'

interface MatTabResumeProps {

}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    stepperRoot: {
      padding: 0,
    },
  }),
)

const workExperience: TimelineItems[] = [{
  title: 'profile:job_1.title',
  start: moment('2018-08', defaultTimelineFormat),
  end: moment('2019-03', defaultTimelineFormat),
  body: 'profile:job_1.body',
  company: 'profile:job_1.company',
}]

const MatTabResume: ComponentType<MatTabResumeProps> = (props) => {
  const classes = useStyles(props)
  const {t}     = useTranslation(['common', 'profile'])

  return (
    <div>
      <Grid container spacing = {5}>
        <Grid item md = {6}>
          <HeadingTypography>
            {t('common:resume')}
          </HeadingTypography>
          <Timeline items = {workExperience} />
        </Grid>
        <Grid item md = {6}>
          <HeadingTypography>
            {t('common:education')}
          </HeadingTypography>
          <Timeline items = {workExperience} />
        </Grid>
      </Grid>
    </div>
  )
}

export default compose<MatTabResumeProps, any>(

)(MatTabResume)
