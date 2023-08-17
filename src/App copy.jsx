import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  //let count = 0; // 일반 변수
  const [count, setCount] = useState(0);

  const 카운트증가 = () => {
    setCount(count + 1); // 변경 함수
  }
  console.log('count: ', count);

  const 카운트감소 = () => {
    setCount(count - 1); // 변경 함수
  }

  return (
    <div className="App">
      <p>count: {count}</p>
      <button onClick={카운트감소}>count -</button>
      <button onClick={카운트증가}>count +</button>
      <Header title='Welcome'/>
      <Main />
    </div>
  )
}

export default App
