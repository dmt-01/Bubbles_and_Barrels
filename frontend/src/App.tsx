import { useFetcher } from "./core/fetch";

function App() {
    const data = useFetcher();
console.log(data);

  

  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <ul>
        {data.map((u) => (
          <li key={u.id_user}>email: {u.email} password: {u.password}
          n° de park: {u.id_park}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;