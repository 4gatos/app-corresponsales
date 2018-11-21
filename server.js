const express = require('express');
const next = require('next');
const routes = require('./routes/routes');
const config = require('./config/index.js');

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();
const handler = routes.getRequestHandler(app);

app.prepare()
  .then(() => {
    const server = express();
    server.use(handler);

    server.get('*', (req, res) => handle(req, res));

    server.listen(config.port, (err) => {
      if (err) throw err;
      console.log('> Ready');
    });
  });
