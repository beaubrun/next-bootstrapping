
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ListItem from '@material-ui/core/ListItem';
import SunIcon from '@material-ui/icons/WbSunny';
import Avatar from '@material-ui/core/Avatar';
import Hidden from '@material-ui/core/Hidden';

import SearchIcon from 'components/Icons/SearchIcon';
import LanguageIcon from 'components/Icons/LanguageIcon';
import MoonIcon from 'components/Icons/MoonIcon';
import LanguageSelector from 'components/LanguageSelector';
import ContainedButton from 'components/Buttons/ContainedButton';

// import i18n from '../../../utils/i18n';
// import { getLanguageFromI18n } from '../../../utils/languages';

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'flex-end',
    padding: 0
  },
  selectedItem: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.background.main,

  },
  searchIcon: {
    width: theme.spacing(4),
    height: theme.spacing(3.5),
    marginRight: theme.spacing(2)
  },
  languageIcon: {
    marginLeft: 'auto',
    marginRight: 0,
    width: theme.spacing(2.5),
    height: theme.spacing(2.5),
    color: theme.palette.mainForeColor,
  },
  unselectedIcon: {
    color: theme.palette.text.secondary,
  },
  selectedIcon: {
    color: theme.palette.primary.main
  },
  languageSelectorContainer: {
    zIndex: theme.zIndex.drawer + 3,
    padding: 0,
    marginRight: 3,
    marginBottom: 0,
    '& > .selected--flag--option': {
      padding: 0,
      //marginLeft: -spacingUnit * 4,
      color: theme.palette.text.primary,
      '&:hover': {
        transform: 'scale(1.15)'
      },
      '&:active': {
        transform: 'scale(1)'
      }
    },
    '& > .selected--flag--option span img': {
      display: 'none'
    },
    '& > .selected--flag--option .country-flag span': {
      fontSize: 14
    },
    '& .flag-options .flag-option': {
      paddingBottom: theme.spacing(0.5),
      '& > span > span': {
        fontSize: 14
      }
    }
  },
  hoverEffect: {
    '&:hover': {
      transform: 'scale(1.15)'
    },
    '&:active': {
      transform: 'scale(1)'
    }
  },
  themeSwitchIcon: {
    marginLeft: theme.spacing(2.5),
    width: theme.spacing(4),
    height: theme.spacing(3),
    margin: theme.spacing(0),
    // width: theme.spacing(4),
    // height: theme.spacing(3.5),
    // marginLeft :theme.spacing(2.5),
    color: theme.palette.mainForeColor,
    cursor: 'pointer',
  },
  bigAvatar: {
    width: 32,
    height: 32,
    margin: 8
  },
  avatarArea: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '0 8px',
  },
  border: {
    backgroundColor: theme.custom.palette.darkRed,
  }
}));

const TopAppBarRight = (theme) => {
  const classes = useStyles();
  const language = 'GB';
  const themeType = {
    dark: 'dark',
    ligth: 'light'
  }
  const languageSelectHandler = (language) => {

  }
  const changeThemeHandler = (theme) => {
    !theme
    const currentThemeType = theme
      ? true
      : false;
    useState({ theme: !theme });
    // this.setState({theme: !theme});
  }

  return (
    <ListItem className={classes.root}>
      <Hidden smDown implementation='css' className={classes.searchIcon}>
        <SearchIcon />
      </Hidden>
      <ContainedButton className={classes.border}>
        <LanguageIcon className={classes.languageIcon} />
        <LanguageSelector
          passedClass={classes.languageSelectorContainer}
          selectedLanguage={language}
          languageSelected={languageSelectHandler()} />
      </ContainedButton>
      <Hidden smDown implementation='css' className={classes.themeSwitchIcon}>
        {theme ?
          <MoonIcon
            className={clsx(classes.themeSwitchIcon, classes.hoverEffect)}
            onClick={changeThemeHandler(theme)} /> :
          <SunIcon
            className={clsx(classes.themeSwitchIcon, classes.hoverEffect)}
            onClick={changeThemeHandler(theme)} />
        }
      </Hidden>
      <div className={classes.avatarArea}>
        <Avatar
          // alt={loggedInUser.name}
          // src={loggedInUser.avatar || defaultAvatarLink}
          className={classes.bigAvatar} />
        <Hidden smDown implementation='css'>
          UserName
            </Hidden>
      </div>
    </ListItem>
  );
};

export default TopAppBarRight;
