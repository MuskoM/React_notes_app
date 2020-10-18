import React, {Component} from "react";
import Note from './Note';
import {Button, Table} from "react-bootstrap";
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class Notes extends Component {

    onClick = () =>{
        confirmAlert(
            {customUI: ({onClose}) =>{
                return(
                    <div>
                        <h1>Add content to note</h1>
                        <p><textarea cols="50" rows="10" id="content" defaultValue={this.state.content} onChange={(e)=> this.onChange(e)}></textarea></p>
                        <Button style={{float:"right"}} variant="danger" onClick={onClose}>Close window</Button>
                    </div>
                )
            }}
        )
    }

    onChange = (e)=>{
        var name = e.target.id;
        this.setState({
            [name]: e.target.value
        })
    }
    
    filter(content){
        return content.length > 25 ? content.substring(0,25) + "..." : content;
    }

    addNote(){
        this.setState(state=> {
            var notes = state.noteList;
            var date = state.date === undefined ? "" : new Date(state.date);
            var time = state.time === undefined ? "" : state.time;
            if(state.category === "To do"){
                notes.push({
                    title: state.title,
                    category: state.category,
                    content: state.content,
                    date: date,
                    time: time,
                    status: false
                })
            }else{
                notes.push({
                    title: state.title,
                    category: state.category,
                    content: state.content,
                    date: date,
                    time: time,
                    status: undefined
                })
            }
            return {nodeList: notes}
        })
    }

    constructor(props){
        super(props);
        this.state = {
            noteList : [
    
                {
                    title: "Go to the gym",
                    category: "Hobby",
                    content: "Leg Day",
                    date: '',
                    status: undefined,
                    time: ''
                },
                {
                    title: "Go to the gym",
                    category: "To do",
                    content: "Chest Day",
                    date: '',
                    status: false,
                    time: ''
                }
            ],
            title: "",
            category: "",
            content: "",
            date: undefined,
            time: undefined
        }
    }
  render(){
    return (
        <div id="Notes-table">
            <h3 style={{textAlign:"center"}}>List of notes</h3>
          <Table>
              <thead>
                  <tr>
                      <td>Title</td>
                      <td>Category</td>
                      <td>Content</td>
                      <td>Action</td>
                  </tr>
              </thead>
              <tbody>
              {this.state.noteList.map((note,key) =>{
                  
                  return(
                      <Note
                        key = {key} 
                        title={note.title}
                        category={note.category}
                        content={this.filter(note.content)}
                        status={note.status}
                        />
                  );
              })}
              </tbody>
          </Table>
          <Table striped bordered>
              <tbody>
                  <tr>
                      <td colSpan="5" style={{textAlign: "center"}}><i><b>Add new note</b></i></td>
                  </tr>
                  <tr>
                      <td><input type="text" placeholder="Tittle of note" id="title" onChange={(e)=>this.onChange(e)}></input></td>
                      <td><input type="text" list="categoryList" id="category" placeholder="Category of note" onChange={(e)=>this.onChange(e)}></input>
                      <datalist id="categoryList">
                        <option>To do</option>
                        <option>Hobby</option>
                        <option>Work</option>
                        <option>Study</option>
                        <option>Gym</option>
                        <option>Favourites</option>
                      </datalist>
                      </td>
                      <td>
                          {
                              this.state.content !== ''?
                              <Button variant="primary" onClick={()=> this.onClick()}>Edit content</Button>:
                              <Button variant="success" onClick={()=>this.onClick()}>Add content</Button>
                          }
                      </td>
                      <td><input type="date" id="date" onChange={(e)=> this.onChange(e)}/><input type="time" id="time" onChange={(e)=>this.onChange(e)}/></td>
                      <td><Button variant="secondary" onClick={()=>this.addNote()}>Add Note</Button></td>
                  </tr>
              </tbody>
          </Table>
        </div>
      );
  }
   
}

export default Notes;
