import React, {useEffect, Fragment} from 'react'
import {Button, makeStyles, createStyles, Theme, Grid, Box} from '@material-ui/core'
import {NextComponentType} from 'next'
import {useTranslation} from 'react-i18next'
import {getLanguage} from '@/utils/i18n'
import {useLanguage} from '@/hooks/utils'
import GridContainer from '@/components/GridContainer'
import MatProfile from '@/layouts/Mat/MatProfile'
import {grey} from '@material-ui/core/colors'
import MatNav from '@/layouts/Mat/MatNav'

interface Props {

}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: grey[100],
    },
  }),
)

const Home: NextComponentType = (props) => {
  const classes = useStyles(props)
  const {t}     = useTranslation(['common'])

  return (
    <Fragment>
      <div className = {classes.root}>
        <GridContainer xs = {10}>
          <Box mt = {6}>
            <Grid container item md = {12} spacing = {5}>
              <Grid item md = {3}>
                <MatProfile />
              </Grid>
              <Grid item md = {9}>
                <MatNav />
              </Grid>
            </Grid>
          </Box>
        </GridContainer>
      </div>
    </Fragment>
  )

}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default Home
