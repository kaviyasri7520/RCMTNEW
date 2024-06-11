import React from 'react';
import './modal.css';





const Modal = ({ handleClose, show, children }) => {

  const showHideClassName = show ? "modal display-block" : "modal display-none";



  return (

    <div className={showHideClassName}>
      <section className="modal-main">
        <div type="button" onClick={handleClose}>
        </div>
        <div className='popup-children'>{children}</div>
      </section>
    </div>
  );

};



export default Modal