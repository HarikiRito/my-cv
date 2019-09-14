import React, {ChangeEvent, ComponentType, Fragment, useState} from 'react'
import {compose} from 'recompose'
import {makeStyles, Theme, createStyles, AppBar, Tabs, Tab, Box, Typography, Paper, NoSsr} from '@material-ui/core'
import MatTabAboutMe from '@/layouts/Mat/TabItems/MatTabAboutMe'
import MatTabResume from '@/layouts/Mat/TabItems/MatTabResume'
import {grey} from '@material-ui/core/colors'
import LangSwitch from '@/components/LangSwitch'
import {useTranslation} from 'react-i18next'

interface MatNavProps {

}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBarPrimaryColor: {
      backgroundColor: '#fff !important',
      color: grey[700],
    },
  }),
)

const MatNav: ComponentType<MatNavProps> = (props) => {
  const classes                 = useStyles(props)
  const [tabIndex, setTabIndex] = useState(0)
  const {t}                     = useTranslation(['common', 'profile'])

  const handleTabChange = (event: ChangeEvent<HTMLElement>, value: number) => {
    setTabIndex(value)
  }
  return (
    <Fragment>
      <NoSsr>
        <AppBar position = 'static' classes = {{
          colorPrimary: classes.appBarPrimaryColor,
        }}>
          <Tabs value = {tabIndex} onChange = {handleTabChange} aria-label = 'simple tabs example'
                indicatorColor = 'primary'
          >
            <Tab href = '#intro' label = {t('common:tabs.intro')} />
            <Tab href = '#resume' label = {t('common:tabs.resume')} />
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
            </Box>
          </Paper>
        </Box>
      </NoSsr>
    </Fragment>
  )
}

export default compose(

)(MatNav)
