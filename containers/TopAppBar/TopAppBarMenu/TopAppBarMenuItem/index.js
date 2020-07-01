
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';


const useStyles = makeStyles(theme => ({
  selectedItem: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.background.main
  },
  unselectedIcon: {
    color: theme.palette.text.secondary
  },
  selectedIcon: {
    color: theme.palette.primary.main
  }, 
  padding:{marginLeft : theme.spacing(2)},
  listItem: {
    paddingTop: 0,
    paddingBottom: 0,
    height: '100%',
    
  }
}))
const TopAppBarMenuItem = ({ selected, menuItem, onClick }) => {
  const classes = useStyles();

  return (
    <ListItem
      button
      classes={{
        selected: classes.selectedItem,
        root: classes.listItem
      }}
      selected={selected}
      onClick={onClick}>
      <div className={selected ? classes.selectedIcon : classes.unselectedIcon}>
        {menuItem.icon}
      </div>
      <ListItemText>
        <Typography variant='subtitle1' className={classes.padding}>{menuItem.text}</Typography>
      </ListItemText>
    </ListItem>
  );
};

export default TopAppBarMenuItem