
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  title: {
    marginLeft: theme.spacing(2)
  },
  listItem: {
    padding: theme.spacing(.5, 1),
    marginBottom: theme.spacing(1),
    borderLeft: `${theme.spacing(.5)}px solid transparent`,
  },
  selectedItem: {
    color: theme.palette.primary.contrastText,
    borderLeft: `${theme.spacing(.5)}px solid ${theme.palette.background.main}`,
    backgroundColor: theme.palette.background.default
  },
  unselectedIcon: {
    color: theme.palette.text.secondary
  },
  selectedIcon: {
    color: theme.palette.primary.main
  }
}));

const MenuPanelListItem = ({ selected, menuItem, onClick }) => {
  const classes = useStyles();

  return (
    <ListItem
      button
      className={classes.listItem}
      classes={{
        selected: classes.selectedItem
      }}
      selected={selected}
      onClick={onClick}>
      <ListItemIcon
        className={selected ? classes.selectedIcon : classes.unselectedIcon}>
        {menuItem.icon}
      </ListItemIcon>
      <ListItemText>
        <Typography variant='subtitle1'>{menuItem.text}</Typography>
      </ListItemText>
    </ListItem>
  );
};

export default MenuPanelListItem;
