import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAlert from '../../hooks/useAlert';
import { AxiosError } from 'axios';
import FormContainer from '../../components/FormComponents/FormContainer';
import { Input, Form, Title, SideLogo } from '../../components/FormComponents/index';
import api, { FormData } from '../../services/api';
import { Box, Container, Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxInputContainer: {
    width: '100%',
    height: '45px',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-beteween',
    paddingLeft: '10px',
    borderRadius: '10px'
  },
  boxIconContainer: {
    width: '30px',
    height: '30px',
    borderRadius: '5px',
    backgroundColor: '#BF0000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1
  },
  icon: {
    color: '#fff',
    width: '15px'
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '14px',
    backgroundColor: '#191919',
    width: '100%',
    borderRadius: '10px',
    ':hover': {
      backgroundColor: '#191919'
    }
  },
  loadingButton: {
    backgroundColor: 'rgba(25,25,25, 0.5)',
    width: '100%',
    borderRadius: '10px',
  },
  login: {
    fontSize: '12px',
    color: '#fff',
    '&:hover': {
      cursor: 'pointer'
    }
  }
};

export default function SignUp() {

  const { setMessage } = useAlert();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);

    if (!formData.password ||
      !formData.email ||
      !formData.confirmPassword ||
      !formData.name
    ) {
      setMessage({ type: 'warning', text: 'Preencha todos os campos corretamente.' });
      return;
    }

    const { name, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setMessage({ type: 'warning', text: 'As senhas devem ser iguais.' });
      setFormData({ ...formData, confirmPassword: '' });
      return;
    }

    setIsLoading(true);
    try {
      await api.signUp({ name, password, email });
      setMessage({ type: 'success', text: 'Cadastro efetuado com sucesso.' });
      navigate('/');

    } catch (error: AxiosError | Error | any) {
      setIsLoading(false);
      setMessage({ type: 'error', text: error.response.data });
      setFormData({ ...formData, password: '', confirmPassword: '' });
    }
  }

  return (
    <FormContainer>
      <SideLogo />
      <Container sx={style.container}>
        <Title text="CADASTRO"></Title>
        <Form >
          <Box
            component="div"
            sx={style.boxInputContainer}>
            <Box
              component="div"
              sx={style.boxIconContainer}>
              <PersonRoundedIcon sx={style.icon} />
            </Box>
            <Input
              label="name"
              placeholder="Nome"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Box>

          <Box
            component="div"
            sx={style.boxInputContainer}>
            <Box
              component="div"
              sx={style.boxIconContainer}>
              <MailIcon sx={style.icon} />
            </Box>
            <Input
              label="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Box>

          <Box
            component="div"
            sx={style.boxInputContainer}>
            <Box
              component="div"
              sx={style.boxIconContainer}>
              <LockIcon sx={style.icon} />
            </Box>
            <Input
              label="password"
              placeholder="Senha"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </Box>

          <Box
            component="div"
            sx={style.boxInputContainer}>
            <Box
              component="div"
              sx={style.boxIconContainer}>
              <LockIcon sx={style.icon} />
            </Box>
            <Input
              label="Password"
              placeholder="Confirmar senha"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
          </Box>

          {!isLoading ?
            <Button sx={style.button}
              variant="contained"
              onClick={handleSubmit}

            >
              Cadastrar
            </Button>
            :
            <LoadingButton loading variant="outlined" sx={style.loadingButton}>
              Submit
            </LoadingButton>
          }

          <Box component="div" onClick={() => navigate('/')} sx={style.login}>
            Fazer login
          </Box>
        </Form>
      </Container>
    </FormContainer>
  );
}

export {
  SignUp
};