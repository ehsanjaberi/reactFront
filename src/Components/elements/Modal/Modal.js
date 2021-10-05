import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const CModal = (props) => {
	return (
		<Modal {...props} onHide={props.onHide} animation={false}>
			<Modal.Body className="d-flex align-items-center justify-content-between text-success">
				کد ملی وارد شده معتبر است
				<Button variant="secondary" onClick={props.onHide}>
					<FontAwesomeIcon icon={faTimes} />
				</Button>
			</Modal.Body>
		</Modal>
	);
};

export default CModal;
