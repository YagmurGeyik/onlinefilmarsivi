import React from 'react';
import '../styles/Modal.css';

const RegisterModal = ({ onClose }) => {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>×</span>
        
        <h3 className="modal-title">Kayıt Ol</h3>
        
        <input type="email" placeholder="E-posta" className="modal-input" />
        <input type="text" placeholder="Kullanıcı Adı" className="modal-input" />
        <input type="password" placeholder="Şifre" className="modal-input" />
        <input type="password" placeholder="Şifre (Tekrar)" className="modal-input" />

        <button className="modal-button">Kayıt Ol →</button>
      </div>
    </div>
  );
};

export default RegisterModal;
