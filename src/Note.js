import React from "react";
import PropTypes from "prop-types";
import * as Icon from "react-bootstrap-icons";

const Note = props => {
  var noteStatus = props.status ? "done" : "";
  return (
    <tr>
      <td style={{ verticalAlign: "middle" }} className={noteStatus}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          {props.title}
          {props.date != null ? (
            <b>
              {props.date} ({props.time}) <Icon.ExclamationTriangle color="#FF5d00" size={32} />
            </b>
          ) : (
              null
            )}

        </div>
      </td>
      <td style={{ borderBottom: "none" }} className={noteStatus}><div>{props.category}
        {
          props.category === "To do" ? (
            <Icon.ListCheck size={66} />
          ) : (
              <Icon.FileText size={66} />
            )}
      </div>
      </td>
      <td style={{ verticalAlign: "middle" }} className={noteStatus}><div>{props.content}</div></td>
      {
        props.status === '' ? (
          <td>
            <div className="justifyRow">
              <div className="justifyColumn">
                <div onClick={() => props.showDetailForm(props.id)}>
                  <Icon.List size={30} color="green" className="item" />
                  <i>Detail </i>
                </div>
                <div style={{ display: "block" }} onClick={() => props.showRemindForm(props.id)}>
                  <Icon.Bell size={32} color="#999900" className="item" />
                  <i>Remind </i>
                </div>
              </div>
              <div className="justifyColumn">
                <div onClick={() => props.showEditForm(props.id)}>
                  <Icon.Pencil size={30} color="blue" className="item" />
                  <i>Edit </i>
                </div>
                <div onClick={() => props.showDeleteForm(props.id)}>
                  <Icon.Trash size={30} color="black" className="item" />
                  <i>Delete </i>
                </div>
              </div>
            </div>
          </td>
        ) : (
            <td>
              {
                props.status ? (
                  <div className="justifyRow">
                    <div className="justifyColumn">
                      <div style={{ display: "block", verticalAlign: "middle" }} onClick={() => props.showChangeNoteStatusForm(props.id)}>
                        <Icon.XCircle size={32} color="red" className="item" />
                        <i>Undone</i>
                      </div>
                      <div onClick={() => props.showDetailForm(props.id)}>
                        <Icon.List size={30} color="green" className="item" />
                        <i>Detail </i>
                      </div>
                    </div>
                    <div className="justifyColumn">
                      <div style={{ display: "block" }} onClick={() => props.showRemindForm(props.id)}>
                        <Icon.Bell size={32} color="#999900" className="item" />
                        <i>Remind </i>
                      </div>
                      <div style={{ display: "block" }} onClick={() => { props.showEditForm(props.id) }}>
                        <Icon.Pencil size={32} color="blue" className="item" />
                        <i>Edit </i>
                      </div>
                    </div>
                    <div className="justifyColumn">
                      <div onClick={() => { props.showDeleteForm(props.id) }}>
                        <Icon.Trash size={30} color="black" className="item" />
                        <i>Delete </i>
                      </div>
                    </div>
                  </div>
                ) : (

                    <div className="justifyRow">
                      <div className="justifyColumn">
                        <div style={{ display: "block" }} onClick={() => props.showChangeNoteStatusForm(props.id)}>
                          <Icon.CheckCircle size={32} color="green" className="item" />
                          <i>Done</i>
                        </div>
                        <div onClick={() => props.showDetailForm(props.id)}>
                          <Icon.List size={30} color="green" className="item" />
                          <i>Detail </i>
                        </div>
                      </div>
                      <div className="justifyColumn">
                        <div style={{ display: "block" }} onClick={() => props.showRemindForm(props.id)}>
                          <Icon.Bell size={32} color="#999900" className="item" />
                          <i>Remind </i>
                        </div>
                        <div style={{ display: "block" }} onClick={() => props.showEditForm(props.id)}>
                          <Icon.Pencil size={32} color="blue" className="item" />
                          <i>Edit </i>
                        </div>
                      </div>
                      <div onClick={() => props.showDeleteForm(props.id)}>
                        <Icon.Trash size={30} color="black" className="item" />
                        <i>Delete </i>
                      </div>
                    </div>
                  )
              }
            </td>
          )
      }

    </tr >
  );
}

Note.propTypes = {
  title: function (props, propName) {
    if (props[propName] === null || props[propName].length < 3) {
      return new Error(propName + " was too short");
    }
  },
  category: PropTypes.string,
  content: PropTypes.string,
};

export default Note;
