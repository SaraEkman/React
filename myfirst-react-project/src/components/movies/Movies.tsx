import axios from 'axios'
import { useEffect, useState } from 'react'
import { IMovie } from '../../models/IMovie'
import { Movie } from '../../models/Movie'

export const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [numOfClick, setNumOfClick] = useState(0)

    useEffect(() => {
        console.log("Trying to get data");
        if (movies.length > 0) return;
      axios
      .get<IMovie[]>(
        'https://medieinstitutet-wie-products.azurewebsites.net/api/products'
      )
      .then((res) => {
        let moviesFromApi = res.data.map((movie: IMovie) => {
          return new Movie(movie.id, movie.name, movie.imageUrl)
        })
        setMovies(moviesFromApi)
      })
    })
    
    useEffect(()=>{console.log("numOfClicks changed");},[numOfClick])
    useEffect(()=>{console.log("movies changed");},[movies])

//   console.log(movies)
    return (<>
        <div>{movies.length} and { numOfClick}</div>
        <button onClick={()=>{setNumOfClick(numOfClick + 1)}}>Testa</button>
    </>)
}
