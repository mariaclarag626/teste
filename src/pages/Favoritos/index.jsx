import { useFavorites } from '../../context/FavoritesContext';
import PostCard from '../../components/main/postcard';

const Favoritos = () => {
  const { favorites } = useFavorites();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Conselhos Favoritos</h1>
      {favorites.length === 0 ? (
        <p className="text-gray-500">Você ainda não favoritou nenhum conselho.</p>
      ) : (
        <div className="grid gap-4">
          {favorites.map((item) => (
            <PostCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};




export default Favoritos;


