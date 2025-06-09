import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import Home from './pages/Home';
import Favorites from './pages/Favoritos';
import Detalhes from './pages/Detalhes';
import Navbar from './components/Navbar'; 

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/detalhes/:id" element={<Detalhes />} />
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  );
}

export default App;
