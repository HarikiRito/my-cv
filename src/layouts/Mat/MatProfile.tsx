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
import {AccountCircle, VerifiedUser, Work, Email} from '@material-ui/icons'
import {Facebook, Linkedin, Skype} from 'mdi-material-ui'

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
    labelProfile: {
      paddingTop: 4,
    },
  }),
)

const profileInfos = [{
  key: 'common:name',
  value: 'profile:name',
  labelProps: {
    StepIconComponent: () => <AccountCircle color = 'primary' />,
  },
}, {
  key: 'common:birth_day',
  value: 'profile:birth_day',
  labelProps: {
    StepIconComponent: () => <VerifiedUser color = 'primary' />,
  },
}, {
  key: 'common:job',
  value: 'profile:job',
  labelProps: {
    StepIconComponent: () => <Work color = 'primary' />,
  },
}, {
  key: 'common:email',
  value: 'profile:email',
  labelProps: {
    StepIconComponent: () => <Email color = 'primary' />,
  },
}, {
  key: 'common:skype',
  value: 'profile:skype',
  labelProps: {
    StepIconComponent: () => <Skype color = 'primary' />,
  },
}, {
  key: 'common:linkedin',
  value: 'profile:linkedin',
  labelProps: {
    StepIconComponent: () => <Linkedin color = 'primary' />,
  },
}, {
  key: 'common:facebook',
  value: 'profile:facebook',
  labelProps: {
    StepIconComponent: () => <Facebook color = 'primary' />,
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
                <StepLabel {...v.labelProps} classes = {{
                  label: classes.labelProfile,
                }}>{t(v.key)}: {t(v.value)}</StepLabel>
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
