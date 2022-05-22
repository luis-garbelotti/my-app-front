import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AddButton from '../../components/AddComponents/AddButton';
import AddText from '../../components/AddComponents/AddText';
import BriefingContent from '../../components/BriefingPage/BriefingContent';
import New from '../../components/BriefingPage/New';
import Header from '../../components/Header/Header';
import NavBar from '../../components/Navbar/Navbar';
import PageContainer from '../../components/PageContainer/PageContainer';
import PageContent from '../../components/PageContent/PageContent';
import TextInfo from '../../components/ProjectPage/TextInfo';
import ResumeContainer from '../../components/ResumeContainer/ResumeContainer';
import useAlert from '../../hooks/useAlert';
import useAuth from '../../hooks/useAuth';
import api, { Briefing, BriefingData } from '../../services/api';

export default function Briefings() {

  const { projectId } = useParams();
  const { auth } = useAuth();
  const { setMessage } = useAlert();
  const [ briefings, setBriefings ] = useState<BriefingData[]>();
  const [lever, setLever] = useState<boolean>(false);

  useEffect(() => {
    if (!auth || !auth.token) {
      return;
    }

    api.getProjectBriefing(auth.token, projectId)
      .then((response) => {
        setBriefings(response.data);
      })
      .catch((error) => {
        error.response.status === 404 ?
          setMessage({ type: 'warning', text: 'Você não tem briefing nesse projeto.' }) : 
          setMessage({ type: 'error', text: error.response.data });
      });
  }, [lever]);

  return (
    <>
      <PageContainer >
        <NavBar />
        <PageContent >
          <Header>
            Briefing 
          </Header>
          
          <BriefingContent>
            { !briefings ? '' :
              briefings.map((briefing) => 
              <Box key={briefing.id} >
                <AddText>
                  {briefing.question}
                </AddText>
                <TextInfo>
                  {briefing.answer}
                </TextInfo>
              </Box>
              )
            }
          </BriefingContent>
        </PageContent>

        <ResumeContainer>
          <New setLever={setLever} lever={lever}/>
          <AddButton />
        </ResumeContainer>

      </PageContainer >
    </>
  );
}