import { Box } from '@mui/material';
import Logo from '../Logo/Logo';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '120%',
  height: '100vh',
  marginLeft: '-30px',
  backgroundColor: '#BF0000',
  borderRadius: '0 15px 15px 0'
}

function SideLogo() {
  return (
    <Box component="form" sx={style}>
      <Logo/>
    </Box>
  )
}

export default SideLogo;