import React from 'react';
import { useFavorites } from '../context/FavoritesContext';

const ItemCard = ({ item }) => {
  const { favorites, toggleFavorite } = useFavorites();

  const isFavorite = favorites.some((fav) => fav.id === item.id);

  return (
    <div className="border p-4 rounded shadow bg-white">
      <h2 className="text-xl font-bold mb-2">{item.nome}</h2>
      <p className="text-gray-700 mb-4">{item.descricao}</p>

      <button
        onClick={() => toggleFavorite(item)}
        className={`px-4 py-2 rounded text-white ${
          isFavorite ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        {isFavorite ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
      </button>
    </div>
  );
};

export default ItemCard;
