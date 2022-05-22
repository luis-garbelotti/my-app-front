import { Calculate } from '@mui/icons-material';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import useAlert from '../../hooks/useAlert';
import useAuth from '../../hooks/useAuth';
import api from '../../services/api';

const styles = {
  container: {
    width: '100%',
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

  const { auth } = useAuth();
  const [projects, setProjects] = useState<any[] | null>();
  const [inWork, setInWork] = useState<number>();
  const [isFinished, setIsFinished] = useState<number>();
  const { setMessage } = useAlert();

  useEffect(() => {

    const promise = api.getProject(auth.token, auth.id);
    promise.then((response) => {
      setProjects(response.data);
      calcProjects(response.data);
    })
      .catch((error) => {
        setMessage({ type: 'error', text: error.response.data });
      });
  }, []);

  function calcProjects(projects: any[] | null) {
    if(!projects) {
      return;
    }
    const done = projects.filter(function (el)  {
      return el.project.isDone === true;
    });
    setIsFinished(done.length);

    const working = projects.filter(function (el) {
      return el.project.isDone === false;
    });
    setInWork(working.length);
  }

  return(
    <Box component='div' sx={styles.container}>

      <Box component='h2'>RESUMO</Box>

      <Box component='div' sx={styles.content} >
        <Box component='div' sx={styles.infos}>
          <Box component='h1'>
            {inWork}
          </Box>
          <Box component='h6' sx={{fontSize: '9px'}}>Em andamento</Box>
        </Box>

        <Box component='div' sx={styles.infos}>
          <Box component='h1'>
            {isFinished}
          </Box>
          <Box component='h6' sx={{fontSize: '9px'}}>Concluídos</Box>
        </Box>

        <Box component='div' sx={styles.infos}>
          <Box component='h1'>
            {projects?.length}
          </Box>
          <Box component='h6' sx={{fontSize: '9px'}}>Total</Box>
        </Box>
      </Box>
    </Box>
  );
}