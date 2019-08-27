import React, {ComponentType, Fragment} from 'react'
import {compose} from 'recompose'
import {
  makeStyles,
  Theme,
  createStyles,
  Paper,
  Typography,
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
} from '@material-ui/core'
import classNames from 'classnames'
import {useTranslation} from 'react-i18next'
import {grey} from '@material-ui/core/colors'
import {AccountCircle} from '@material-ui/icons'

interface MatProfileProps {

}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paddingProfile: {
      padding: '0.75rem',
    },
    myName: {
      fontWeight: 500,
      textTransform: 'uppercase',
    },
    job: {
      color: grey[500],
    },
    avatar: {
      maxWidth: '100%',
      height: 'auto',
      clipPath: 'polygon(0 10%, 100% 0%, 100% 90%, 0% 100%)',
    },
  }),
)

const profileInfos = [{
  key: 'common:name',
  value: 'profile:name',
  labelProps: {
    StepIconComponent: () => <AccountCircle />,
  },
}, {
  key: 'common:birth_day',
  value: 'profile:birth_day',
  labelProps: {
    StepIconComponent: undefined,
  },
}, {
  key: 'common:job',
  value: 'profile:job',
  labelProps: {
    StepIconComponent: undefined,
  },
}, {
  key: 'common:email',
  value: 'profile:email',
  labelProps: {
    StepIconComponent: undefined,
  },
}, {
  key: 'common:skype',
  value: 'profile:skype',
  labelProps: {
    StepIconComponent: undefined,
  },
}, {
  key: 'common:linkedin',
  value: 'profile:linkedin',
  labelProps: {
    StepIconComponent: undefined,
  },
}, {
  key: 'common:facebook',
  value: 'profile:facebook',
  labelProps: {
    StepIconComponent: undefined,
  },
}]

const MatProfile: ComponentType<MatProfileProps> = (props) => {
  const classes = useStyles(props)
  const {t}     = useTranslation('common')
  return (
    <Fragment>
      <Paper elevation = {1}>
        <Typography component = 'div' className = {classes.paddingProfile}>
          <Box m = {1} mb = {0} component = 'p' className = {classes.myName}>
            {t('profile:name')}
          </Box>
          <Box m = {1} mt = {0} component = 'p' className = {classes.job}>
            {t('profile:job')}
          </Box>
        </Typography>
        <Box mt = {-3}>
          <img src = '/static/images/owl.jpg' className = {classes.avatar} />
        </Box>
        <Box>
          <Stepper activeStep = {-1} orientation = 'vertical'>
            {profileInfos.map(v => (
              <Step key = {v.key}>
                <StepLabel {...v.labelProps}>{t(v.key)}: {t(v.value)}</StepLabel>
              </Step>
            ))}

          </Stepper>
        </Box>
      </Paper>
    </Fragment>
  )
}

export default compose(

)(MatProfile)
