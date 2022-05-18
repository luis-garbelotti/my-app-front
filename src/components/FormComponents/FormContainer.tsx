import React from 'react';
import { Box, Container } from '@mui/material';

const style = {
  display: 'flex',
  flexDirection: 'row',
  height: '100vh'
};

interface Props {
  children: React.ReactNode
}

export default function FormContainer({ children }: Props) {
  return (
    <Box component='div' sx={style}>
      {children}
    </Box>
  );
}

