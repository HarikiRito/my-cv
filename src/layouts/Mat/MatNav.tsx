import React, {ComponentType, Fragment, useState} from 'react'
import {compose} from 'recompose'
import {makeStyles, Theme, createStyles, AppBar, Tabs, Tab} from '@material-ui/core'

interface MatNavProps {

}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({}),
)

const MatNav: ComponentType<MatNavProps> = (props) => {
  const classes                 = useStyles(props)
  const [tabIndex, setTabIndex] = useState(0)

  const handleTabChange = (value: number) => {
    setTabIndex(value)
  }
  return (
    <Fragment>
      <AppBar position = 'static'>
        <Tabs value = {tabIndex} onChange = {handleTabChange} aria-label = 'simple tabs example'>
          <Tab label = 'Item One' />
          <Tab label = 'Item Two' />
          <Tab label = 'Item Three' />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Fragment>
  )
}

export default compose(

)(MatNav)
