import React from 'react';
import Modal from 'react-bootstrap/Modal';

function MyModal(props) {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header className="bg-f4240erzy" closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                {props.winner == true ? "Wygrałeś!" : "Przegrałeś!"}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-f4240erzy">
            <p>{props.winner == true ? "Zostałeś F4240erem, gratulacje!":"Spróbuj ponownie :)"}</p>
            <p>Powrót do menu za 3s.</p>
        </Modal.Body>
      </Modal>
    );
  }

  export default MyModal