import React, { Fragment, useState, useEffect } from 'react';
import Modal from "react-modal";
import { connect } from "react-redux";
import {editTodo} from '../js/actions/actions'

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

const EditForm = ({oldTodo,editTodo}) => {

    const [show, setShow] = useState(false);
    const [text,setText] = useState("");

    useEffect (() => {
        setText(oldTodo.text);
    }, [show,oldTodo.text]);
    

    const toggleModal = setShow(!show);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {...oldTodo,text:text};
        editTodo(newTodo);
        toggleModal();
        alert("hhhhh");
    }

    return (
        <div>
            <Fragment>
                <button onClick={toggleModal}>Edit</button>
                <Modal isOpen={show} style={customStyles} onRequestClose={toggleModal}>
                    <form onSubmit={handleSubmit}> 
                        <input type="text" value={text} onChange={(e) => setText(e.target.value)} required/>
                        <button >Confirm</button>
                        <button onClick={toggleModal}>Cancel</button>
                    </form>
                </Modal>
            </Fragment>
        </div>

    )
}

export default connect (null,{editTodo}) (EditForm)
