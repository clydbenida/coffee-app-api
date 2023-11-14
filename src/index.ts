import express = require('express');
import router = require('./routes');

const app = express();

app.use('/api', router);

app.listen(8080, () => {
  console.log("App is running in port 8080. Happy hacking!");
})