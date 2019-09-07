import React, {ComponentType, useEffect, useState} from 'react'
import {makeStyles, Theme, createStyles, Grid} from '@material-ui/core'
import {compose} from 'recompose'
import HeadingTypography from '@/components/HeadingTypography'
import {useTranslation} from 'react-i18next'
import Timeline, {TimelineItem, defaultTimelineFormat} from '@/components/Timeline'
import moment from 'moment'
import _ from 'lodash'

interface MatTabResumeProps {

}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    stepperRoot: {
      padding: 0,
    },
  }),
)

const workExperience: TimelineItem[] = [{
  index: 1,
  title: 'profile:job_1.title',
  start: moment('2018-08', defaultTimelineFormat),
  end: moment('2019-03', defaultTimelineFormat),
  body: 'profile:job_1.body',
  company: 'profile:job_1.company',
}]

const MatTabResume: ComponentType<MatTabResumeProps> = (props) => {
  const classes = useStyles(props)

  const {t}               = useTranslation(['common', 'profile'])
  const [works, setWorks] = useState<TimelineItem[]>([])


  useEffect(() => {
    const jobs       = t('profile:jobs') as TimelineItem[]
    const sortedJobs = _.orderBy<TimelineItem>(jobs, ['index'], ['desc'])
    setWorks(sortedJobs)
  }, [])

  return (
    <div>
      <Grid container spacing = {5}>
        <Grid item md = {6}>
          <HeadingTypography>
            {t('common:resume')}
          </HeadingTypography>
          <Timeline items = {works} />
        </Grid>
        <Grid item md = {6}>
          <HeadingTypography>
            {t('common:education')}
          </HeadingTypography>
          <Timeline items = {works} />
        </Grid>
      </Grid>
    </div>
  )
}

export default compose<MatTabResumeProps, any>(

)(MatTabResume)
