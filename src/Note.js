import React from "react";
import PropTypes from 'prop-types';
import * as Icon from 'react-bootstrap-icons';

const Note = props => {

    return(
        <tr>
            <td style={{verticalAlign: "middle"}}>{props.title}</td>
            <td className="justifyView" style={{borderBottom:"none"}}>{props.category}{
                props.category === "To do" ? 
                    (<Icon.ListCheck size={66}/>) :
                    (<Icon.ListTask size={66}/>)}
            </td>
            <td style={{verticalAlign: "middle"}}>{props.content}</td>
           {props.status === undefined ? (
               <td>
                   <div className="justifyRow">
                       <div className="justifyColumn">
                            <div>
                                <Icon.List size={30} color="green" className="item"/>
                                <i>Detail</i>
                            </div>
                            <div style={{display: "block"}}>
                                <Icon.Bell size={32} color="#999900" className="item"/>
                                <i>Remind</i>
                            </div>
                       </div>
                    <div className="justifyColumn">
                        <div>
                            <Icon.Pencil size={30} color="blue" className="item"/>
                            <i>Edit</i>
                        </div>
                        <div>
                            <Icon.Trash size={30} color="black" className="item"/>
                        </div>
                    </div>
                   </div>
               </td>
           ) :
           (
            <td>
                {
                    props.status ? (
                        <div className="justifyRow">
                            <div className="justifyColumn">

                            </div>
                            <div className="justifyColumn"></div>
                        </div>
                    ) : (
                        <div className="justifyRow">
                            <div className="justifyColumn">

                            </div>
                            <div className="justifyColumn"></div>
                        </div>
                    )
                }
            </td>
        )
           }
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