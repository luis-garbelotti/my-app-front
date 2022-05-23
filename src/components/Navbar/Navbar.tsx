import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import MiniLogo from '../MiniLogo/MiniLogo';

const styles = {
  box: {
    width: '100%',
    height: '100vh', 
    maxWidth: 200, 
    bgcolor: '#BF0000',
    borderRadius: '0 10px 10px 0',
    color: '#fff',
    border: 'none',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: '0 35px',
    width: '100%',
    height: '40px',
  },
  content: {
    height: '80%', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
};

export default function NavBar() {

  const navigate = useNavigate();
  const { logout, setAuth } = useAuth();

  function handleLogout() {
    navigate('/');
    logout();
  }

  return (
    <>
    <Box sx={styles.box}>
        <MiniLogo />
        <Box component='div' sx={styles.content}>
          <nav aria-label="menu-navbar">
            <List sx={styles.list} disablePadding>
              <ListItem disablePadding>
                <ListItemButton sx={styles.button} disableRipple onClick={() => navigate('/home')}>
                  <ListItemText primary="Projetos" />
                </ListItemButton>
              </ListItem>
              
            </List>
          </nav>
          <ListItem disablePadding>
            <ListItemButton sx={styles.button} disableRipple onClick={handleLogout}>
              <ListItemText primary="Sair" />
            </ListItemButton>
          </ListItem>
        </Box>
    </Box>
    </>
  );
}