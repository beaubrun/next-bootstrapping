
import { makeStyles } from '@material-ui/core/styles';

import TopAppBar from 'containers/TopAppBar';
import Footer from 'containers/Footer';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  body: {
    display: 'flex',
    backgroundColor: theme.palette.background.default
  },
  main: {
    flexGrow: 1,
    marginTop: theme.custom.layout.topAppBarHeight,
    minHeight: `calc(100vh - ${theme.custom.layout.topAppBarHeight + theme.custom.layout.footerHeight}px)`,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2, 7, 0, 7)
  },
  mainpanel: {
    backgroundColor: theme.palette.background.main,
    width: '100%',
    height: '100%'
  }
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.body}>
        <TopAppBar />
        <main className={classes.main}>
          <div className={classes.mainpanel}>
            {children}
            Main layout
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
