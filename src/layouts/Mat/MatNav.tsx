import React, { ChangeEvent, ComponentType, Fragment, useState } from 'react';
import { compose } from 'recompose';
import {
  makeStyles,
  Theme,
  createStyles,
  AppBar,
  Tabs,
  Tab,
  Box,
  Typography,
  Paper,
  NoSsr,
  Fab,
  Button,
} from '@material-ui/core';
import MatTabAboutMe from '@/layouts/Mat/TabItems/MatTabAboutMe';
import MatTabResume from '@/layouts/Mat/TabItems/MatTabResume';
import { grey } from '@material-ui/core/colors';
import LangSwitch from '@/components/LangSwitch';
import { useTranslation } from 'react-i18next';
import { Add } from '@material-ui/icons';
import { Skype, Linkedin, LinkedinBox } from 'mdi-material-ui';

interface MatNavProps {

}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBarPrimaryColor: {
      backgroundColor: '#fff !important',
      color: grey[700],
    },
    socialRoot: {
      position: 'absolute',
      right: theme.spacing(2),
      display: 'flex',
      alignItems: 'center',
      height: '100%',
    },
    link: {
      height: 24,
      paddingRight: theme.spacing(1),
    },
    icon: {
      transition: theme.transitions.create(['width', 'height', 'margin'], {
        duration: 200,
        easing: 'ease-in-out',
      }),
      '&:hover': {
        width: 30,
        height: 30,
        margin: -3,
      },
    },
    buttonContact: {
      boxShadow: 'none',
      borderRadius: 28,
    },
    labelContact: {
      fontSize: '0.675rem',
    },
  }),
);

const MatNav: ComponentType<MatNavProps> = (props) => {
  const classes                 = useStyles(props);
  const [tabIndex, setTabIndex] = useState(0);
  const { t }                   = useTranslation(['common', 'profile']);

  const handleTabChange = (event: ChangeEvent<HTMLElement>, value: number) => {
    setTabIndex(value);
  };
  return (
    <Fragment>
      <NoSsr>
        <AppBar position='static' classes={{
          colorPrimary: classes.appBarPrimaryColor,
        }}>
          <Tabs value={tabIndex} onChange={handleTabChange} aria-label='simple tabs example'
                indicatorColor='primary'
          >
            <Tab href='#intro' label={t('common:tabs.intro')} />
            <Tab href='#resume' label={t('common:tabs.resume')} />
            <Box className={classes.socialRoot}>
              <a className={classes.link} href='skype:nxh0809@gmail.com?chat'>
                <Skype color='primary' className={classes.icon} />
              </a>
              <a className={classes.link} target='_blank' rel='noopener noreferrer'
                 href='https://www.linkedin.com/in/harikirito/'>
                <LinkedinBox color='primary' className={classes.icon} />
              </a>
              <Button color='primary' variant='contained' component='a' href={`mailto:${t('profile:email')}`}
                      classes={{
                        root: classes.buttonContact,
                        label: classes.labelContact,
                      }}>
                {t('common:contact')}
              </Button>
            </Box>
          </Tabs>
        </AppBar>
        <Box mt={4}>
          <Paper>
            <Box p={3} pt={4}>
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
  );
};

export default compose(

)(MatNav);
