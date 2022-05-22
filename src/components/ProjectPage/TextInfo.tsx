import { Box } from '@mui/material';

interface Props {
  children: React.ReactNode
}

const style = {
  width: '100%',
  height: 'auto',
  padding: '5px 15px',
  borderRadius: '5px',
  border: 'none',
  margin: '0 0 10px 0',

  bgcolor: '#5d5d5d',
  color: '#fff',

  ':focus': {
    outline: '2px solid #BF0000',
  }
};

export default function TextInfo({ children }: Props) {
  return (
    <Box component='div' sx={style}>
      {children}
    </Box>
      
  );
}