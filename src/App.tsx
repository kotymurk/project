import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from './store/store';
import { AuthPage } from './pages/AuthPage';
import { MainPage } from './pages/MainPage';

function App() {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  return (
    <Routes>
      <Route
        path='/auth'
        element={!isAuth ? <AuthPage /> : <Navigate to='/' />}
      />
      <Route
        path='/'
        element={isAuth ? <MainPage /> : <Navigate to='/auth' />}
      />
    </Routes>
  );
}

export default App;
