import { Box } from '@mui/material';

const styles = {
  width: '65%',
  maxWidth: '500px',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  
  gap: '10px',
  height: 'auto',
  padding: '50px 25px 30px 25px',
  
  borderRadius: '15px',
  backgroundColor: '#BF0000',
};

interface Props {
  children: React.ReactNode;
}

function Form({ children }: Props) {
  return (
    <Box component="form" sx={styles}>
      {children}
    </Box>
  );
}

export default Form;