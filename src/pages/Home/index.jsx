import { useEffect, useState } from 'react';
import PostCard from '../../components/main/postcard';

const Home = () => {
  const [advice, setAdvice] = useState(null);

  const fetchAdvice = async () => {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice({ id: data.slip.id, text: data.slip.advice });
  };

  useEffect(() => {
    fetchAdvice();
  }, []);
  useEffect(() => {
    console.log('cheguei')
  }, []);




  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Conselho do Dia</h1>
      {advice && <PostCard item={advice} />}
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={fetchAdvice}
      >
        Novo Conselho
      </button>

      import { Link } from 'react-router-dom';

...

<Link
  to="/conselhos"
  className="mt-2 px-4 py-2 bg-green-500 text-white rounded block w-fit"
>
  Mais Conselhos
</Link>

    </div>
  );
};

export default Home;
