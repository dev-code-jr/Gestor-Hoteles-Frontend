import "./modal.css"; // Asegúrate de crear este archivo CSS

export const ConfirmModal = ({ show, message, onConfirm, onCancel }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2 className="title-modal">Confirmación</h2>
        <p>{message}</p>
        <button onClick={onConfirm} className="btn confirm-btn">
          Aceptar
        </button>
        <button onClick={onCancel} className="btn cancel-btn">
          Cancelar
        </button>
      </div>
    </div>
  );
};
