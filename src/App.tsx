import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './components/routes';
import theme from './theme/theme';
import { ThemeProvider } from '@mui/material';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
    </ThemeProvider>
  )
}

export default App;
