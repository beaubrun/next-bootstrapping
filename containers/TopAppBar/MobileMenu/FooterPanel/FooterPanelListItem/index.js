
import { makeStyles } from '@material-ui/core/styles';

import PronetLink from 'components/PronetLink';

const useStyles = makeStyles(theme => ({
  menuPane: {
    
    marginBottom: theme.spacing(2),
    marginLeft:theme.spacing(2)
  },
  subMenuPane: {
    marginBottom: theme.spacing(1),
    
  }
}));

const FooterPanelListItem = ({ menuItem }) => {
  const classes = useStyles();
  
  return (
  
      <div className={classes.menuPane}>
        <PronetLink
          color='textSecondary'
          variant='subtitle1'
          href={menuItem.link}>
          {menuItem.title}
        </PronetLink>
      </div>
  );
};

export default FooterPanelListItem;
