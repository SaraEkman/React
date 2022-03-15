import './App.css';
import { Addition } from './components/addition/Addition';
import { HelloWorld } from './components/hello-world/HelloWorld';

function App() {
  return (
    <div>
      <HelloWorld name='Sara' age={22} />
      <Addition/>
    </div>
  );
}

export default App;
