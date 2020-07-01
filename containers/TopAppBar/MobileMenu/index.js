
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';

import { TOP_BAR_MENUS } from 'utils/links/top-bar-menu-items';
import  FOOTER_MENUS  from 'utils/links/mobile-footer-menu-items';
import MenuIconButton from 'containers/TopAppBar/MenuIconButton';
import MenuPanel from './MenuPanel';
import FooterPanel from './FooterPanel';

const useStyles = makeStyles(theme => ({
  popper: {
    width: '100%',
    zIndex: theme.zIndex.drawer + 2,
    overflow: 'auto'
  },
  paper: {
    height: 850,
    padding: theme.spacing(2),
    paddingTop:theme.spacing(10),
    backgroundColor: theme.palette.background.default,
  },
}));

export default function TransitionsPopper() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'transitions-popper' : undefined;

  return (
    <div>
      <MenuIconButton aria-describedby={id} type="button" onClick={handleClick} />
      <Popper id={id} open={open} anchorEl={anchorEl} transition className={classes.popper}>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper className={classes.paper}>
              <MenuPanel menuItems={TOP_BAR_MENUS} />
              <FooterPanel  menuItems={ FOOTER_MENUS } />
            </Paper>
          </Fade>
        )}
      </Popper>
    </div>
  );
}