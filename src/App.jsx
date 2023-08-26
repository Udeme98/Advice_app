import { useState, useEffect } from "react";

function App() {
  const [advice, setAdvice] = useState(null);

  const getAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="container">
      <div className="hero">
        <h2>{advice}</h2>
        <button onClick={getAdvice}>Get Advice</button>
      </div>
    </div>
  );
}

export default App;
