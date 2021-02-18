import React, { Fragment, useState, useEffect } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { Button } from 'reactstrap';
import { editTodo } from "../js/actions/actions";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const EditForm = ({ oldTodo, editTodo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    setText(oldTodo.text);
  }, [isOpen, oldTodo.text]);

  const toggleModal = () => setIsOpen(!isOpen);

  const handleSubmit = (e) => {
    e.preventDefault();
    const editedTodo = { ...oldTodo, text };
    editTodo(editedTodo);
    toggleModal();
  };

  return (
    <Fragment>
      <Button onClick={toggleModal} color="warning">EDIT</Button>{' '}
      <Modal isOpen={isOpen} style={customStyles} onRequestClose={toggleModal}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">Save</button>
          <button onClick={toggleModal}>Cancel</button>
        </form>
      </Modal>
    </Fragment>
  );
};

export default connect(null, { editTodo })(EditForm);
