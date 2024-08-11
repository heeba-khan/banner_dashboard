const express = require('express');
const db = require('../config/db'); 
const router = express.Router();

// Get all banners
router.get('/', (req, res) => {
  db.query('SELECT * FROM banners', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

//Get single banner
router.get('/:id', (req, res) => {
  const bannerId = req.params.id;

  db.query('SELECT * FROM banners WHERE id = ?', [bannerId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Banner not found' });
    }
    res.json(results[0]); 
  });
});

// Create a new banner
router.post('/', (req, res) => {
  const { description, timer, link } = req.body;
  db.query('INSERT INTO banners (description, timer, link) VALUES (?, ?, ?)', [description, timer, link], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: result.insertId, description, timer, link });
  });
});

// Update banner visibility
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { visibility } = req.body;
  db.query('UPDATE banners SET visibility = ? WHERE id = ?', [visibility, id], (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: 'Banner visibility updated' });
  });
});

// Delete a single banner by ID
router.delete('/:id', (req, res) => {
  const bannerId = req.params.id;

  db.query('DELETE FROM banners WHERE id = ?', [bannerId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Banner not found' });
    }
    res.status(200).json({ message: 'Banner deleted successfully' });
  });
});

// Delete all banners
router.delete('/', (req, res) => {
  db.query('DELETE FROM banners', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: 'All banners deleted successfully' });
  });
});


module.exports = router;
