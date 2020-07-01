
import { makeStyles } from '@material-ui/core/styles';

import PronetLink from 'components/PronetLink';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      paddingRight: theme.spacing(3),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3)
    }
  },
  menuPane: {
    marginBottom: theme.spacing(2)
  },
  subMenuPane: {
    marginBottom: theme.spacing(1)
  }
}));

const FooterMenuListItem = ({ menuItem }) => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <div className={classes.menuPane}>
        <PronetLink
          color='textPrimary'
          variant='subtitle1'
          href={menuItem.link}>
          {menuItem.title}
        </PronetLink>
      </div>
      { menuItem.subMenuItems.map(subMenuItem => (
        <div className={classes.subMenuPane} key={subMenuItem.title}>
          <PronetLink
            color='textSecondary'
            variant='caption'
            href={subMenuItem.link}>
            {subMenuItem.title}
          </PronetLink>
        </div>
      )) }
    </div>
  );
};

export default FooterMenuListItem;
