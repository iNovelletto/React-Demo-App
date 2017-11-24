export const drawerWidth = 240;

export const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    //marginTop: theme.spacing.unit * 3,
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    backgroundColor: '#424242',
    position: 'absolute',
    zIndex: theme.zIndex.navDrawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarFlagButton: {
    position: 'absolute',
    right: '80px',
    color: 'white'
  },
  appBarLoginButton: {
    position: 'absolute',
    right: '0',
    marginTop: '-16px',
    color: 'white'
  },
  appBarMailButton: {
    position: 'absolute',
    right: '110px',
    color: 'white'
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  colorWhite: {
    color: 'white'
  },
  fontSize1Rem: {
    fontSize: '1rem'
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },

  hide: {
    display: 'none',
  },
  drawerPaper: {
    backgroundColor: '#424242',
    position: 'relative',
    height: '100%',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    backgroundColor: '#424242',
    width: 60,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  drawerInner: {
    // Make the items inside not wrap when transitioning:
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '200'
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  },
  content: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: 'lightgrey',
    padding: 24,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
  loginFormPaper: {
    padding: '20px',
    paddingLeft: '50px',
    paddingRight: '50px',
    marginTop: '80px',
  },
  dashboardPaper: {
    padding: '20px',
    paddingLeft: '50px',
    paddingRight: '50px',
    marginTop: '40px',
  }
});
