import { Box } from '@mui/material';

const styles = {
    width: '55%',
    padding: '50px 50px 50px 20px',
    color: '#fff',
    height: '100vh',
};

interface Props {
  children: React.ReactNode
}

export default function PageContent({ children }: Props) {
  return (
    <Box component='div' sx={styles} >
      {children}
    </Box>
  );
}