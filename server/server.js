const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

app.post('/like', (req, res) => {
  const { animationTitle } = req.body;
  console.log(`Animation liked: ${animationTitle}`);
  res.status(200).send('Like recorded!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
