import { useState } from 'react'
import './App.css'

function App() {
  const data = [
    {
      name: '이상해씨',
      type: '풀, 독',
      imgUrl: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000101.png'
    },
    {
      name: '파이리',
      type: '불꽃',
      imgUrl: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000401.png'
    },
    {
      name: '피카츄',
      type: '전기',
      imgUrl: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/002501.png'
    },
  ]

  const [num, setNum] = useState(0);

  return (
    <section>
        <h1>Pokemon Gallery</h1>
        <div className="gallery">
          <img src={data[num].imgUrl} alt="포케몬 이미지" />
          <div className="info">
            <h2 className="name">{data[num].name}</h2>
            <p className="type">{data[num].type}</p>
          </div>
        </div>
        <div className="btn-group">
            <button onClick={()=>{setNum(0)}}>{data[0].name}</button>
            <button onClick={()=>{setNum(1)}}>{data[1].name}</button>
            <button onClick={()=>{setNum(2)}}>{data[2].name}</button>
        </div>
      </section>
  )
}

export default App
