import Button from '@mui/material/Button';

interface Props {
  children: React.ReactNode
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function PageButton({ onClick, children }: Props) {
  return (
    <Button onClick={onClick} variant="contained" sx={{ margin: '20px 0', float: 'left' }}>
      {children}
    </Button>
  );
}