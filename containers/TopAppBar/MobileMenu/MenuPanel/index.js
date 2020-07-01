
import { useState } from 'react';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import MenuPanelListItem from './MenuPanelListItem';

const useStyles = makeStyles(theme => ({
  title: {
    marginLeft: theme.spacing(2)
  }
}));

const MenuPanel = ({ title, menuItems }) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const listItemClickHandler = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <Typography className={classes.title}>{title}</Typography>
      <List>
        {menuItems.map((menuItem, index) => {
          const selected = selectedIndex === index;

          return (
            <MenuPanelListItem
              key={menuItem.id}
              selected={selected}
              menuItem={menuItem}
              onClick={event => listItemClickHandler(event, index)} />
          );
        })}
      </List>
    </>
  );
};

export default MenuPanel;
