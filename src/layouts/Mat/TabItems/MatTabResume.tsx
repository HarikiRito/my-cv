import React, {ComponentType, Fragment} from 'react'
import {makeStyles, Theme, createStyles, Stepper, Step, StepLabel, StepContent, Typography} from '@material-ui/core'
import {compose} from 'recompose'
import HeadingTypography from '@/components/HeadingTypography'
import {useTranslation} from 'react-i18next'
import DotNature from '@/components/Element/DotNature'
import Timeline from '@/components/Timeline'
import timelineCss from '@/styles/timeline.scss'

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
      <ul className = {timelineCss.timeline}>
        <li className = {timelineCss.event} data-date = '12:30 - 1:00pm'>
          <h3>Registration</h3>
          <p>Get here on time, it's first come first serve. Be late, get turned away.</p>
        </li>
        <li className = {timelineCss.event} data-date = '2:30 - 4:00pm'>
          <h3>Opening Ceremony</h3>
          <p>Get ready for an exciting event, this will kick off in amazing fashion with MOP & Busta Rhymes as an
             opening show.</p>
        </li>
        <li className = {timelineCss.event} data-date = '5:00 - 8:00pm'>
          <h3>Main Event</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, autem blanditiis consequatur, culpa distinctio dolorem error fugit labore maxime molestias necessitatibus officia officiis placeat repellendus tempora ut veniam vitae. Ad aliquid atque dolore dolorem earum fuga, harum laudantium minus nulla recusandae similique tempora temporibus veritatis voluptate voluptatum? Delectus, eum nulla possimus recusandae rem repellendus sint suscipit unde voluptas! Dolorem harum inventore labore magni quasi rem repellat veniam. Dignissimos expedita numquam quaerat similique suscipit totam! Aliquam aspernatur dolore enim est eum molestias obcaecati optio voluptate. Alias at corporis debitis deleniti earum ex, facere maxime necessitatibus optio perferendis rerum similique velit voluptatem.</p>
        </li>
        <li className = {timelineCss.event} data-date = '8:30 - 9:30pm'>
          <h3>Closing Ceremony</h3>
          <p>See how is the victor and who are the losers. The big stage is where the winners bask in their own
             glory.</p>
        </li>
      </ul>
    </div>
  )
}

export default compose<MatTabResumeProps, any>(

)(MatTabResume)
