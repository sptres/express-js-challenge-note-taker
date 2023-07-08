const fs = require('fs');
const notes = require('../db/db.json');
const { nanoid } = require('nanoid');

const addNote = (note) => {
    note.id = nanoid();
    newNotes = (notes) ? newNotes = notes : newNotes = [];
    newNotes.push(note);
    fs.writeFile('../db/db.json', JSON.stringify(newNotes), err => {
        if (err) throw err;
        console.log('Note has been added.');
    });
    return;
};

const deleteNote = (note) => {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === note.id) {
            notes.splice(i, 1);
            console.log('Note has been removed.');
        }
    };
    return;
};

module.exports = { addNote, deleteNote }