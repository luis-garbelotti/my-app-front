import React from 'react';
import { Container } from '@mui/material';

const style = {
  display: 'flex',
  flexDirection: 'row',
  height: '100vh'
}

interface Props {
  children: React.ReactNode
}

export default function ContainerPages({ children }: Props) {
  return (
    <Container sx={style}>
      {children}
    </Container>
  )
}

