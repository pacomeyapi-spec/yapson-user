const express = require('express');
const path = require('path');
const app = express();

// Railway injecte PORT automatiquement - NE PAS forcer 3000 ou 8080
const PORT = process.env.PORT;

if (!PORT) {
  console.error('ERROR: PORT env variable not set');
  process.exit(1);
}

app.use(express.static(path.join(__dirname)));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(parseInt(PORT), '0.0.0.0', () => {
  console.log(`Server running on 0.0.0.0:${PORT}`);
});
