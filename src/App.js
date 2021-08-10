
import './App.css';
import { useQuery, gql } from '@apollo/client';

const STARSHIPS = gql`{
	characters {
    results {
      name
      id
    }
  }
}`;

function App() {
    const {loading, data} = useQuery(STARSHIPS);
    console.log(data);
    if (loading) return <p>Loading...</p>
    return (
      <div className="App">
       <h2>Starships <span role='img' aria-label='characters'>🚀</span></h2>
        {data.characters.results.map ((character) => (
            <p key={character.ip}>{character.name}</p>
        ))}
      </div>
    );
  }

export default App;