import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Collect from './pages/Collect';
import Push from './pages/Push';
import Pull from './pages/Pull';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/collect"
          element={<Collect />}
        />
        <Route
          path="/push"
          element={<Push />}
        />
        <Route
          path="/pull"
          element={<Pull />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
