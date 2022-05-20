import Button from '@mui/material/Button';

interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function AddSubmitButton({ onClick }: Props ) {
  return (
    <Button onClick={onClick} variant="contained" sx={{margin: '15px 0 15px 0', float: 'right'}}>
      Adicionar
    </Button>
  );
}