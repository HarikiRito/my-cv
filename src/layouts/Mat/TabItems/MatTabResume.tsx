import React, {ComponentType, Fragment} from 'react'
import {makeStyles, Theme, createStyles, Stepper, Step, StepLabel} from '@material-ui/core'
import {compose} from 'recompose'
import HeadingTypography from '@/components/HeadingTypography'
import {useTranslation} from 'react-i18next'

interface MatTabResumeProps {

}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    stepperRoot: {
      padding: 0
    }
  }),
)

const MatTabResume: ComponentType<MatTabResumeProps> = (props) => {
  const classes = useStyles(props)
  const {t}     = useTranslation(['common', 'profile'])
  return (
    <Fragment>
      <HeadingTypography>
        {t('common:resume')}
      </HeadingTypography>
      <Stepper activeStep = {-1} classes={{
        root: classes.stepperRoot
      }}>
        <Step>
          <StepLabel>
            abc
          </StepLabel>
        </Step>
      </Stepper>
    </Fragment>
  )
}

export default compose<MatTabResumeProps, any>(

)(MatTabResume)
