import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GlobalStyle from './global';

const App = () => (
  <Router>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/result" element={<></>} />
    </Routes>
  </Router>
);

export default App;
