import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Home from './pages/Home/Home';
import { AlertProvider } from './contexts/AlertContext';
import Alert from './components/Alert/Alert';

function App() {
  return (
    <AlertProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/home' element={<Home />}/>
        </Routes>
      </BrowserRouter>
      <Alert />
    </AlertProvider>
  );
}

export default App;
