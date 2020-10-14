import React from "react";
import PropTypes from 'prop-types';

const Note = props => {

    return(
        <tr>
            <td>{props.title}</td>
            <td>{props.category}</td>
            <td>{props.content}</td>
            <td>{props.date.getDate()}.{props.date.getMonth()+1}.{props.date.getFullYear()}</td>
        </tr>
    )

}


Note.propTypes = {
     title: function(props,propName,component){
    if(props[propName].length<3){
      return new Error(propName + " was too short.")
    }
  },
    category: PropTypes.string.isRequired,
    content:PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
};

Note.defaultProps = {
    title:"NoteTitle",
    category:"NoteCategory",
    content:"NoteContent",
    date: new Date()
}

export default Note