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
import Add from './pages/Add/Add';
import Project from './pages/Project/Project';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Poppins',
      ].join(',')
    },
    palette: {
      primary: {
        main: '#BF0000',
      },
      secondary: {
        main: '#fff',
      },
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
              <Route path='/home' element={<Home />} />
              <Route path='/projects/:projectId' element={<Project />} />
              <Route path='/projects/:projectId/briefing' element={<Briefings />} />
              <Route path='/add' element={<Add />} />
            </Routes>
          </BrowserRouter>
          <Alert />
        </AlertProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
