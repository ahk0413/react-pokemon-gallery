import React from 'react'

export default function Modal(props) {
  console.log(props);
  let { closeModal } = props;

  return (
    <div className='modal'>
        <h2>제목</h2>
        <p>모달 창입니다.</p>
        <button onClick={closeModal}>닫기</button>
    </div>
  )
}
