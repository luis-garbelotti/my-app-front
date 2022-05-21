import { Box } from '@mui/material';
import logo from '../../assets/logo2.png';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

export default function Logo() {
  return(
    <Box component="h1" sx={style}>
      <img
        src={logo}
        width='40%'
      />
    </Box>
  );
}