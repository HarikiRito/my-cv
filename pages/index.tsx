import React, {useEffect, Fragment} from 'react'
import {Button, makeStyles, createStyles, Theme, Grid} from '@material-ui/core'
import {NextComponentType} from 'next'
import {useTranslation} from 'react-i18next'
import {getLanguage} from '@/utils/i18n'
import {useLanguage} from '@/hooks/utils'
import GridContainer from '@/components/GridContainer'
import MatProfile from '@/layouts/Mat/MatProfile'

interface Props {

}

const Home: NextComponentType = (props) => {
  const {t} = useTranslation(['common'])

  return (
    <Fragment>
      <GridContainer xs = {10}>
        <Grid container item md = {12} spacing = {5}>
          <Grid item md = {3}>
            <MatProfile />
          </Grid>
        </Grid>
      </GridContainer>
    </Fragment>
  )

}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default Home
