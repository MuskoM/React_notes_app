import React from "react";
import { Table, TableHead,TableCell,TableRow, TableBody } from "@material-ui/core";
import Note from './Note'

var noteList = [
    
    {
        title: "Go to the gym",
        category: "Hobby",
        content: "Leg Day",
        date: new Date("2020-10-08")
    },
    {
        title: "Go to the gym",
        category: "Hobby",
        content: "Chest Day",
        date: new Date("2020-10-12")
    }
]

function Notes() {
  const header = <h3 style={{textAlign:"center"}}>List of notes</h3>;
  return (
    <div>
      {header}
      <Table>
          <TableHead>
              <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Content</TableCell>
                  <TableCell>Date</TableCell>
              </TableRow>
          </TableHead>
          <TableBody>
             <Note title ="pb"/>
          {noteList.map((note,key) =>{
              
              return(
                  <Note
                    key = {key} 
                    title={note.title}
                    category={note.category}
                    content={note.content}
                    date={note.date}
                    />
              );
          })}
          </TableBody>
      </Table>
    </div>
  );
}

export default Notes;
