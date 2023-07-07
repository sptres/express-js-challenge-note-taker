const router = require('express').Router();
const db = require('../db/db.json');
const { addNote, removeNote } = require('../lib/data.js');

router.get('/notes', (req, res) => {
    res.send(data);
});
router.get('/', (req, res) => {
    res.send('API');
});
router.post('/notes', (req, res) => {
    addNote(req.body);
    res.json();
});
router.delete('/notes/:id', (req, res) => {
    removeNote(req.params);
    res.json();
});

module.exports = router;