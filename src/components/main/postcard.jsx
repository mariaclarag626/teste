import { useFavorites } from '../../context/FavoritesContext';

const PostCard = ({ item }) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const favorito = isFavorite(item.id);

  const toggleFavorite = () => {
    if (favorito) {
      removeFavorite(item.id);
    } else {
      addFavorite(item);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow-md flex justify-between items-center">
      <p className="text-gray-800">{item.text}</p>
      <button onClick={toggleFavorite} className="text-2xl">
        {favorito ? '💖' : '🤍'}
      </button>
    </div>
  );
};

export default PostCard;
