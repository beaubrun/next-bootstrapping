
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';

import MenuIcon from 'components/Icons/MenuIcon';

const MenuIconButton = ({ menuButtonClick, ...rest }) => (
  <Hidden lgUp implementation='css'>
    <IconButton edge='start' color='inherit' onClick={menuButtonClick} aria-label='menu' {...rest}>
      <MenuIcon />
    </IconButton>
  </Hidden>
);

export default MenuIconButton;
