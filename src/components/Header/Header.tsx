import Logo from '../Logo/Logo';
import {Box} from '@mui/material';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  height: '150px',
  backgroundColor: '#BF0000',
  borderRadius: '0 0 15px 15px'
}

export default function Header() {
  return(
    <>
      <Box component="div" sx={style}>
        <Logo />
      </Box>
    </>
  )  
}