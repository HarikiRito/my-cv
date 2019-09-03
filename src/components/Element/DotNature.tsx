import React, {ChangeEvent, ComponentType, Fragment, useState} from 'react'
import {compose} from 'recompose'
import {makeStyles, Theme, createStyles, AppBar, Tabs, Tab, Box, Typography, Paper} from '@material-ui/core'

interface DotNatureProps {

}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dot: {
      width: 10,
      height: 10,
      borderRadius: 100,
      // display: 'inline-block',
      border: `2px solid ${theme.palette.primary.main}`,
      backgroundColor: 'transparent',
    },
  }),
)

const DotNature: ComponentType<DotNatureProps> = (props) => {
  const classes = useStyles(props)

  return (
    <Fragment>
      <span className = {classes.dot} />
    </Fragment>
  )
}

export default compose<DotNatureProps, any>(

)(DotNature)
