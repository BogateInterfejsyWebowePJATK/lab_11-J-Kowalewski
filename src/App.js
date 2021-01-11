import './App.css';
import {generate} from './generate.js'

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <p>10 Random Numbers:</p>
          <ul>{generate()}</ul>
        </header>
      </div>
  );
}

export default App;