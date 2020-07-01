
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

import FacebookIcon from 'components/Icons/FacebookIcon';
import GooglePlusIcon from 'components/Icons/GooglePlusIcon';
import LinkedInIcon from 'components/Icons/LinkedInIcon';
import TwitterIcon from 'components/Icons/TwitterIcon';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(3),
    }
  },
  icons: { paddingTop: theme.spacing(2.5) },
  icon: {
    margin: 'auto',
    marginRight: theme.spacing(2)
  }
}));

const FooterRight = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Hidden smUp implementation='css' className={classes.themeSwitchIcon}>
        <Typography>Social</Typography>
      </Hidden>
      <div className={classes.icons}>
        <FacebookIcon fontSize='small' className={classes.icon} />
        <GooglePlusIcon fontSize='small' className={classes.icon} />
        <LinkedInIcon fontSize='small' className={classes.icon} />
        <TwitterIcon fontSize='small' className={classes.icon} />
      </div>
    </div>
  );
};

export default FooterRight;
