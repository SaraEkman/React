import { useEffect, useState } from 'react'
import './App.css'
import { IPrudcts } from './models/IProducts'

function App() {
  const [products, setProducts] = useState<IPrudcts[]>([])
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
  let prods = products.map((p,i) => {
    return (
      <article key={i}>
        <h1>{p.name}</h1>
        <img src={p.imageUrl} alt="product" height="auto" width="25%" />
        <p>{p.description}</p>
      </article>
    )
  })
  return <div className="App">{prods}</div>
}

export default App
