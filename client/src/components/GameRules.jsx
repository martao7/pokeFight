import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Wählen Sie die Wurzel-Element-ID Ihrer Anwendung

export default function GameRules({ isOpen, onClose, text }) {
  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={onClose}>
        <div>
          <h2>Game Rules</h2>
          <p>{text}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </Modal>
    </>
  );
}
