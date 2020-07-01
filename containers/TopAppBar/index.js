
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import clsx from 'clsx';

import TopAppBarLeft from './TopAppBarLeft';
import TopAppbarMenu from './TopAppBarMenu';
import TopAppBarRight from './TopAppBarRight';
import MobileMenu from './MobileMenu';
import { commonUseStyles } from 'styles/use-styles';
import { TOP_BAR_MENUS } from 'utils/links/top-bar-menu-items';
import { getMobileBreakPoint, getTabletBreakPoint } from 'utils/helpers/common';
import { AppContext } from 'contexts'

const useStyles = makeStyles(theme => ({
  appBar: {
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 6, 0, 12),
    zIndex: theme.zIndex.drawer + 3,
    backgroundColor: theme.palette.background.default,
    minHeight: theme.spacing(4.5),
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    }
  },
  flex: {
    width: '100%',
    paddingLeft: 0,
    display: 'flex',
    flexDirection: 'column-reverse',
    [getMobileBreakPoint(theme)]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  },
  horizontalFlex: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  menuIcon: {
    [getMobileBreakPoint(theme)]: {
      position: 'fixed',
      left: theme.spacing(3),
      top: theme.spacing(.5)
    }
  },
  height: {
    height: '100%'
  }
}))

const TopAppBar = () => {
  const classes = useStyles();
  const commonClasses = commonUseStyles();

  return (
    <AppBar
      position='fixed'
      className={classes.appBar}>
      <Toolbar className={classes.flex} >
        <div className={clsx(classes.horizontalFlex, commonClasses.responsiveWidth, classes.height)}>
          <TopAppBarLeft />
          <MobileMenu />
          <Hidden smDown implementation='css' className={classes.height}>
            <TopAppbarMenu menuItems={TOP_BAR_MENUS} />
          </Hidden>
          <TopAppBarRight />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopAppBar;
