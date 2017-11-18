import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NotesGrid from './NotesGrid';

// import 'NotesApp.css';

class NotesApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            notes: []
        }
    }

    componentDidMount() {
        const localNotes = JSON.parse(localStorage.getItem('notes'));
        if (localNotes) {
            this.setState({ notes: localNotes });
        }
    };

    componentDidUpdate() {
        this._updateLocalStorage();
    };

    handleNoteDelete(note) {
        const noteId = note.id;
        const newNotes = this.state.notes.filter(() => (note) => {
            return note.id !== noteId;
        });
        this.setState({ notes: newNotes });
    };

    handleNoteAdd(newNote) {
        const newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        this.setState({ notes: newNotes });
    };

    render() {
        return (
            <div className="notes-app">
                <h2 className="app-header">NotesApp</h2>
                <NoteEditor onNoteAdd={this.handleNoteAdd} />
                <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete} />
            </div>
        );
    };

    _updateLocalStorage() {
        const notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes);
    }
}

export default NotesApp;