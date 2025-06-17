const express = require('express');
const path = require('path');

const app = express();

const sdkPath = path.join(__dirname, '../storybook-static/sdk');
const constellationPath = path.join(__dirname, '../storybook-static/constellation');

// Serve /sdk
app.use('/sdk', express.static(sdkPath, { index: 'index.html' }));

// Serve /constellation
app.use('/constellation', express.static(constellationPath, { index: 'index.html' }));

// Optional: redirect root to /sdk
app.get('/', (req, res) => {
  res.redirect('/sdk');
});

const PORT = 6060;
app.listen(PORT, () => {
  console.log(`Storybook server is running on port ${path.join(__dirname, '../storybook-static/sdk')}`);
  console.log(`Storybook SDK: http://localhost:${PORT}/sdk/`);
  console.log(`Storybook Constellation: http://localhost:${PORT}/constellation/`);
});
