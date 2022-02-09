import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Summary from '../pages/Summary';
import Wallet from '../pages/Wallet';

const ReactRoutes: React.FC = () => {
  return (
    <Router>
      <Navigation>
        <>
          <Routes>
            <Route path='/' element={<Wallet />} />

            <Route path='/wallet' element={<Wallet />} />

            <Route path='/summary' element={<Summary />} />
          </Routes>
        </>
      </Navigation>
    </Router>
  );
};

export default ReactRoutes;
