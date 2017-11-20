import React, { Component } from 'react';

import 'components/notes/note/Note.css';

class Note extends Component{
    render() {
        const style = { backgroundColor: this.props.color };

        return (
            <div className="note" style={style}>
              <span className="delete-note" onClick={this.props.onDelete}> × </span>
                {this.props.children}
            </div>
        );
    }
}

export default Note;