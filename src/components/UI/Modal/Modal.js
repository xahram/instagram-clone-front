import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import classes from './Modal.module.css'
const BootstrapModal = (props) => {
    return (
        <Modal
            // backdrop='static'
            //here goes props.show
            // show={props.show}
            // onHide={props.onHide}
            {...props}
            dialogClassName={classes.ModalSizing}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {/* <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Post
          </Modal.Title>
            </Modal.Header> */}
            <Modal.Body className={classes.ModalBody}>

                <div className={classes.postSizing}>
                    <img alt='Post' src={`data:image/jpg;base64,${props.url}`} />
                </div>
                <div>
                    <div>Comments and like</div>
                    <div>Comments and like</div>
                </div>

            </Modal.Body>
            {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
        </Modal>
    );
}

export default BootstrapModal

// function App() {
//     const [modalShow, setModalShow] = React.useState(false);

//     return (
//         <>
//             <Button variant="primary" onClick={() => setModalShow(true)}>
//                 Launch vertically centered modal
//         </Button>

//             <MyVerticallyCenteredModal
//                 show={modalShow}
//                 onHide={() => setModalShow(false)}
//             />
//         </>
//     );
// }

