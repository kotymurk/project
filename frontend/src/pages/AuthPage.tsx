import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Link,
  InputAdornment,
  IconButton,
  Alert,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useLoginMutation } from '../store/authApi';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import * as S from './AuthPage.styles';

interface IFormInput {
  email: string;
  password: string;
  remember?: boolean;
}

export const AuthPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: IFormInput) => {
    setServerError(null);
    try {
      const result = await login(data).unwrap();
      dispatch(setCredentials(result));
      navigate('/');
    } catch (err: unknown) {
      const error = err as { data?: { message?: string } };
      setServerError(error?.data?.message || 'Ошибка авторизации');
    }
  };

  return (
    <S.StyledAuthBox>
      {/* Логотип */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <img
          src='/Logo.svg'
          alt='Filara Logo'
          style={{ width: 270, marginBottom: 12 }}
        />
      </Box>

      {/* Карточка формы */}
      <S.StyledPaper>
        <Typography variant='h6' sx={{ mb: 3, fontWeight: 500 }}>
          Вход в учётную запись
        </Typography>
        {serverError && (
          <Alert
            severity='error'
            sx={{ mb: 2 }}
            onClose={() => setServerError(null)}
          >
            {serverError}
          </Alert>
        )}

        <Box
          component='form'
          onSubmit={handleSubmit(onSubmit)}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <Box>
            <Typography variant='body2' sx={{ mb: 1, fontWeight: 600 }}>
              E-mail
            </Typography>

            <Controller
              name='email'
              control={control}
              rules={{
                required: 'Введите email',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Неверный формат email',
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder='Введите свой e-mail'
                  fullWidth
                  size='small'
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              )}
            />
          </Box>

          <Box>
            <Typography variant='body2' sx={{ mb: 1, fontWeight: 600 }}>
              Пароль
            </Typography>
            <Controller
              name='password'
              control={control}
              rules={{
                required: 'Введите пароль',
                minLength: {
                  value: 6,
                  message: 'Минимум 6 символов',
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Введите пароль'
                  fullWidth
                  size='small'
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge='end'
                          tabIndex={-1}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </Box>

          <FormControlLabel
            control={<Checkbox size='small' />}
            label={<Typography variant='body2'>Запомнить меня</Typography>}
          />

          <Button
            type='submit'
            variant='contained'
            disabled={isLoading}
            fullWidth
          >
            {isLoading ? 'Загрузка...' : 'Войти'}
          </Button>

          <Link
            href='#'
            underline='none'
            sx={{ textAlign: 'center', fontSize: '0.85rem', mt: 1 }}
          >
            Забыли пароль?
          </Link>
        </Box>
      </S.StyledPaper>
    </S.StyledAuthBox>
  );
};
