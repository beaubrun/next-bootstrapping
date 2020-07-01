
import { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import MoreIcon from 'components/Icons/MoreIcon'

import { makeStyles } from '@material-ui/core/styles';
import TopAppBarMenuItem from './TopAppBarMenuItem';


const useStyles = makeStyles(theme => ({
  menuItem: {
    flexDirection: 'row',
    marginLeft: theme.spacing(5),
    height: '100%',
    paddingTop: 0,
    paddingBottom: 0,
  }
}))
const TopAppBarMenu = ({ menuItems }) => {
  const classes = useStyles();
  const [selectedIndex, sideMenuSelectHandler] = useState(0);
  const MenuItemClickHandler = (event, index) => {
  
    sideMenuSelectHandler(index);
  };

  return (
    <ListItem className={classes.menuItem}>
      {menuItems.map((menuItem, index) => {
        const selected = selectedIndex === index;

        return (
          <TopAppBarMenuItem
            key={menuItem.id}
            selected={selected}
            menuItem={menuItem}
            onClick={event => MenuItemClickHandler(event, index)} />
        );
      })}
      
      <MoreIcon />
      
    </ListItem>
    
  );
};

export default TopAppBarMenu;
