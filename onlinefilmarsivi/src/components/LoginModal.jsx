import React from 'react';
import '../styles/Modal.css';

const LoginModal = ({ onClose, onSwitchToRegister }) => {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>×</span>

        <h3 className="modal-title">Giriş Yap</h3>

        <input type="text" placeholder="Kullanıcı Adı" className="modal-input" />
        <input type="password" placeholder="Şifre" className="modal-input" />

        <button className="modal-button">Giriş Yap →</button>

        <div className="modal-divider">
          <span>VEYA</span>
        </div>

        <div className="modal-links">
          <a href="#">Şifremi Unuttum</a>
          <a href="#">E-Mail Aktivasyon</a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onSwitchToRegister();
            }}
          >
            Kayıt Ol
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
