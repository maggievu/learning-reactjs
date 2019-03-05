import React, { Component } from 'react';
import Note from './Note';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [
                {
                    id: 0,
                    note: "#1: How do state and event connect?"
                },
                {
                    id: 1,
                    note: "#2: create-react-app from npm: good or bad?"
                },
                {
                    id: 2,
                    note: "#3: treat styling as components or traditional css?"
                }
            ]
        }
        this.eachNote = this.eachNote.bind(this);
        this.update = this.update.bind(this);
    }

    update(newText, i) {
        console.log('updating thing at index', i, newText);
        this.setState(prevState => ({
            notes: prevState.notes.map(
                note => (note.id !== i) ? note : {...note, note: newText}
            )
        }));
    }

    eachNote(note, i) {
        return (
            <Note key={i} index={i} onChange={this.update}>
                {note.note}
            </Note>
        )
    }

    render() {
        return (
            <div className="board">
                {this.state.notes.map(this.eachNote)}
            </div>
        )
    }
}

export default Board
