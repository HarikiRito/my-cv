import React, {ComponentType, Fragment, useState, useRef, useEffect} from 'react'
import {makeStyles, Theme, createStyles, Switch, NoSsr} from '@material-ui/core'
import {compose} from 'recompose'
import {useTranslation} from 'react-i18next'
import {useLanguage} from '@/hooks/utils'

interface LangSwitchProps {

}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      width: 20,
      height: 12,
      transform: 'translateY(2px)',
    },
    floating: {
      position: 'absolute',
      right: theme.spacing(2),
      top: theme.spacing(1),
    },
  }),
)

const LangSwitch: ComponentType<LangSwitchProps> = (props) => {
  const classes         = useStyles(props)
  const {i18n}          = useTranslation()
  const [isVi, setIsVi] = useState(false)

  const handleChange = () => {
    if (isVi) {
      i18n.changeLanguage('en')
    } else {
      i18n.changeLanguage('vi')
    }
  }

  useEffect(() => {
    switch (i18n.language) {
      case 'vi': {
        return setIsVi(true)
      }
      case 'en': {
        return setIsVi(false)
      }
    }
  }, [i18n.language])

  return (
    <NoSsr>
      <div className = {classes.floating}>
        <img src = '/static/images/us.png' alt = '' className = {classes.icon} />
        <Switch
          color = 'primary'
          checked = {isVi}
          onChange = {handleChange}
          inputProps = {{'aria-label': 'secondary checkbox'}}
        />
        <img src = '/static/images/vn.png' alt = '' className = {classes.icon} />
      </div>
    </NoSsr>
  )
}

export default compose(

)(LangSwitch)
