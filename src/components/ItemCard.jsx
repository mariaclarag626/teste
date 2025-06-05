import React from 'react';
import { useFavoritos } from '../context/FavoritosContext';

const ItemCard = ({ item }) => {
  const { favoritos, toggleFavorito } = useFavoritos();

  const isFavorito = favoritos.some((fav) => fav.id === item.id);

  return (
    <div className="border p-4 rounded shadow bg-white">
      <h2 className="text-xl font-bold mb-2">{item.nome}</h2>
      <p className="text-gray-700 mb-4">{item.descricao}</p>

      <button
        onClick={() => toggleFavorito(item)}
        className={`px-4 py-2 rounded text-white ${
          isFavorito ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        {isFavorito ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
      </button>
    </div>
  );
};

export default ItemCard;
