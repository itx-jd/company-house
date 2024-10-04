const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Render the homepage
app.get('/', (req, res) => {
  res.render('index', { message: 'Hello, World!' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
