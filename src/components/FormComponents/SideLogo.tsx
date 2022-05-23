import { Box } from '@mui/material';
import Logo from '../Logo/Logo';

const style = {
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    color: '#fff',

    width: '140%',
    height: '100vh',
    marginLeft: '-30px',
    backgroundColor: '#BF0000',
    borderRadius: '0 15px 15px 0',
  },
  text:{
    fontStyle: 'italic'
  }
  };

function SideLogo() {
  return (
    <Box component="form" sx={style.form}>
      <Logo/>
      <Box component='h3' sx={style.text}>Controle seus projetos freelancer em um só lugar!</Box>
    </Box>
  );
}

export default SideLogo;