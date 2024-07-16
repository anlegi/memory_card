import React from "react"

function Modal({ message, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={onClose}>PLAY AGAIN</button>
      </div>
    </div>
  )
}

export default Modal
