import useAlert from '../../hooks/useAlert';
import useAuth from '../../hooks/useAuth';
import { useParams } from 'react-router-dom';
import api, { Briefing } from '../../services/api';
import { useState } from 'react';
import { Box } from '@mui/system';
import { TextareaAutosize, Typography } from '@mui/material';
import AddText from '../AddComponents/AddText';
import Button from './Button';

const styles = {
  container: {
    mt: '60px',
    bgcolor: '#BF0000', 
    width: '100%', 
    height: '80%', 
    borderRadius: '25px',
    padding: '15px',
    overflow: 'auto',
    color: '#fff'
  },
  content: {
    display: 'flex', 
    flexDirection: 'column'
  },
  textAreaQuestion: {
    width: '100%', 
    maxWidth: '100%', 
    borderRadius: '5px',
    height: '80px',
    padding: '8px',
  },
  textAreaAnswer: {
    width: '100%', 
    maxWidth: '100%', 
    borderRadius: '5px',
    height: '200px',
    padding: '8px',
  },
  title: {
    pl: '15px',
    fontWeight: 500,
    mb: '10px',
    mt: '10px'
  },
  header: {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between',
  }
};

interface Props {
  setLever: React.Dispatch<React.SetStateAction<boolean>>
  lever: boolean
}

export default function New({ setLever, lever }: Props) {

  const { projectId } = useParams();
  const { auth } = useAuth();
  const { setMessage } = useAlert();
  const [formData, setFormData] = useState<Briefing>({
    question: '',
    answer: ''
  });

  function handleInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if(!formData?.question || !formData?.answer) {
      setMessage({type: 'warning', text: 'Preencha todos os campos corretamente.'});
      return;
    }

    console.log(formData);

    const promise = api.createProjectBriefing(auth.token, projectId, formData);
    promise.then(() => {
      setLever(!lever);
      setFormData({question: '', answer: ''});
    })
    .catch((error) => {
      setMessage({ type: 'error', text: error.response.data });
    });
  }

  return (
    <Box component='div' sx={styles.container}>
      <Box component='div' 
        sx={styles.header}
        onClick={handleSubmit}  
      >
        <AddText>
          Cadastrar briefing
        </AddText>
        <Button />
      </Box>
      <Box component='div' sx={styles.content}>
        <Typography sx={styles.title}>
          Pergunta
        </Typography>
      <TextareaAutosize
        aria-label="Pergunta"
        name='question'
        value={formData.question}
        style={styles.textAreaQuestion}
        onChange={handleInputChange}
        />
      </Box>

      <Typography sx={styles.title}>
        Resposta
      </Typography>
      <TextareaAutosize
        aria-label="Resposta"
        name='answer'
        value={formData.answer}
        style={styles.textAreaAnswer}
        onChange={handleInputChange}
      />
      
    </Box>
  );
}