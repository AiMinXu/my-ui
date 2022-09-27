import './App.css';
import theme from 'theme';
import { ThemeProvider } from 'styled-components';
import ChatApp from 'components/ChatApp';
import { BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ChatApp />
      </ThemeProvider>
    </Router>

  );
}

export default App;
