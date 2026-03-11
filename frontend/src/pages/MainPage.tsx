import { useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';
import { Button, Container, Typography } from '@mui/material';

export const MainPage = () => {
  const dispatch = useDispatch();

  return (
    <Container sx={{ mt: 8, textAlign: 'center' }}>
      <Typography variant='h4' gutterBottom>
        Главная страница
      </Typography>
      <Typography variant='body1' gutterBottom>
        Вы успешно авторизованы!
      </Typography>
      <Button
        variant='outlined'
        color='error'
        onClick={() => dispatch(logout())}
      >
        Выйти
      </Button>
    </Container>
  );
};
