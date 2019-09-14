import React, {ChangeEvent, ComponentType, Fragment, useState} from 'react'
import {compose} from 'recompose'
import {makeStyles, Theme, createStyles, AppBar, Tabs, Tab, Box, Typography, Paper, NoSsr} from '@material-ui/core'

interface NoSSR_DevProps {

}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({}),
)

const NoSSR_Dev: ComponentType<NoSSR_DevProps> = (props) => {
  return (
    process.env.NODE_ENV === 'production' ? (
      <Fragment>
        {props.children}
      </Fragment>
    ) : <NoSsr children = {props.children} />
  )
}

export default compose<NoSSR_DevProps, any>(

)(NoSSR_Dev)
