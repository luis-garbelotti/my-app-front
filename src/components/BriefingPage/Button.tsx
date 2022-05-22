import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import ChangeHistoryTwoToneIcon from '@mui/icons-material/ChangeHistoryTwoTone';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    
    ':hover': {
      cursor: 'pointer'
    }
  },
  text: {
    color: '#fff',
    fontSize: '10px',
    fontWeight: 500
  },
  iconContainer: {
    width: '30px',
    height: '30px',
    bgcolor: '#BF0000',
    borderRadius: '3px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
};

export default function Button() {

  return (
    <Box component='div' sx={styles.container}>
      <Box component='h4' sx={styles.text}>Enviar</Box>
      <Box component='div' sx={styles.iconContainer}>
        <ChangeHistoryTwoToneIcon sx={{ color: '#fff', transform: 'rotate(90deg)' }} />
      </Box>
    </Box>
  );
}