const express = require('express');
const app = express();

const port = 30010;
app.listen(port, () => {
  console.log('Server started on port: ' + port);
});


app.get('/', (req, res) => {
     res.send("hello")

   
});