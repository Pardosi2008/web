const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Server static
app.use(express.static(path.join(__dirname, 'public')));

// clean URL for /payment
app.get('/payment', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'payment.html'));
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});