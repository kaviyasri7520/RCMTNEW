import React from 'react';
import {AiFillCloseCircle} from "react-icons/ai"
import './PopUpModal.css'






const PopUpModal = ({ handleClose, show, children }) => {

  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="popup-modal-main">
        <div type="button" onClick={handleClose}><AiFillCloseCircle className='popup-close-btn' />
        </div>
        <div className='popup-children'>{children}</div>
      </section>
    </div>
  );
};



export default PopUpModal