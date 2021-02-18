import React, { Fragment, useState } from 'react';
import Modal from "react-modal";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement("#root");


const Bv = () => {
    
    return (
        <div>
            <Fragment>
                <button >Edit</button>
                <Modal>
                    <form>
                        <input type="text" />
                        <button>Confirm</button>
                        <button >Cancel</button>
                    </form>
                </Modal>
            </Fragment>
        </div>
    )
}

export default Bv

