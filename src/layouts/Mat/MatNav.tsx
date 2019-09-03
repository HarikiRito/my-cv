import React, {ChangeEvent, ComponentType, Fragment, useState} from 'react'
import {compose} from 'recompose'
import {makeStyles, Theme, createStyles, AppBar, Tabs, Tab, Box, Typography, Paper} from '@material-ui/core'
import MatTabAboutMe from '@/layouts/Mat/TabItems/MatTabAboutMe'
import MatTabResume from '@/layouts/Mat/TabItems/MatTabResume'

interface MatNavProps {

}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBarPrimaryColor: {
      backgroundColor: '#fff !important',
    },
  }),
)

const MatNav: ComponentType<MatNavProps> = (props) => {
  const classes                 = useStyles(props)
  const [tabIndex, setTabIndex] = useState(0)

  const handleTabChange = (event: ChangeEvent<HTMLElement>, value: number) => {
    setTabIndex(value)
  }
  return (
    <Fragment>
      <AppBar position = 'static' classes = {{
        colorPrimary: classes.appBarPrimaryColor,
      }}>
        <Tabs value = {tabIndex} onChange = {handleTabChange} aria-label = 'simple tabs example'
              indicatorColor = 'primary'
        >
          <Tab href = '#home' label = 'Item One' />
          <Tab href = '#resume' label = 'Item Two' />
          <Tab label = 'Item Three' />
        </Tabs>
      </AppBar>
      <Box mt = {4}>
        <Paper>
          <Box p = {3} pt = {4}>
            {tabIndex === 0 &&
             <MatTabAboutMe />
            }
            {tabIndex === 1 &&
             <MatTabResume />
            }
            {tabIndex === 2 &&
             <div>2</div>
            }
          </Box>
        </Paper>
      </Box>
    </Fragment>
  )
}

export default compose(

)(MatNav)
