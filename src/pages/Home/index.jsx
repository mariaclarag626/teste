import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PostCard from '../../components/main/postcard';
import { useFavorites } from '../../context/FavoritesContext';

const Home = () => {
  const [advice, setAdvice] = useState(null);
  const { toggleFavorite } = useFavorites();
  const navigate = useNavigate();

  const fetchAdvice = async () => {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice({ id: data.slip.id, text: data.slip.advice });
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  const handleFavorite = () => {
    if (advice) {
      toggleFavorite(advice);
      setAdvice(null); // tira a frase atual da tela
    }
  };

  const goToFavorites = () => {
    navigate('/favorites');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Conselho do Dia</h1>

      {advice ? (
        <PostCard item={advice} />
      ) : (
        <p>Nenhum conselho carregado. Clique em "Novo Conselho" para buscar um.</p>
      )}

      <div className="mt-4 flex gap-4">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded disabled:opacity-50"
          onClick={handleFavorite}
          disabled={!advice} // desabilita botão se não tiver conselho
        >
          Favoritar
        </button>

        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={goToFavorites}
        >
          Ver Favoritos
        </button>
      </div>

      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={fetchAdvice}
      >
        Novo Conselho
      </button>
    </div>
  );
};

export default Home;
