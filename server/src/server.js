require('dotenv').config();
require('express-async-errors');

const { host, port } = require('./config/config.js');
const { APP_STATIC_DIR, PUBLIC_STATIC_DIR } = require('./config/constants.js');

const express = require('express');
const cookierParser = require('cookie-parser');

const logMiddleware = require('./middlewares/logMiddleware.js');
const simulateDelayMiddleware = require('./middlewares/simulateDelayMiddleware.js');
const errorsMiddleware = require('./middlewares/errorsMiddleware.js');
const routes = require('./routes/index.js');

const app = express();

app.use(express.json());
app.use(cookierParser());

app.use('/app/static', express.static(APP_STATIC_DIR));
app.use('/public/static', express.static(PUBLIC_STATIC_DIR));

app.use(logMiddleware);
app.use('/api', simulateDelayMiddleware);

routes(app);

app.use(errorsMiddleware);

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
