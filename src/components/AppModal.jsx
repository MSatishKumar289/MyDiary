import React from 'react';
import { createPortal } from 'react-dom';
import close_black_ic from "../assets/close_black_ic.png";
import "./AppModal.css";

export default function AppModal({children, onClose}){
    return createPortal(
    <div className='modal-overlay'  onClick={onClose}>
        <div className='modal-content' onClick={(e) => e.stopPropagation()}>
            <button className='absolute right-5 top-5 cursor-pointer' onClick={onClose}>
                <img src={close_black_ic} width={13}/>
            </button>
            {children}
        </div>
    </div>
    , document.getElementById("modal-root"))
}