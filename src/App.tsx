import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Home from './pages/Home/Home';
import { AlertProvider } from './contexts/AlertContext';
import Alert from './components/Alert/Alert';
import { AuthProvider } from './contexts/AuthContext';
import Briefings from './pages/Briefings/Briefings';
import { createTheme, ThemeProvider } from '@mui/material';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Poppins',
      ].join(',')
    },
  });

  return (
    <ThemeProvider theme={theme}>
    <AuthProvider>
      <AlertProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/home' element={<Home />}/>
            <Route path='/briefings' element={<Briefings />}/>
          </Routes>
        </BrowserRouter>
        <Alert />
      </AlertProvider>
    </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
