import React from 'react';

// destructure props into currentPhoto in the Modal parameter. Then destructure currentPhoto properties into constants to assign their values into the modal
function Modal({currentPhoto}) {

    const {name, category, description, index} = currentPhoto;

    // here we received currentPhoto from the PhotoList component, then assigned its properties in the modal
    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt="current category" />
                <p>
                {description}
                </p>
                <button type="button">
                Close this modal
                </button>
            </div>
        </div>
    )

};

export default Modal;