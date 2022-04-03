import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import './App.css';
import { FirstCom } from './components/FirstCom';
import { IMovie } from './components/models/IMovie';

export const MyContext = createContext<IMovie[]>([])
function App() {
  const [movies, setMovies] = useState<IMovie[]>([])

  useEffect(() => {
    axios.get('http://medieinstitutet-wie-products.azurewebsites.net/api/products').then((res) => {
      console.log(res.data);
      setMovies(res.data)
    })
  },[])
  
  return (
    <MyContext.Provider value={movies}>
      <div className='App'>
        <FirstCom/>
      </div>
    </MyContext.Provider>
  );
}

export default App;
