
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import FooterPanelListItem from './FooterPanelListItem';

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'space-between',
    borderTop: 'solid 1px'
  }
}))

const FooterPanel = ({ menuItems }) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {menuItems.map(menuItem => (
        <FooterPanelListItem menuItem={menuItem} key={menuItem.title} />
      ))}
    </List>
  );
};

export default FooterPanel;