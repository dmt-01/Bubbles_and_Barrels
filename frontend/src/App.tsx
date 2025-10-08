import { useEffect, useState } from "react";

function App() {
  const [fakeData, setFakeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/test");
        const data = await response.json();
        setFakeData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>totoooooo :</h1>
      <pre>{JSON.stringify(fakeData, null, 2)}</pre>
    </div>
  );
}

export default App;
