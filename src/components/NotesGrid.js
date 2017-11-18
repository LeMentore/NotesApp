import React, { Component } from 'react';
import Masonry from 'masonry-layout';
import Note from './Note';

import './Note.css';

class NotesGrid extends Component {
    componentDidMount() {
        const grid = this.refs.grid;

        this.mansory = new Masonry( grid, {
            itemSelector: '.note',
            columnWidth: 200,
            gutter: 10,
            isFitWidth: true
        });
    };

    componentDidUpdate(prevProps) {
        if (this.props.notes.length !== prevProps.notes.length) {
            this.mansory.reloadItems();
            this.mansory.layout();
        }
    };

    render() {
        const onNoteDelete = this.props.onNoteDelete;

        return (
            <div className="notes-grid" ref="grid">
                {
                    this.props.notes.map((note) => {
                        return (
                            <Note
                                key={note.id}
                                onDelete={onNoteDelete.bind(null, note)}
                                color={note.color}>
                                {note.text}
                            </Note>
                        );
                    })
                }
            </div>
        )
    }
}

export default NotesGrid;