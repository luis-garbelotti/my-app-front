import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';

const styles = {
  container: {
    width: '27.5%',
    height: '230px',
    marginTop: '60px',
    borderRadius: '25px',
    bgcolor: '#343434',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    padding: '25px 40px 30px 40px'
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  infos: {
    width: '90px',
    height: '90px',
    bgcolor: '#BF0000',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
};

export default function ProjectResume() {

  return(
    <Box component='div' sx={styles.container}>

      <Box component='h2'>RESUMO</Box>

      <Box component='div' sx={styles.content} >
        <Box component='div' sx={styles.infos}>
          <Box component='h1'>10</Box>
          <Box component='h6' sx={{fontSize: '9px'}}>Em andamento</Box>
        </Box>

        <Box component='div' sx={styles.infos}>
          <Box component='h1'>20</Box>
          <Box component='h6' sx={{fontSize: '9px'}}>Concluídos</Box>
        </Box>

        <Box component='div' sx={styles.infos}>
          <Box component='h1'>30</Box>
          <Box component='h6' sx={{fontSize: '9px'}}>Total</Box>
        </Box>
      </Box>
    </Box>
  );
}