import React, {ComponentType, Fragment} from 'react'
import {makeStyles, Theme, createStyles, Box, Typography, LinearProgress} from '@material-ui/core'
import {compose} from 'recompose'

interface SkillIndicatorProps {
  name: string
  score: number
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({}),
)

const SkillIndicator: ComponentType<SkillIndicatorProps> = (props) => {
  const classes = useStyles(props)

  return (
    <Fragment>
      <Box mb = {2}>
        <Box mb = {1}>
          <Typography component = 'p' variant = 'subtitle2'>
            {props.name}
          </Typography>
        </Box>
        <LinearProgress variant = 'determinate' value = {props.score} />
      </Box>
    </Fragment>
  )
}

export default compose<SkillIndicatorProps, any>(

)(SkillIndicator)
