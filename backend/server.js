const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist/portfolio'));

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/dist/portfolio/index.html');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
