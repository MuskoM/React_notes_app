import React from 'react';
import * as Icon from "react-bootstrap-icons";

const DetailForm = (props) => {
    const { noteList, index, onClose } = props;
    return (
        <div className="alertForm">
            <span className="closeButton">
                <Icon.XCircleFill color="dimgray" size={18} onClick={() => onClose()} />
            </span>
            <div className="headerDetail">
                <div>
                    {noteList[index].title}
                </div>
                {
                    noteList[index].category === "To do" ? (
                        <Icon.ListCheck size={40} />
                    ) : (
                            <Icon.FileText size={40} />
                        )}
            </div>
            <div className="contentDetail">
                {noteList[index].content}
            </div>
            <div>
                {
                    noteList[index].date !== null ? (
                        <div className="dateDetail">
                            {noteList[index].date} ({noteList[index].time})
                         </div>
                    ) : (
                            null
                        )
                }
            </div>
        </div>
    );
}

export default DetailForm;