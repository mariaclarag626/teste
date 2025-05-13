import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center w-screen text-center px-4" style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
      <h1 className="text-3xl font-bold mb-6 border-red-600">Conselho do Dia</h1>
      <button
        onClick={() => navigate("/detalhes")}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded"
      >
        Frases para hoje
      </button>
    </div>
  );
}

export default Home;
