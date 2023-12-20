import React from "react";
import PropTypes from "prop-types";


function Modal({ title, appointmentsData, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h3>{title}</h3>
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>
        {/* Hiển thị bảng Scheduled Appointments với dữ liệu từ appointmentsData */}
        <div className="modal-content">
          {/* ... (hiển thị bảng và dữ liệu) */}
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  appointmentsData: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
