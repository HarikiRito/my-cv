import React, {useEffect} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import {Button} from '@material-ui/core'
import {NextComponentType} from 'next'
import {useTranslation, withTranslation} from 'react-i18next'
import {useNextTranslation} from '@/i18n'
import {theme} from '@/components/Theme/Theme'

interface Props {

}

const Home: NextComponentType = (props) => {

  return (
    <div>
      <Button>xyz</Button>
    </div>
  )

}

export default withTranslation('common')(Home)
