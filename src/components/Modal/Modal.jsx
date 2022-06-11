import React from 'react'
import {func, array, string} from 'prop-types'


//   Modal Component 
const Modal = ({children,closeModal})=>{
    // Displays a modal of list items

        return(
           <div className='modal'>

               <div className='modal-content'>
                   <i onClick={closeModal} className="fa-solid fa-xmark"></i>
                {children}
               </div>
               
           </div>
        )
    }


Modal.propTypes = {
    modalItems: array.isRequired,
    closeModal: func.isRequired
}    

export default Modal