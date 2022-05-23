import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AddButton from '../../components/AddComponents/AddButton';
import AddText from '../../components/AddComponents/AddText';
import Header from '../../components/Header/Header';
import NavBar from '../../components/Navbar/Navbar';
import PageContainer from '../../components/PageContainer/PageContainer';
import PageContent from '../../components/PageContent/PageContent';
import TextInfo from '../../components/ProjectPage/TextInfo';
import ProjectResume from '../../components/ProjectResume/ProjectResume';
import ResumeContainer from '../../components/ResumeContainer/ResumeContainer';
import useAlert from '../../hooks/useAlert';
import useAuth from '../../hooks/useAuth';
import api, { ProjectClientData } from '../../services/api';
import dayjs from 'dayjs';
import PageButton from '../../components/ProjectPage/PageButton';

export default function Project() {

  const { auth } = useAuth();
  const { setMessage } = useAlert();
  const navigate = useNavigate();
  const { projectId } = useParams<string>();
  const [projectData, setProjectData] = useState<ProjectClientData>();

  useEffect(() => {
    if(!auth || !auth.token) {
      return;
    }

    api.getProjectById(auth.token, projectId, auth.id)
    .then((response) => {
      setProjectData(response.data);
    })
    .catch((error) => {
      setMessage({ type: 'error', text: error.response.data });
    });
  }, []);
  
  function handleFinishProject() {
    api.finishProject(auth.token, projectId, auth.id)
    .then(() => {
      setMessage({ type: 'success', text: 'Projeto finalizado!' });
      navigate('/home');
    })
    .catch((error) => {
      setMessage({ type: 'success', text: error.response.data });
    });
  }

  return (
    <PageContainer >
      <NavBar />
      <PageContent >
        { !projectData ? '' :
        <>
          <Header>
              {projectData.title}
          <Box component='h5' sx={{fontStyle: 'italic', fontSize: '12px', pt: '5px'}}>
              {!projectData.isDone ? <p>Em andamento</p> : <p>Concluído</p> }
          </Box>
          </Header>
          <Box component='div' sx={{pr: '20%', height: '70vh', overflow: 'auto'}}>
          <AddText >
            Resumo
          </AddText>
          <TextInfo>
            {projectData.resume}
          </TextInfo>
          <AddText >
            Informações importantes
          </AddText>
          <TextInfo>
            {projectData.importantInfos}
          </TextInfo>

            <Box component='div' 
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between'
              }} >
              <Box component='div' >
                <AddText>
                  Data início
                </AddText>
                <TextInfo>
                  {dayjs(projectData.startDate).format('DD/MM/YYYY')}
                </TextInfo>
              </Box>

              <Box component='div' >
                <AddText>
                  Data Entrega
                </AddText>
                <TextInfo>
                  {dayjs(projectData.limitDate).format('DD/MM/YYYY')}
                </TextInfo>
              </Box>
            </Box>
            <AddText >
              Valor
            </AddText>
            <TextInfo>
              {(projectData.value / 100).toString().replace('.',',')}
            </TextInfo>
            <br />
            <br />
              <AddText >
                Cliente
              </AddText>
              <TextInfo>
                {projectData.client.name}
              </TextInfo>

              <AddText >
                Email
              </AddText>
              <TextInfo>
                {projectData.client.email}
              </TextInfo>

              <AddText >
                Telefone
              </AddText>
              <TextInfo>
                {projectData.client.phone}
              </TextInfo>
              <Box component='div' sx={{display: 'flex', justifyContent: 'space-between'}}>
                <PageButton onClick={() => navigate(`/projects/${projectId}/briefing`)}>
                  Briefing
                </PageButton>
                {!projectData.isDone ? 
                <PageButton onClick={handleFinishProject}>
                  Concluir
                </PageButton>
                : ''
                }
              </Box>
            </Box>
        </>
        }
      </PageContent>

      <ResumeContainer>
        <ProjectResume />
        <AddButton />
      </ResumeContainer>

    </PageContainer >
  );
}