const express = require("express");
const app = express();
const cors = require('cors');

const accounts = require('./modules/accounts');

app.use(cors());
app.use(express.json());

app.use('/accounts', accounts);

app.listen(5000, () => {
  console.log('server has started on port 5000');
});