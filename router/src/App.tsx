import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import { Movie } from './components/models/Movie'

function App() {
  const [products, setProducts] = useState<Movie[]>([])
  useEffect(() => {
    getData()
  }, [])
  const getData = () => {
    fetch('http://medieinstitutet-wie-products.azurewebsites.net/api/products')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setProducts(data)
      })
  }
  let movies = products.map((p, i) => {
    let movieLink = `/movie/${p.id}`
    return (
      <article key={i}>
        <Link to={movieLink}>{p.name}</Link>
      </article>
    )
  })
  return <div>{movies}</div>
}

export default App
