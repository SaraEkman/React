import './App.css';
// import { CondRend } from './components/cond-rend/CondRend';
import { HelloWorld } from './components/hello-world/HelloWorld';
import { Lists } from './components/lists/Lists';
// import { Movies } from './components/movies/Movies';
import { ShowEvents } from './components/show-events/ShowEvents';
import { ShowState } from './components/show-state/ShowState';
import { IPerson } from './models/IPerson';

function App() {
  let p:IPerson = {name: "Sara", age: 22}
  return (
    <div>
      <HelloWorld person={p} />
      <ShowState />
      <ShowEvents />
      {/* <CondRend></CondRend> */}
     <Lists></Lists>
      {/* <Movies></Movies> */}
      Main Works
    </div>
  );
}

export default App;
