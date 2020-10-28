import React from 'react'
import  * as Icon  from 'react-bootstrap-icons'
import { Button } from 'react-bootstrap'

export const ChangeNoteStatusForm = (props) => {

    const {status, index, onClose, ChangeNoteStatus} = props;

    return(
        <div className="alertForm">
            <span className="closeButton">
                <Icon.XCircleFill color="dimgray" size={18} onClick={() => onClose()}/>
            </span>
            <div>

            {
                status ? (
                <div>
                    <div className="ImportantInfoAlert">
                        <Icon.AlertTriangle size ={80} color ="#FF8069"/>
                    Are you sure you want to change this task status to <span style={{color:'red'}}>undone</span>?
                    </div>
                    <div className="noteChangeStatusButtons">
                    <Button variant='primary' onClick={()=> onClose()}>No</Button>
                    <Button variant="danger" style={{marginLeft:"2em"}}
                        onClick={()=> {
                            ChangeNoteStatus(index);
                            onClose();
                        }}>Yes</Button>
                    </div>
                </div>
                ) : (
                    
                <div>
                    <div className="ImportantInfoAlert">
                    <Icon.AlertTriangle size ={80} color ="#FF8069"/>
                    Are you sure you want to change this task status to <span style={{color:'green'}}>done</span>?
                    </div>
                    <div className="noteChangeStatusButtons">
                    <Button variant='primary' onClick={()=> onClose()}>No</Button>
                    <Button variant="danger" style={{marginLeft:"2em"}}
                        onClick={()=> {
                            ChangeNoteStatus(index);
                            onClose();
                        }}>Yes</Button>
                    </div>
                </div>
                )
            }
            </div>
        </div>
    
}
