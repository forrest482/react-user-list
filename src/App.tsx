import './App.css';
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/page-not-found';

function App() {
  return (
    <>
        <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </>
  );
}

export default App;
