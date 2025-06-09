const PostCard = ({ item }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md flex justify-between items-center">
      <p className="text-gray-800">{item.text}</p>
    </div>
  );
};

export default PostCard;
