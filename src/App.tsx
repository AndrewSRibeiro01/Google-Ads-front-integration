import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Result from './pages/Result';
import GlobalStyle from './global';

const App = () => (
  <Router>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  </Router>
);

export default App;
