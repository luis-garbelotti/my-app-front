import { Box } from '@mui/material';
import useAuth from '../../hooks/useAuth';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  height: '150px',
};

export default function Header() {
  
  const { auth } = useAuth();
  
  return(
    <>
      <Box component="div" sx={style}>
        Olá, {auth.name}!
      </Box>
    </>
  );
}