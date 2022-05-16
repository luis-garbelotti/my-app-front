import { Box } from '@mui/material';

const styles = {
  width: '85%',
  maxWidth: '500px',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  
  gap: '10px',
  height: 'auto',
  padding: '30px 15px 20px 15px',
  
  borderRadius: '15px',
  backgroundColor: '#BF0000',
}

interface Props {
  children: React.ReactNode;
}

function Form({ children }: Props) {
  return (
    <Box component="form" sx={styles}>
      {children}
    </Box>
  )
}

export default Form