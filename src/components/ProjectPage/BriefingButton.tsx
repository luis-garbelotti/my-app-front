import Button from '@mui/material/Button';

interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function BriefingButton({ onClick }: Props) {
  return (
    <Button onClick={onClick} variant="contained" sx={{ margin: '20px 0', float: 'left' }}>
      Briefing
    </Button>
  );
}