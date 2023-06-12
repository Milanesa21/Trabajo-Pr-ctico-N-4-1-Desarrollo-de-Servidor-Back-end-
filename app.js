const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const port = 6000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('common'));
app.use(express.json());

// Rutas
const routes = require('./routes/routes');
app.use('/', routes);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
