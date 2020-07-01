
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';

import FooterMenuList from './FooterMenuList';
import FooterLeft from './FooterLeft';
import FOOTER_MENU_ITEMS from 'utils/links/footer-menu-items';
import FooterRight from './FooterRight';
import LogoWithTitle from 'components/LogoWithTitle';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: theme.spacing(2.5, 12, 3, 12),
    backgroundColor: theme.palette.background.green,
    zIndex: theme.zIndex.drawer + 1,
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    }
  },
  logo: {
    justifyContent: 'center'
  },
  logowith: {
    margin: 'auto'
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Hidden smDown implementation='css' className={classes.themeSwitchIcon}>
        <FooterLeft />
      </Hidden>
      <FooterMenuList menuItems={FOOTER_MENU_ITEMS} />
      <FooterRight />
      <div className={classes.logowith}>
        <Hidden smUp implementation='css' className={classes.themeSwitchIcon}>
          <LogoWithTitle className={classes.logo} />
          <Typography className={classes.fontsize} variant='caption'>
            © CopyRight 2020 All Right Reserved
      </Typography>
        </Hidden>
      </div>
    </footer>
  );
};

export default Footer;
