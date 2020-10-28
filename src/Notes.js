import React, { Component } from "react";
import Note from "./Note";
import { Table } from 'react-bootstrap';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import AddNote from "./AddNote";
import NoteClass from "./class/NoteClass";
import EditForm from "./forms/EditForm";
import DetailForm from "./forms/DetailForm";
import DeleteForm from "./forms/DeleteForm";
import ChangeNoteStatusForm from "./forms/ChangeNoteStatusForm";
import RemindForm from "./forms/RemindForm";

class Notes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      noteList: [
        new NoteClass(1, "Meeting", "Work", "Meet with John in restaurant Bistro daslasdhd askadj", "", null, ""),
        new NoteClass(2, "Test score", "Study", "25/30 points on practical part", "", null, ""),
        new NoteClass(3, "Go to the gym", "To do", "Meet with John in restaurant Bistro daslasdhd askadj", true, "2020-11-11", "11:30")]
    };

  }

  filter(content) {
    return content.length > 25 ? content.substring(0, 25) + "..." : content;
  }

  createNotification(message) {
    NotificationManager.success('Success', message);
  }

  showEditForm = (id) => {
    const { noteList } = this.state;
    var index = noteList.findIndex(function (value) {
      return value.id === id;
    });

    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div>
            <EditForm noteList={noteList} index={index} onClose={onClose} editNote={this.editNote} />
            <NotificationContainer />
          </div>
        );
      }
    });
  }

  showChangeNoteStatusForm = (id) => {
    const { noteList } = this.state;
    var index = noteList.findIndex(function (value) {
      return value.id === id;
    });

    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <ChangeNoteStatusForm status={noteList[index].status} index={index} onClose={onClose} changeNoteStatus={this.changeNoteStatus} />
        );
      }
    });
  }

  showDeleteForm = (id) => {
    const { noteList } = this.state;
    var index = noteList.findIndex(function (value) {
      return value.id === id;
    });

    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <DeleteForm index={index} onClose={onClose} deleteNote={this.deleteNote} />
        );
      }
    });
  }

  showDetailForm = (id) => {
    const { noteList } = this.state;
    var index = noteList.findIndex(function (value) {
      return value.id === id;
    });

    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <DetailForm noteList={noteList} index={index} onClose={onClose} />
        );
      }
    });
  }

  showRemindForm = (id) => {
    const { noteList } = this.state;
    var index = noteList.findIndex(function (value) {
      return value.id === id;
    });

    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div>
            <RemindForm onClose={onClose} index={index} remindNote={this.remindNote} />
            <NotificationContainer />
          </div>
        );
      }
    });
  }
  addNote = (s) => {
    this.setState(state => {
      var notes = state.noteList;
      var id = state.noteList.length + 1;
      var date = s.date === undefined ? null : s.date;
      var time = s.time === undefined ? null : s.time;
      var status = "";
      if (state.category === "To do")
        status = false;
      else
        status = "";
      let newNote = new NoteClass(id, s.title, s.category, s.content, status, date, time);
      notes.push(newNote);
      return { noteList: notes }
    });
  }

  editNote = (index, s) => {
    this.setState(state => {
      var notes = state.noteList;
      notes[index].title = s.editTitle;
      notes[index].category = s.editCategory;
      notes[index].content = s.editContent;

      return { noteList: notes }
    });
    this.createNotification('Note was edited successfully');
  }

  deleteNote = (index) => {
    this.setState(state => {
      var notes = state.noteList;
      notes.splice(index, 1);
      return { noteList: notes }
    });
  }

  changeNoteStatus = (index) => {
    this.setState(state => {
      var notes = state.noteList;
      var prevStatus = notes[index].status;
      notes[index].status = !prevStatus;
      return { noteList: notes }
    });
  }

  remindNote = (index, date, time) => {
    this.setState(state => {
      var notes = state.noteList;
      notes[index].date = date;
      notes[index].time = time;
      return { noteList: notes }
    });
    this.createNotification('Notification was added succesfully');
  }

  render() {
    return (
      <div className="content">
        <h3>List of notes</h3>
        <Table striped bordered>
          <thead>
            <tr align="center">
              <th>Title</th>
              <th>Category</th>
              <th>Content</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.noteList.map((note, key) => {
                return (
                  <Note
                    key={key}
                    id={note.id}
                    title={note.title}
                    category={note.category}
                    content={this.filter(note.content)}
                    date={note.date}
                    time={note.time}
                    status={note.status}
                    showDetailForm={this.showDetailForm}
                    showEditForm={this.showEditForm}
                    showDeleteForm={this.showDeleteForm}
                    showChangeNoteStatusForm={this.showChangeNoteStatusForm}
                    showRemindForm={this.showRemindForm}
                  />
                );
              })}
          </tbody>
        </Table>
        <AddNote addNote={this.addNote} />
      </div >
    );
  }

}

export default Notes;
