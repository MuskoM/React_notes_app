import React, {Component} from "react";
import Note from './Note';
import {Button, Table} from "react-bootstrap";
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import NoteClass from './class/NoteClass'
import {ChangeNoteStatusForm,DetailForm,EditForm,DeleteForm,RemindForm, AddNote} from './class'

class Notes extends Component {
    constructor(props){
        super(props);
        this.state = {
            noteList : [
                new NoteClass('Meeting','Work','LOREM IPSUM DOLOREM, MAGIKUM,service',"",null,""),
                new NoteClass('Test score','Study','DOLOREM, MAGIKUM, studies',"",null,""),
                new NoteClass('Go to the gym','To do','Lorem ipsum siłonia brak gipsum',true,"2020-11-11","12:30"),
            ],
        };
        this.showDetailForm = this.showDetailForm.bind(this);
        this.showEditForm = this.showEditForm.bind(this);
        this.showDeleteForm = this.showDeleteForm.bind(this);
        this.showChangeNoteStatusForm = this.showChangeNoteStatusForm.bind(this);
        this.showRemindForm = this.showRemindForm.bind(this);
        this.addNote = this.addNote.bind(this);
        this.editNote = this.editNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
        this.ChangeNoteStatus = this.ChangeNoteStatus.bind(this);
        this.remindNote = this.remindNote.bind(this);
    }

   
    
    filter(content){
        return content.length > 25 ? content.substring(0,25) + "..." : content;
    }

    addNote(s){
        this.setState(state=> {
            var notes = state.noteList;
            var id = state.noteList.length + 1;
            var date = s.date === undefined ? null : s.date;
            var time = s.time === undefined ? null : s.time;
            var status =""
            if(state.category === "To do")
                status = false;
            else
                status = undefined;
            let newNote = new NoteClass(id,s.title,s.category,s.content,status,date,time);
            notes.push(newNote);
            return {nodeList: notes}
        });
    }

    editNote(index,s){
        this.setState(state=>{
            var notes = state.noteList;

            notes[index].title = s.editTitle;
            notes[index].category = s.editCategory;
            notes[index].content = s.editContent;

            return {noteList: notes}

        });
        this.createNotification("Note was edited succesfully");
    }

    deleteNote(index){
        this.setState(state=>{
            var notes = state.noteList;
            notes.splice(index,1);
            return {noteList: notes}
        });
    }

    changeNoteStatus(index){
        this.setState(state=>{
            var notes = state.noteList;
            var prevStatus = notes[index].status;
            notes[index].status = !prevStatus;

            return {noteList: notes}
        });
    }

    remindNote(index,date,time){
        this.setState(state =>{
            var notes = state.noteList;
            notes[index].date = date;
            notes[index].time = time;
            return {noteList: notes}
        });
        this.createNotification("Reminder was set succesfully!");
    }

    showDetailForm(id){
        const {noteList} = this.state;

        var index = noteList.fieldIndex(function(value){
            return value.id === id;
        });

        confirmAlert({
            customUI: ({onClose}) =>{
                return(
                    <DetailForm noteList={noteList} index={index} onClose={onClose}/>
                );
            }
        });
    }

    showEditForm(id){
        const {noteList} = this.state;

        var index = noteList.fieldIndex(function(value){
            return value.id === id;
        });

        confirmAlert({
            customUI: ({onClose}) =>{
                return(
                    <div>
                        <EditForm noteList={noteList} index={index} onClose={onClose} editNote={this.editNote}/>
                        <NotificationContainer/>
                    </div>
                );
            }
        });
    }

    showDeleteForm(id){
        const {noteList} = this.state;

        var index = noteList.fieldIndex(function(value){
            return value.id === id;
        });

        confirmAlert({
            customUI: ({onClose}) =>{
                return(
                    <DeleteForm index={index} onClose={onClose} deleteNote={this.deleteNote}/>
                );
            }
        });
    }    

    showChangeNoteStatusForm(id){
        const {noteList} = this.state;

        var index = noteList.fieldIndex(function(value){
            return value.id === id;
        });

        confirmAlert({
            customUI: ({onClose}) =>{
                return(
                    <ChangeNoteStatusForm status = {noteList[index].status} index={index} onClose={onClose} changeNoteStatus={this.ChangeNoteStatus}/>
                );
            }
        });
    }

    showRemindForm(id){
        const {noteList} = this.state;

        var index = noteList.fieldIndex(function(value){
            return value.id === id;
        });

        confirmAlert({
            customUI: ({onClose}) =>{
                return(
                    <div>
                    <RemindForm onClose={onClose} index={index} redmindNote={this.remindNote}/>
                    <NotificationContainer/>
                    </div>
                );
            }
        });

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
                        id = {note.id}
                        title={note.title}
                        category={note.category}
                        content={this.filter(note.content)}
                        date = {note.date}
                        time = {note.time}
                        status={note.status}
                        showDetailForm ={this.showDetailForm}
                        showEditForm ={this.showEditForm}
                        showDeleteForm ={this.showDeleteForm}
                        showChangeNoteStatusForm ={this.showChangeNoteStatusForm}
                        showRemindForm ={this.showRemindForm}
                        />
                  );
              })}
              </tbody>
          </Table>
          <AddNote addNote={this.addNote}/>
        </div>
      );
  }
   
}

export default Notes;
