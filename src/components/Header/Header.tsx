import { Box } from '@mui/material';
import useAuth from '../../hooks/useAuth';

const style = {
  fontSize: '30px',
  color: '#fff',
  mb: '40px',
};

interface Props {
  children: React.ReactNode
}

export default function Header({ children }: Props) {
  
  const { auth } = useAuth();
  
  return(
    <>
      <Box component="h1" sx={style}>
        {children}
      </Box>
    </>
  );
}