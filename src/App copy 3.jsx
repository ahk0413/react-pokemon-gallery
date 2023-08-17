import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'

function App() {
  const [tab, setTab] = useState(0); // 0, 1, 2... 페이지 번호
  console.log('tab:', tab);
  const articleJSX = [
    (<article>
      <h1>HTML</h1>
      <p>Hyper Text Markup Language</p>
    </article>),
    (<article>
      <h1>CSS</h1>
      <p>WEB 문서의 디자인을 담당하는 언어(Cascading Style Sheet)</p>
    </article>),
    (<article>
      <h1>JavaScript</h1>
      <p>WEB programing language</p>
    </article>)
  ]

  return (
    <div className="App">
      <h1>Tab UI</h1>
      <div className="tab-ui">
        <div className="tab-group">
          <a href="#tab1" onClick={() => {setTab(0)}}>HTML</a>
          <a href="#tab2" onClick={() => {setTab(1)}}>CSS</a>
          <a href="#tab3" onClick={() => {setTab(2)}}>JavaScript</a>
        </div>
        <div className="contents">
          {tab == 0 ? articleJSX[0] : null}
          {tab == 1 ? articleJSX[1] : null}
          {tab == 2 ? articleJSX[2] : null}
        </div>
      </div>
    </div>
  )
}

export default App
