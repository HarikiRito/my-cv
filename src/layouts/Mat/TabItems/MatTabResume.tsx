import React, {ComponentType, Fragment} from 'react'
import {makeStyles, Theme, createStyles, Stepper, Step, StepLabel, StepContent, Typography} from '@material-ui/core'
import {compose} from 'recompose'
import HeadingTypography from '@/components/HeadingTypography'
import {useTranslation} from 'react-i18next'
import DotNature from '@/components/Element/DotNature'
import Timeline from '@/components/Timeline'

interface MatTabResumeProps {

}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    stepperRoot: {
      padding: 0,
    },
  }),
)

const workExperience = [{
  title: 'xyz',
  icon: <DotNature />,
  description: 'abc',
  from: 2018,
  to: 2019,
}, {
  title: 'xyz',
  icon: <DotNature />,
  description: 'abc',
  from: 2018,
  to: 2019,
}, {
  title: 'xyz',
  icon: <DotNature />,
  description: 'abc',
  from: 2018,
  to: 2019,
}, {
  title: 'xyz',
  icon: <DotNature />,
  description: 'abc',
  from: 2018,
  to: 2019,
}]

const MatTabResume: ComponentType<MatTabResumeProps> = (props) => {
  const classes = useStyles(props)
  const {t}     = useTranslation(['common', 'profile'])
  return (
    <div>
      <HeadingTypography>
        {t('common:resume')}
      </HeadingTypography>
      <Timeline />
      {/*<Stepper activeStep = {-1} classes = {{*/}
      {/*  root: classes.stepperRoot,*/}
      {/*}} orientation = 'vertical'>*/}
      {/*  {workExperience.map(v => (*/}
      {/*    <Step key = {v.title}>*/}
      {/*      <StepLabel StepIconComponent = {() => v.icon}>*/}
      {/*        {v.title}*/}
      {/*      </StepLabel>*/}
      {/*      <StepContent>*/}
      {/*        <Typography>abasdjk,k</Typography>*/}
      {/*      </StepContent>*/}
      {/*    </Step>*/}
      {/*  ))}*/}

      {/*</Stepper>*/}
    </div>
  )
}

export default compose<MatTabResumeProps, any>(

)(MatTabResume)
