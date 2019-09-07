import NextI18Next from 'next-i18next'

const NextI18NextInstance = new NextI18Next({
  preload: ['en'],
  defaultLanguage: 'en',
  returnObjects: true,
  otherLanguages: ['vi'],
})

export default NextI18NextInstance

/* Optionally, export class methods as named exports */
export const {
               appWithTranslation,
               withTranslation,
               useTranslation: useNextTranslation,
             } = NextI18NextInstance
