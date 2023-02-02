const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

const port = process.env.PORT || 3333;

mongoose.connect('mongodb+srv://gustavo:82648257259Gg@cluster0.hn9v6or.mongodb.net/Cluster0?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);
app.listen(port, () => {
  console.info('aplicação rodando normalmente');
});

// 26 min
