import React from 'react';
import { createMuiTheme, makeStyles, ThemeProvider,useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import orange from '@material-ui/core/colors/orange';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PetsIcon from '@material-ui/icons/Pets';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CloudIcon from '@material-ui/icons/Cloud';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import HomeIcon from '@material-ui/icons/Home';
//ボタンの色を定義
const color = createMuiTheme({
    palette: {
      primary: orange,
    },
  });

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Impact',
    paddingLeft:'5vw'
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:'#bdbdbd'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));
export default function ButtonAppBar(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const handleListItem = (index) => {
        props.setContent(index);
        handleDrawerClose();
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
      <div className={classes.root}>
      <ThemeProvider theme={color}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
              Punch
            </Typography>
            <div className="menu">
                <IconButton 
                    edge="end" 
                    onClick={handleDrawerOpen}
                    className={clsx(open && classes.hide)}
                    color="inherit"
                    aria-label="menu"
                >
                <MenuIcon />
                </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['ホーム','Punchとは', '開発者プロフィール', 'インフラ構成図', '今後の改善'].map((text, index) => (
            <ListItem button key={text} onClick={() => handleListItem(index)}>
              <ListItemIcon>
                {(() => {
                    if(index === 0){
                       return <HomeIcon/>
                    }else if(index === 1){
                        return <PetsIcon /> 
                    }else if(index === 2){
                        return <AccountCircleIcon/>
                    }else if(index === 3){
                        return <CloudIcon/>
                    }else if(index === 4){
                        return <TrendingUpIcon/>
                    }
                }) ()}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
{/* 
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
         */}
      </Drawer>

      </div>
    );
  }