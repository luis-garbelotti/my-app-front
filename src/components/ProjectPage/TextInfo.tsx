import { Box } from '@mui/material';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode
}

const style = {
  width: '100%',
  height: 'auto',
  padding: '5px 15px',
  borderRadius: '5px',
  border: 'none',
  margin: '0 0 10px 0',

  bgcolor: '#343434',
  color: '#fff',

  ':focus': {
    outline: '2px solid #BF0000',
  }
};

export default function TextInfo({ children }: Props) {
  return (
    <Box component='div' sx={style}>
      {children}
    </Box>
      
  );
}

const Text = styled.div`
  
  width: 100%;
  height: 5vh;
  padding: 0 15px;
  border-radius: 5px;
  border: none;
  margin: 0 0 10px 0;
  
  background-color: #343434;
  color: #fff;

  :focus {
    outline: 2px solid #BF0000;
  }

`;