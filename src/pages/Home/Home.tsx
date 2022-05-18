import { Box, Container } from '@mui/material';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import ProjectResume from '../../components/ProjectResume/ProjectResume';
import useAuth from '../../hooks/useAuth';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

const styles = {
  pageContainer: {
    display: 'flex',
    height: 'auto',
  },
  projectsContainer: {
    width: '55%',
    padding: '50px',
    color: '#fff',
    height: '100vh'
  },
  title: {
    marginTop: '40px',
    fontSize: '22px'
  },
  projectsInfos: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '15px',
    height: 'auto',
    paddingRight: '40px'
  },
  projectsInfosTitle: {
    width: '50%',
    paddingLeft: '17px',
  },
  projectsInfosLimit: {
    width: '20%',
    display: 'flex',
    justifyContent: 'center',
  },
  projectsInfosRemaining: {
    width: '30%',
    paddingLeft: '15px', 
    display: 'flex',
    justifyContent: 'center',
  },
  accordion: {
    bgcolor: '#343434', 
    color: '#fff',
    marginBottom: '10px',
    borderRadius: '5px'
  },
};

export default function Home() {
  
  const { auth } = useAuth();
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  
  return(
    <Box component='div' sx={styles.pageContainer} >
      <Navbar />
      <Box component='div' sx={styles.projectsContainer} >
        <Header>
          Olá, {auth.name}! 
        </Header>

        <Box>
          <Box component='h2' sx={styles.title} >
            Projetos
          </Box>
        </Box>
        
        <Box component='div' sx={styles.projectsInfos} >
          <Box component='h4' sx={styles.projectsInfosTitle} >
            Título
          </Box>
          <Box component='h4' sx={styles.projectsInfosLimit} >
            Entrega
          </Box>
          <Box component='h4' sx={styles.projectsInfosRemaining} >
            Dias restantes
          </Box>
        </Box>

        <Box sx={{marginTop: '10px', height: '65vh', overflow: 'auto'}}>
          <Accordion sx={styles.accordion} expanded={expanded === 1} onChange={handleChange(1)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{color: '#BF0000', }}/>}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{paddingLeft: 0, }}
            >
              <Box component='h4' sx={styles.projectsInfosTitle} >
                Projeto Autoral 
              </Box>
              <Box component='h4' sx={styles.projectsInfosLimit} >
                24/05
              </Box>
              <Box component='h4' sx={styles.projectsInfosRemaining} >
                30 dias
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ bgcolor: '#5D5D5D', borderRadius: '0 0 5px 5px'}}>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
          

        </Box>
      </Box>
      <ProjectResume />
    </Box>
    );
}