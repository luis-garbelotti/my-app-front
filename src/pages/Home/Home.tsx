import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import AddButton from '../../components/AddComponents/AddButton';
import PageContainer from '../../components/PageContainer/PageContainer';
import PageContent from '../../components/PageContent/PageContent';
import ResumeContainer from '../../components/ResumeContainer/ResumeContainer';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import ProjectResume from '../../components/ProjectResume/ProjectResume';
import { Box } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import useAlert from '../../hooks/useAlert';
import dayjs from 'dayjs';


const styles = {
  title: {
    fontSize: '22px'
  },
  projectsInfos: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '15px',
    height: 'auto',
    paddingRight: '40px',
    pl: '40px',
  },
  projectsInfosTitle: {
    width: '50%',
    paddingLeft: '17px',
    display: 'flex',
    justifyContent: 'space-between'
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
    borderRadius: '5px',
  },
  noProjects: {
    marginTop: '40px',
    fontSize: '18px',
    color: '#5d5d5d'
  }
};

export default function Home() {

  const { auth } = useAuth();
  const { setMessage } = useAlert();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState<number | false>(false);
  const [projects, setProjects] = useState<any[] | null>(null);

  useEffect(() => {
    if (!auth || !auth.token) {
      navigate('/');
    }

    const promise = api.getProject(auth.token, auth.id);
    promise.then((response) => {
      setProjects(response.data);
    })
    .catch((error) => {
      setMessage({ type: 'error', text: error.response.data });
      
    });
  }, []);

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <PageContainer >
      <Navbar />
      <PageContent >
        <Header>
          Olá, {auth.name}!
        </Header>

        { projects?.length === 0 ? 
          <Box component='h2' sx={styles.noProjects} >
            Nenhum projeto cadastrado.
          </Box>
          :
          <>
            <Box>
              <Box component='h2' sx={styles.title} >
                Seus projetos
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

            <Box sx={{ marginTop: '10px', height: '65vh', overflow: 'auto' }}>
              {projects?.map((p) => 
                <>
                  <Accordion key={p.project.id} sx={styles.accordion} expanded={expanded === p.project.id} onChange={handleChange(p.project.id)}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: '#BF0000', }} />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                      sx={{ paddingLeft: 0, }}
                    >
                      <Box component='div' sx={{pl: '15px'}} onClick={() => navigate(`/projects/${p.project.id}`)}>
                        <VisibilityIcon  />
                      </Box>
                      <Box component='h4' sx={styles.projectsInfosTitle} >
                        {p.project.title}
                      </Box>
                      <Box component='h4' sx={styles.projectsInfosLimit} >
                        {dayjs(p.project.limitDate).format('DD/MM')}
                      </Box>
                      <Box component='h4' sx={styles.projectsInfosRemaining} >
                        { 
                          p.project.isDone ? 'Finalizado' :
                          dayjs(p.project.limitDate).diff(new Date(), 'day') > 0 ? 
                            <Typography sx={{ color: '#fff', fontWeight: 700 }}>
                              {dayjs(p.project.limitDate).diff(new Date(), 'day') + 1} dia(s)!
                            </Typography> :
                          dayjs(p.project.limitDate).diff(new Date(), 'day') < 0 ? 
                            <Typography sx={{color: '#BF0000', fontWeight: 700}}>
                              {dayjs(p.project.limitDate).diff(new Date(), 'day') * -1} dia(s) atrasado!
                            </Typography> :
                          dayjs(p.project.limitDate).format('DD/MM/YYYY') === dayjs(new Date).format('DD/MM/YYYY') ? 
                            <Typography sx={{ color: '#fff', fontWeight: 700 }}>
                                    Entrega hoje!
                            </Typography> : 
                          dayjs(p.project.limitDate).diff(new Date(), 'day') === 0 ? 
                            <Typography sx={{ color: '#fff', fontWeight: 700 }}>
                                    Entrega amanhã!
                            </Typography> : 
                          ''
                        }
                      </Box>
                    </AccordionSummary>

                    <AccordionDetails sx={{ bgcolor: '#5D5D5D', borderRadius: '0 0 5px 5px' }}>
                      <Typography>
                        {p.project.resume}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </>
              )}
            </Box>
          </>
        }
      </PageContent>

      <ResumeContainer>
        <ProjectResume />
        <AddButton />
      </ResumeContainer>

    </PageContainer>
  );
}