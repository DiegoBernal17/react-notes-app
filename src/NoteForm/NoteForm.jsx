import React, { Component } from 'react';
import './NoteForm.css';

class NoteForm extends Component {
    constructor() {
        super();
        this.addNote = this.addNote.bind(this);
    }

    addNote() {
        if(this.textInput.value != '') {
            this.props.addNote(this.textInput.value);
            this.textInput.value = '';
        }
        this.textInput.focus();
    }

    render() {
        return (
            <div className="NoteForm">
                <input
                ref={ input => { this.textInput = input; } }
                 type="text" placeholder="Escribe una nota"  />
                <button
                    onClick={this.addNote}
                >Agregar nota</button>
            </div>
        )
    }
}

export default NoteForm;