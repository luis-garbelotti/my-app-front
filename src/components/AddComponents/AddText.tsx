import { Box } from '@mui/material';

interface Props {
  children: React.ReactNode
}

export default function AddText({ children }: Props) {
  return (
    <Box component='div' sx={{ pl: '15px', mb: '10px', width: '18vw', fontWeight: 700 }}>
      {children}
    </Box>
  );
}