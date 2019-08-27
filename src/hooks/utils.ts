import {useTranslation} from 'react-i18next'
import {getLanguage} from '@/utils/i18n'
import {useEffect, useState} from 'react'

type Language = 'vi' | 'en'

export const useLanguage = () => {
  const {i18n} = useTranslation()

  const setLanguage = (lang: Language) => {
    if (getLanguage() !== lang) {
      i18n.changeLanguage(lang)
    }
  }

  return {
    setLanguage,
  }
}
