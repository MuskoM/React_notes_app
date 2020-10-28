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