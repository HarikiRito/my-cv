import React, {useEffect} from 'react'
import {Button} from '@material-ui/core'
import {NextComponentType} from 'next'
import {useTranslation} from 'react-i18next'
import {getLanguage} from '@/utils/i18n'

interface Props {

}

const Home: NextComponentType = (props) => {
  const {t, i18n} = useTranslation('common')

  const changeI18n = () => {

  }
  useEffect(() => {
    console.log(t('a'))
  })

  const switchLanguage = () => {
    if (getLanguage() === 'vi') {
      i18n.changeLanguage('en')
    } else {
      i18n.changeLanguage('vi')
    }
  }

  return (
    <div>
      <Button onClick = {switchLanguage}>Button {t('a')}</Button>
    </div>
  )

}

export default Home
