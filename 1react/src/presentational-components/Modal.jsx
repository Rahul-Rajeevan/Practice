const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal">
        <div className="modal-content">
          <button onClick={onClose}>Close</button>
          {children}
        </div>
      </div>
    );
  };
  