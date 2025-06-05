import React, { createContext, useContext, useState } from 'react';

// Criando o contexto
const FavoritosContext = createContext();

// Provider = responsável por armazenar e compartilhar os dados
export const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);

  // Alterna entre adicionar e remover o item da lista de favoritos
  const toggleFavorito = (item) => {
    const jaExiste = favoritos.some((fav) => fav.id === item.id);

    if (jaExiste) {
      setFavoritos(favoritos.filter((fav) => fav.id !== item.id));
    } else {
      setFavoritos([...favoritos, item]);
    }
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, toggleFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useFavoritos = () => useContext(FavoritosContext);
