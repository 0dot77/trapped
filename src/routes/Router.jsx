import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from './Home';
import Collect from './Collect';
import Pull from './Pull';
import Push from './Push';

export default function Router() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/"
          element={<Collect />}
        />
        <Route
          path="/"
          element={<Push />}
        />
        <Route
          path="/"
          element={<Pull />}
        />
      </Routes>
    </BrowserRouter>
  );
}
