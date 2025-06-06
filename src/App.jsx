import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import Home from './pages/Home';
import Favoritos from './pages/Favoritos';
import Detalhes from './pages/Detalhes';
import Navbar from './components/Navbar'; 

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/detalhes/:id" element={<Detalhes />} />
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  );
}

export default App;
