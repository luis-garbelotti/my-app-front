import { Box } from '@mui/material';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100px',
  color: '#fff',
  fontSize: '25px',
  backgroundColor: '#BF0000',
  borderRadius: '0 10px 10px 0',
  fontWeight: 700
};

export default function MiniLogo() {
  return (
    <Box component="div" sx={style}>
        Duduck
    </Box>
  );
}