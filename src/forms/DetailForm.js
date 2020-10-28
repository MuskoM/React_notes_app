import React from 'react'
import Icon from '@material-ui/core'


const DetailForm = (props) => {
    const {noteList, index, onClose} = props;

    return(
        <div className="alertForm">
            <span className="closeButton">
                <Icon.XCircleFill color="dimgray" size={18} onClick={() => onClose()}/>
            </span>
            <div className="headerDetail">
                <div>
                    {noteList[index].title}
                </div>
                {
                    noteList[index].category === "To do" ?(
                        <Icon.AssignmentTurnedIn size={40}/>
                    ) : (
                        <Icon.Assignment size={40}/>
                    )
                }
            </div>
            <div className="contentDetail">
             {noteList[index].content}
            </div>
            {
                noteList[index].date != null ? (
                    <div>
                        {noteList[index].date} ({noteList[index].time})
                    </div>
                ) : (
                    null
                )
            }
        </div>
    );

}

export default DetailForm;