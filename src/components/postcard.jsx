import { Link } from "react-router-dom";

function PostCard({ post }) {
  return (
    <div className="border p-4 rounded shadow mb-4">
      <h2 className="font-bold text-lg">{post.title}</h2>
      <p>{post.body.slice(0, 80)}...</p>
      <Link to={`/detalhes/${post.id}`} className="text-blue-600 underline mt-2 inline-block">
        Ver detalhes
      </Link>
    </div>
  );
}

export default PostCard;
