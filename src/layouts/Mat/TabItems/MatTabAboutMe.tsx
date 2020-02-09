import React, { ComponentType, Fragment } from 'react';
import { makeStyles, Theme, createStyles, Typography, Box, LinearProgress, Grid } from '@material-ui/core';
import { compose } from 'recompose';
import { useTranslation } from 'react-i18next';
import HeadingTypography from '@/components/HeadingTypography';
import SkillIndicator from '@/components/SkillIndicator';

interface MatTabAboutMeProps {

}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({}),
);

const programmingLanguages = [{
  key: 'Typescript',
  value: 95,
}, {
  key: 'Python',
  value: 85,
}, {
  key: 'Javascript',
  value: 80,
}, {
  key: 'PHP',
  value: 75,
}, {
  key: 'SQL',
  value: 70,
}, {
  key: 'Dart',
  value: 55,
}];

const techs = [{
  key: 'ReactJS',
  value: 95,
}, {
  key: 'Laravel',
  value: 70,
}, {
  key: 'VueJS',
  value: 70,
}, {
  key: 'Flutter',
  value: 65,
}, {
  key: 'React Native',
  value: 60,
}, {
  key: 'Docker',
  value: 75,
}];

const MatTabAboutMe: ComponentType<MatTabAboutMeProps> = (props) => {
  const classes = useStyles(props);
  const { t }   = useTranslation(['common', 'profile']);

  return (
    <Fragment>
      <HeadingTypography>
        {t('common:about_me')}
      </HeadingTypography>
      <Box mb={4}>
        <Typography component='p' variant='body2'>
          {t('profile:about_me')}
        </Typography>
      </Box>
      {/*      <HeadingTypography>
        {t('common:skills.name')}
      </HeadingTypography>*/}
      <Grid container spacing={6}>
        <Grid container item md={6}>
          <Grid item md={12}>
            <HeadingTypography>
              {t('common:skills.programming_languages')}
            </HeadingTypography>
          </Grid>
          {programmingLanguages.map(v => (
            <Grid item md={12} key={v.key}>
              <SkillIndicator score={v.value} name={v.key} />
            </Grid>
          ))}
        </Grid>
        <Grid container item md={6}>
          <Grid item md={12}>
            <HeadingTypography>
              {t('common:skills.technologies')}
            </HeadingTypography>
          </Grid>
          {techs.map(v => (
            <Grid item md={12} key={v.key}>
              <SkillIndicator score={v.value} name={v.key} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default compose(

)(MatTabAboutMe);
