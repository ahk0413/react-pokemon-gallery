import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'

function App() {
  // true(열림) | false(닫힘)
  const [modal, setModal] = useState(false);
  console.log(modal)
  const showModal = () => {
    setModal(true);
  }

  const closeModal = () => {
    setModal(false);
  }

  return (
    <div className="App">
      <h1>모달창 UI</h1>
      <button onClick={showModal}>열기</button>
      { 
        // modal = true 일 때 모달창 보임
        modal == true ? <Modal closeModal={closeModal} /> : null
      }
    </div>
  )
}

export default App
