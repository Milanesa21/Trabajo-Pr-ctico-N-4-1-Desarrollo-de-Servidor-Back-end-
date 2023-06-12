const express = require('express');
const router = express.Router();

// Ruta 1
router.get('/ruta1', (req, res) => {
  res.send('GET request en ruta1');
});

// Ruta 2
router.post('/ruta2', (req, res) => {
  res.send('POST request en ruta2');
});

// Ruta 3
router.put('/ruta3', (req, res) => {
  res.send('PUT request en ruta3');
});

// Ruta 4
router.delete('/ruta4', (req, res) => {
  res.send('DELETE request en ruta4');
});

module.exports = router;
