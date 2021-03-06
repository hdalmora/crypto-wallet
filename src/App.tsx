import ReactRoutes from './routes';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ReactRoutes />
    </ThemeProvider>
  );
}

export default App;
