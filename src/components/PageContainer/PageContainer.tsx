import { Box } from '@mui/material';

const styles = {
    display: 'flex',
    height: 'auto',
};

interface Props {
  children: React.ReactNode
}

export default function PageContainer({ children }: Props) {
  return(
    <Box component='div' sx={styles} >
      {children}
    </Box>
  );
}