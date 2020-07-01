
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import LogoWithTitle from 'components/LogoWithTitle';
import Logo from 'components/Icons/Logo';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1, 0)
  },
  fontsize : {
    fontSize: '1rem'
  }
}));

const FooterLeft = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography className = {classes.fontsize} variant='caption'>
        © CopyRight 2020 All Right Reserved
      </Typography>
      <LogoWithTitle className={classes.margin} />
    </div>
  );
};

export default FooterLeft;
