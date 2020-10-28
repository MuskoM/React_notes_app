import React from 'react';
import { Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

export const DeleteForm = (props) => {
    const {deleteNote, onClose, index} = props;

    return(
        <div className="alertForm">
            <span className="closeButton">
                <Icon.XCircleFill color="dimgray" size={18} onClick={() => onClose()}/>
            </span>
            <div className="ImportantInfoAlert">
                <Icon.Info size={60} color="#017BFF"/>
                Are you sure you want to delete this note?
            </div>
            <div className="noteDeleteButtons">
                <Button variant='primary' onClick={()=> onClose()}>No</Button>
                <Button variant="danger" style={{marginLeft:"2em"}}
                    onClick={()=> {
                        deleteNote(index);
                        onClose();
                    }}>Yes</Button>
            </div>
        </div>
    )
}
