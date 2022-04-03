import { useContext } from "react"
import { MyContext } from "../App"

export const ThirdCom= () => {
   const contextVale = useContext(MyContext)
    
    let moviesList = contextVale.map((movie,i) => {
        return (
            <div key={i}>
                <h1>{movie.name}</h1>
                <img src={movie.imageUrl} alt="movie" />
            </div>
        )
    })

  return (
    <>
       {moviesList}
    </>)
}