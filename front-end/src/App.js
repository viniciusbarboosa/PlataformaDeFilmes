import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Outlet,Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import HomeIcon from '@mui/icons-material/Home';
import { Avatar } from '@mui/material';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
    position: 'relative',
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
  backgroundColor: "#141414"
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function App() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Typography variant="h4" noWrap sx={{ flexGrow: 1, color:'#E50914',fontWeight:'bold' }} component="div">
            VFILMES
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open} style={{ backgroundColor: '#333333', color: '#fff', minHeight: '100vh' }}>
        <DrawerHeader />

        {/**conteudo da main */}
        <Outlet />

      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            color:'#fff',
            backgroundColor:'#454443'

          },
          '& .MuiListItemIcon-root': {
            color: '#E50914',
          },'& .MuiIconButton-root': {
            color: '#E50914', 
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>

        <Link to={`/Perfil`} style={{textDecoration:'none',color:'#fff'}}>
            <ListItem key={1} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Avatar
                  alt="V"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 40, height: 40, marginRight: 1 }}
                  />
                </ListItemIcon>
                <ListItemText primary={'Perfil'} />
              </ListItemButton>
            </ListItem></Link>

            <Divider />

            <Link to={`/`} style={{textDecoration:'none',color:'#fff'}}>
            <ListItem key={1} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon></HomeIcon>
                </ListItemIcon>
                <ListItemText primary={'Home'} />
              </ListItemButton>
            </ListItem></Link>


            <Link to={`/Filmes`} style={{textDecoration:'none',color:'#fff'}}>
            <ListItem key={1} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LocalMoviesIcon></LocalMoviesIcon>
                </ListItemIcon>
                <ListItemText primary={'Filmes'} />
              </ListItemButton>
            </ListItem></Link>
          
        </List>
        
      </Drawer>
    </Box>
  );
}