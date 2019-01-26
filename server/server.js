const express = require('express');
const path = require('path');
const fs = require('fs');
const showdown = require('showdown');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.locals = {
  publicDir: path.resolve(__dirname, '../public')
};

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = Number(process.env.PORT || 3000);

// set about page route
app.get('/post/:id', (req, res) => {
  console.log(req.params.id);

  const converter = new showdown.Converter();
  let text;

  try {
    text = fs.readFileSync(
      path.join(__dirname, '../posts', 'core_test.md'),
      'utf8'
    );
  } catch (e) {
    text = 'There was an unexpected error.';
    console.error(e);
  }

  res.json({
    html: converter.makeHtml(text)
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${req.app.locals.publicDir}/main.html`));
});

app.listen(port, () => {
  console.log(`Our app is running on http://localhost:${port}`);
});
