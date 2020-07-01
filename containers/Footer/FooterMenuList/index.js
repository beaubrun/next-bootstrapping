
import { makeStyles } from '@material-ui/core/styles';

import FooterMenuListItem from './FooterMenuListItem';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flex: '1 0 auto',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'flex-start',
      display: 'contents'
    }
  }
}));

const FooterMenuList = ({ menuItems }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {menuItems.map(menuItem => (
        <FooterMenuListItem menuItem={menuItem} key={menuItem.title} />
      ))}
    </div>
  );
};

export default FooterMenuList;
