import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const ShowMovie = () => {
    const [movieId, setMovieId] = useState(0)
    let params = useParams()
    
    useEffect(() => {
        if (params.id) {
            setMovieId(+params.id)
        }
    }, [params.id])
    
    useEffect(() => {
        if (movieId === 0) return;
        console.log(`Get movie Id ${movieId}`);
    },[movieId])

  return <>Got movie Id: {params.id}</>
}
