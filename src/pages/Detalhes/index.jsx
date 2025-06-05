import { useEffect, useState } from "react";
import axios from "axios";

const Detalhes = () => {
  const [advice, setAdvice] = useState("");

  const fetchAdvice = () => {
    axios.get("https://api.adviceslip.com/advice")
      .then(res => setAdvice(res.data.slip.advice))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-center px-4 mt-20">
      <h1 className="text-2xl font-semibold mb-4">Mais um Conselho</h1>
      <p className="bg-gray-100 text-lg italic p-4 rounded shadow max-w-xl mb-6">
        "{advice}"
      </p>
      <button
        onClick={fetchAdvice}
        className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded"
      >
        Mostrar outro conselho
      </button>
    </div>
  )
};

export default Detalhes;
